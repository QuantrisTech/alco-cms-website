"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getBlogBySlug, getBlogs } from "@/utils/api";
import RichText from "@/component/blog/RichText";

// ── Types ──
type Blog = {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: any;
    category: string;
    tags: string[];
    read_time: number;
    thumbnail?: string;
    views: number;
    is_featured: boolean;
    createdAt: string;
    author?: { name: string };
};

// ── Helpers ──
const categoryColor: Record<string, { bg: string; text: string }> = {
    nlp: { bg: "bg-sky-50", text: "text-sky-600" },
    icf: { bg: "bg-emerald-50", text: "text-emerald-600" },
    hypnotherapy: { bg: "bg-violet-50", text: "text-violet-600" },
    coaching: { bg: "bg-amber-50", text: "text-amber-600" },
    mindset: { bg: "bg-rose-50", text: "text-rose-600" },
    general: { bg: "bg-gray-50", text: "text-gray-600" },
};

const getCategoryStyle = (cat: string) =>
    categoryColor[cat] ?? categoryColor.general;

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
    });

// ── Related Blog Card ──
function RelatedCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blogs/${blog.slug}`} className="group flex gap-4 items-start">
            <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                {blog.thumbnail ? (
                    <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors leading-snug">
                    {blog.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{blog.read_time} min read</p>
            </div>
        </Link>
    );
}

// ── Skeleton ──
function BlogSkeleton() {
    return (
        <div className="animate-pulse space-y-6">
            <div className="h-10 bg-gray-100 rounded-2xl w-3/4" />
            <div className="h-5 bg-gray-100 rounded-xl w-1/2" />
            <div className="h-[420px] bg-gray-100 rounded-3xl" />
            <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className={`h-4 bg-gray-100 rounded-lg ${i % 3 === 2 ? "w-2/3" : "w-full"}`} />
                ))}
            </div>
        </div>
    );
}

// condition
const renderBlock = (block: any, index: any) => {
    switch (block.type) {
        case "h1":
            return <h1 key={index} className="text-4xl font-bold mb-4">{block.text}</h1>;

        case "h2":
            return <h2 key={index} className="text-2xl font-bold mt-8 mb-3">{block.text}</h2>;

        case "h3":
            return <h3 key={index} className="text-xl font-semibold mt-6 mb-2">{block.text}</h3>;

        case "p":
            return <p key={index} className="text-base leading-7 mb-4 text-gray-700"><RichText text={block.text} /></p>;

        case "quote":
            return (
                <blockquote key={index} className="border-l-4 border-gray-400 pl-4 italic text-gray-500 mb-4">
                    — {block.text}
                </blockquote>
            );

        case "ul":
            return (
                <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                    {block.items.map((item: any, i: any) => (
                        <li key={i} className="text-gray-700">
                            <strong>{item.bold}</strong> <RichText text={block.text} />
                        </li>
                    ))}
                </ul>
            );

        case "ol":
            return (
                <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
                    {block.items.map((item: any, i: any) => (
                        <li key={i} className="text-gray-700">
                            <strong>{item.bold}</strong> <RichText text={block.text} />
                        </li>
                    ))}
                </ol>
            );

        default:
            return null;
    }
};

// ── Main Page ──
export default function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [related, setRelated] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [copied, setCopied] = useState(false);
    const [readProgress, setReadProgress] = useState(0);

    // Fetch Blog
    useEffect(() => {
        if (!slug) return;
        const fetch = async () => {
            setLoading(true);
            setNotFound(false);
            try {
                const res = await getBlogBySlug(slug as string);
                console.log(res, "BlogDetailPage")
                const data: Blog = res.data?.data ?? res.data;
                setBlog(data);

                // Fetch related by same category
                const relRes = await getBlogs({
                    category: data.category,
                    status: "published",
                    limit: 4,
                });
                setRelated(
                    (relRes.data?.data ?? []).filter((b: Blog) => b.slug !== slug).slice(0, 3)
                );
            } catch {
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, [slug]);

    // Read Progress Bar
    useEffect(() => {
        const onScroll = () => {
            const doc = document.documentElement;
            const scrollTop = doc.scrollTop;
            const scrollHeight = doc.scrollHeight - doc.clientHeight;
            setReadProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const categoryStyle = blog ? getCategoryStyle(blog.category) : getCategoryStyle("general");

    // ── Not Found ──
    if (notFound) {
        return (
            <main className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-3">Blog Not Found</h1>
                    <p className="text-gray-400 mb-8">The article you are looking for does not exist.</p>
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blogs
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#FAFAF8]">

            {/* ── Read Progress Bar ── */}
            <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
                <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-75"
                    style={{ width: `${readProgress}%` }}
                />
            </div>

            {loading || !blog ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <BlogSkeleton />
                </div>
            ) : (
                <>
                    {/* ── Hero ── */}
                    <section className="relative bg-gray-950 overflow-hidden">
                        {blog.thumbnail && (
                            <>
                                <img
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/40" />
                            </>
                        )}
                        {!blog.thumbnail && (
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-20 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl" />
                            </div>
                        )}
                        <div className="relative container mx-auto px-4 sm:px-6 py-20 md:py-28">
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                                <Link href="/" className="hover:text-amber-400 transition">Home</Link>
                                <span>/</span>
                                <Link href="/blogs" className="hover:text-amber-400 transition">Blog</Link>
                                <span>/</span>
                                <span className="text-gray-500 capitalize">{blog.category}</span>
                            </div>

                            {/* Category Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className={`text-xs font-bold px-3 py-1.5 rounded-full capitalize ${categoryStyle.bg} ${categoryStyle.text}`}>
                                    {blog.category}
                                </span>
                                {blog.is_featured && (
                                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-400">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                {blog.title}
                            </h1>

                            {/* Excerpt */}
                            {blog.excerpt && (
                                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                                    {blog.excerpt}
                                </p>
                            )}

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
                                {blog.author?.name && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                                            {blog.author.name.charAt(0)}
                                        </div>
                                        <span className="text-gray-300 font-medium">{blog.author.name}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {formatDate(blog.createdAt)}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {blog.read_time} min read
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    {blog.views} views
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Main Content Layout ── */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
                        <div className="flex gap-12 items-start">

                            {/* ── Article Content ── */}
                            {/* <article className="flex-1 min-w-0">
                                <div
                                    className="prose prose-lg prose-gray max-w-none
                    prose-headings:font-black prose-headings:text-gray-900
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
                    prose-strong:text-gray-900 prose-strong:font-bold
                    prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-amber-400
                    prose-blockquote:bg-amber-50 prose-blockquote:rounded-r-2xl
                    prose-blockquote:py-1 prose-blockquote:px-6
                    prose-blockquote:text-gray-700 prose-blockquote:not-italic
                    prose-code:bg-gray-100 prose-code:text-gray-800
                    prose-code:px-2 prose-code:py-0.5 prose-code:rounded-lg
                    prose-code:text-sm prose-code:font-mono
                    prose-pre:bg-gray-900 prose-pre:rounded-2xl
                    prose-img:rounded-2xl prose-img:shadow-md
                    prose-ul:space-y-1 prose-ol:space-y-1
                    prose-li:text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />

                            //  ── Tags ── 
                            {blog.tags?.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Tags</p>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-xl font-medium hover:bg-amber-50 hover:text-amber-700 transition cursor-default"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            //  ── Share + Back ── 
                            <div className="mt-10 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to Blogs
                                </Link>
                                <button
                                    onClick={copyLink}
                                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition ${copied
                                        ? "bg-emerald-500 text-white"
                                        : "bg-gray-900 text-white hover:bg-gray-800"
                                        }`}
                                >
                                    {copied ? (
                                        <>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                            Copy Link
                                        </>
                                    )}
                                </button>
                            </div>
                        </article> */}
                            <div className="blog-content">
                                {blog?.content?.map((block: any, index: any) => renderBlock(block, index))}
                            </div>

                            {/* ── Sidebar ── */}
                            <aside className="hidden lg:block w-80 flex-shrink-0 sticky top-8 space-y-6">

                                {/* Blog Info Card */}
                                <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                                    <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">Article Info</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Category</span>
                                            <span className={`font-semibold capitalize px-2 py-0.5 rounded-lg ${categoryStyle.bg} ${categoryStyle.text}`}>
                                                {blog.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Read Time</span>
                                            <span className="font-semibold text-gray-700">{blog.read_time} min</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Views</span>
                                            <span className="font-semibold text-gray-700">{blog.views}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Published</span>
                                            <span className="font-semibold text-gray-700">{formatDate(blog.createdAt)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Related Blogs */}
                                {related.length > 0 && (
                                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                                        <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">Related Articles</h3>
                                        <div className="space-y-4">
                                            {related.map((r) => (
                                                <RelatedCard key={r._id} blog={r} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Card */}
                                <div className="bg-gray-950 rounded-2xl p-5 relative overflow-hidden">
                                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />
                                    <div className="relative">
                                        <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center mb-4">
                                            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-white font-bold text-sm mb-2">Explore All Articles</h4>
                                        <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                                            Discover more insights on NLP, coaching, and mindset transformation.
                                        </p>
                                        <Link
                                            href="/blogs"
                                            className="block text-center bg-amber-400 text-gray-900 text-sm font-bold py-2.5 rounded-xl hover:bg-amber-300 transition"
                                        >
                                            Browse All Blogs
                                        </Link>
                                    </div>
                                </div>

                            </aside>
                        </div>
                    </div>
                </>
            )
            }
        </main >
    );
}
