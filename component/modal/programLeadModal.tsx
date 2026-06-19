"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/component/button";
import InputField from "@/component/inputfield";
import { useForm, Controller } from "react-hook-form";
import { createProgramLead } from "@/utils/api";
import toast from "react-hot-toast";
import { Turnstile } from "@marsidev/react-turnstile";
import { event } from "@/libs/fpixel";
import Popup from "./popup/popup";

type Props = {
  isOpen: boolean;
  programId: string;
  programName?: string;
  onClose: () => void;
};

export default function ProgramLeadModal({ isOpen, programId, programName, onClose }: Props) {
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<any>(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: { name: "", email: "", phone: "" },
  });

  useEffect(() => {
    const params = new URLSearchParams(window?.location?.search);
    const source = params.get("utm_source") || params.get("source") || params.get("ref");
    if (source && !localStorage.getItem("user_source")) {
      localStorage.setItem("user_source", source);
    }
  }, []);

  if (!isOpen) return null;

  const onSubmit = async (data: any) => {
    if (!turnstileToken) {
      toast.error("Please complete the security check.");
      return;
    }

    const nameParts = data.name.trim().split(" ");
    const first_name = nameParts[0];
    const last_name = nameParts.slice(1).join(" ") || first_name; // backend last_name required mange to fallback

    try {
      const source = localStorage.getItem("user_source");

      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        programId,
        turnstileToken,
      };

      await createProgramLead(payload);

      event("Lead", { content_name: `Program Card - ${programName || programId}` });
      toast.success("Submitted! Our team will reach out shortly.");

      localStorage.removeItem("user_source");
      reset();
      setTurnstileToken("");
      turnstileRef.current?.reset();
      onClose();
    } catch (err: any) {
      const msg = err?.response?.data?.message || "Something went wrong. Try again.";
      toast.error(msg);
      setTurnstileToken("");
      turnstileRef.current?.reset();
    }
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="p-2">
        <h4 className="text-xl font-outfit font-semibold mb-4 text-primary">
          {programName ? `Enquire about ${programName}` : "Get Program Details"}
        </h4>

        <div className="flex flex-col gap-4">
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <InputField label="Full Name*" {...field} error={errors.name?.message} />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
            }}
            render={({ field }) => (
              <InputField label="Email*" type="email" {...field} error={errors.email?.message} />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: { value: /^[0-9+\s\-]{10,15}$/, message: "Enter a valid phone number (10-15 digits)" },
            }}
            render={({ field }) => (
              <InputField label="Phone*" type="tel" {...field} error={errors.phone?.message} />
            )}
          />
        </div>

        <div className="mt-4">
          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken("")}
            onError={() => setTurnstileToken("")}
          />
        </div>

        <Button
          text={isSubmitting ? "Submitting..." : "Submit"}
          type="submit"
          variant="primary"
          className="mt-4 w-full"
          disabled={isSubmitting || !turnstileToken}
        />
      </form>
    </Popup>
  );
}