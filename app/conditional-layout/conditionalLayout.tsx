"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PopupProvider } from "@/context/enrollPopupContext";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Loader from "@/component/loader/loader";
import FloatingChatButton from "@/component/FloatingChatButton";
import EnrollPopup from "@/component/modal/popup/enrollPopup";

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
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <PopupProvider>
      {!hideLayout && <Navbar />}
      {children}
      <EnrollPopup />
      <FloatingChatButton
        whatsappNumber="18886814808"
        phoneNumber="+18886814808"
      />
      {!hideLayout && <Footer />}
      </PopupProvider>
    </>
  );
}
