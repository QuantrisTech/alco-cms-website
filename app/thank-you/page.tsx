import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-lg">
        <div className="mb-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <svg
              className="h-10 w-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">
          Thank You!
        </h1>

        <p className="text-lg text-gray-600 mb-2">
          Your request has been submitted successfully.
        </p>

        <p className="text-gray-500 mb-8">
          We appreciate your interest. Our team will review your submission and
          get back to you as soon as possible.
        </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
          >
            Back to Home
          </Link>

          <a
            href="tel:+923360082222"
            className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition"
          >
            +92 336 008 2222
          </a>
        </div>
      </div>
    </div>
  );
}