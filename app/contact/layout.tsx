import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ALCO",
  description: "Get in touch with AL&CO for NLP and Hypnotherapy training programs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}