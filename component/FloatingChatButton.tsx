"use client";
import { useState } from "react";

interface FloatingChatButtonProps {
  whatsappNumber: string;
  phoneNumber: string;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({
  whatsappNumber,
  phoneNumber,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Main button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        💬
      </button>

      {/* Options menu */}
      {showOptions && (
        <div className="flex flex-col space-y-2 mt-2 animate-slide-up">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Phone
          </a>
          <button
            onClick={() => setShowOptions(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Hide
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingChatButton;