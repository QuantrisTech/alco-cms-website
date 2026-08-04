"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PopupProvider } from "@/context/enrollPopupContext";
import Loader from "@/component/loader/loader";
import EnrollPopup from "@/component/modal/popup/enrollPopup";
import FloatingChatButton from "@/component/FloatingChatButton";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { Toaster } from "react-hot-toast";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/admin") ||
  pathname === "/thank-you";;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // 👈 small delay only

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* ✅ Overlay Loader (no layout shift) */}
      {loading && (
        <div className="fixed inset-0 z-[999] bg-white flex items-center justify-center">
          <Loader />
        </div>
      )}

      <PopupProvider>
        {!hideLayout && <Navbar />}
        {children}
        <EnrollPopup />
        <FloatingChatButton whatsappNumber="18886814808" phoneNumber="+18886814808" />
        {!hideLayout && <Footer />}
      </PopupProvider>
      <Toaster />
    </>
  );
}