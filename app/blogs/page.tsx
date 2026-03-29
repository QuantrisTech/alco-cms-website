import Link from "next/link";

export default function Blogs() {
  return (
    <div className="min-h-[70dvh] flex flex-col items-center justify-center text-center px-4 
    bg-gradient-to-br from-[#e7e7fc] via-[#fdfcf2] to-[#e0f2fe]">

      {/* Small top label (optional like image) */}
      <p className="absolute top-6 text-xs tracking-widest text-gray-500 uppercase">
        Blogs
      </p>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-semibold text-primary mb-4">
        Great things coming soon.
      </h1>

      {/* Sub text */}
      <p className="text-gray-500 max-w-xl mb-6">
        Our blog is under construction. Stay tuned for amazing content and updates!
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mb-6 px-6 py-3 border border-primary text-primary rounded-md hover:bg-gray-100 transition"
      >
        Go Back Home →
      </Link>

      {/* Optional Subscribe Section (like image) */}
      <div className=" w-full max-w-xl px-4">
        <div className="flex items-center gap-2 border border-gray-300 rounded-md overflow-hidden bg-white/70 backdrop-blur">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 outline-none bg-transparent text-sm"
          />
          <button className="px-4 py-3 bg-primary text-white text-sm hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>

    </div>
  );
}