"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PopupProvider } from "@/context/enrollPopupContext";
import Loader from "@/component/loader/loader";
import EnrollPopup from "@/component/modal/popup/enrollPopup";
import FloatingChatButton from "@/component/FloatingChatButton";
import dynamic from "next/dynamic";

// Dynamically import Navbar and Footer with Loader fallback
const Navbar = dynamic(() => import("@/component/Navbar"), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import("@/component/Footer"), {
  loading: () => <Loader />,
});

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/admin");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader only until the page is fully hydrated/rendered
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [pathname]);

  if (loading) {
    // Small loader overlay
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Loader  />
      </div>
    );
  }

  return (
    <PopupProvider>
      {!hideLayout && <Navbar />}
      {children}
      <EnrollPopup />
      <FloatingChatButton whatsappNumber="18886814808" phoneNumber="+18886814808" />
      {!hideLayout && <Footer />}
    </PopupProvider>
  );
}