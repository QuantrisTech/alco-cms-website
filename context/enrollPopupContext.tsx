"use client";
import { createContext, useContext, useState } from "react";

type EnrollPopupContextType = {
  openPopup: () => void;
  closePopup: () => void;
  isOpen: boolean;
};

const EnrollPopupContext = createContext<EnrollPopupContextType | null>(null);

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <EnrollPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </EnrollPopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(EnrollPopupContext);
  if (!context) throw new Error("usePopup must be used within PopupProvider");
  return context;
};