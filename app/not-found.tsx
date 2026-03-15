import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}