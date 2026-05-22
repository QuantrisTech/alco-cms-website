import Link from "next/link";
import { ReactNode } from "react";

export type PolicySection = {
    label: string;
    title: string;
    content: ReactNode;
};

export type PolicyContactCard = {
    title: string;
    description: string;
    email: string;
    address: string;
};

export type PolicyContentType = {
    sections: PolicySection[];
    contactCard: PolicyContactCard;
};

type Props = {
    data: PolicyContentType;
};

export default function PolicyContent({ data }: Props) {
    return (
        <section className="py-6 md:py-8 lg:py-12 xl:py-16 max-w-7xl mx-auto sm:px-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    {/* Sections */}
                    {data.sections.map((section, i) => (
                        <div
                            key={i}
                            className="pb-10 mb-10 border-b border-primary/10 last:border-0 last:mb-0"
                        >
                            <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">
                                {section.label}
                            </p>
                            <h2 className="h4 font-semibold text-neutral-700 mb-5">
                                {section.title}
                            </h2>
                            {section.content}
                        </div>
                    ))}

                    {/* Contact card */}
                    <div className="mt-12 border border-primary/10 rounded-2xl px-6 py-10 text-center bg-primary/3">
                        <h3 className="h4 font-semibold text-neutral-600 mb-3">Privacy Inquiries</h3>
                        <p className="text-neutral-500 custom-text1 mb-2">
                            For any data-related requests or concerns, contact our privacy team.
                        </p>
                        <p className="text-neutral-500 custom-text1 mb-1">
                            Email:{" "}
                            <Link href="mailto:privacy@arslanlarik.com" className="text-secondary underline">
                                privacy@arslanlarik.com
                            </Link>
                        </p>
                        <p className="text-neutral-500 custom-text1">
                            Arslan Larik & Company, Karachi, Pakistan
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}