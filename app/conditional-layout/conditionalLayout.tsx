"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Loader from "@/component/loader/loader";
import FloatingChatButton from "@/component/FloatingChatButton";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  const hideLayout = pathname.startsWith("/admin");

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {/* <FloatingChatButton
        whatsappNumber="1234567890"
        phoneNumber="+1234567890"
      /> */}
      {!hideLayout && <Footer />}
    </>
  );
}