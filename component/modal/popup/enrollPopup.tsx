"use client";
import React, { useEffect } from "react";
import Popup from "./popup";
import Button from "@/component/button";
import { usePopup } from "@/context/enrollPopupContext";
import InputField from "@/component/inputfield";
import SelectField from "@/component/selectfield";
import Checkboxfield from "@/component/checkboxfield";
import { useForm, Controller } from "react-hook-form";
import EnrollPopupImage from "@/assets/enroll-popup/enroll-popup.webp";

type EnrollPopupProps = {
  buttonText?: string;
  title?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

const goalOptions = [
  { label: "Emotional Stability", value: "emotional" },
  { label: "Financial Freedom", value: "financial" },
  { label: "Become a Certified Coach", value: "coach" },
  { label: "Professional Growth", value: "growth" },
  { label: "Relationship Mastery", value: "relationship" },
  { label: "International Certifications", value: "international" },
  { label: "Personal Development", value: "personal" },
];

const programOptions = [
  { label: "NLP Practitioner (Triple Certification)", value: "nlp_practitioner" },
  { label: "NLP Master Practitioner", value: "nlp_master" },
  { label: "Advanced Hypnotherapy", value: "hypno" },
  { label: "NLP Trainer Certification", value: "trainer" },
  { label: "Hypnosis Trainer Certification", value: "hypnosis_trainer" },
  { label: "NLP Master Trainer Program", value: "master_trainer" },
];

export default function EnrollPopup({
  title = "Welcome To AL&CO",
  description = (
    <>
      <p className="mb-2">
        We are Internationally Certified and Pakistan’s Best Institute of NLP Training & Coaching Accreditation.
      </p>
      <p className="mb-2">
        We offer a variety of NLP courses and certification at all levels, including:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>NLP Practitioner </li>
        <li>NLP Master Practitioner Training</li>
        <li>Advanced Hypnotherapy and Interventionist training </li>
        <li>NLP and Hypnosis Trainer’s Training Program</li>
        <li>NLP Master Trainer Program</li>
      </ul>
    </>
  ),
  children,
}: EnrollPopupProps) {
  const { isOpen, closePopup } = usePopup();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      program: "",
      profession: "",
      concern: "",
      otherInfo: "",
      goals: [] as string[],
      programs: [] as string[],
      acceptPolicy: false,
      acceptTerms: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    closePopup();
  };

  const watchAllFields = watch();

  return (
    <Popup isOpen={isOpen} onClose={() => closePopup()}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-x-6 gap-y-4 h-[80dvh] overflow-y-auto pr-2 pb-4 xl:pb-0 xl:h-full xl:overflow-hidden mini-scroll">
          {/* Left Column */}
          <div className="col-span-12 xl:col-span-4 ">
            <img
              src={EnrollPopupImage.src}
              alt="Enroll popup"
              className="w-full h-[180px] sm:h-[200px] md:h-[300px] xl:h-[200px] object-cover rounded-md "
            />
            <div className="mt-4">
              <h2 className="text-3xl font-outfit font-semibold">{title}</h2>
              <div className="text-sm font-outfit text-gray-600 mt-3">{description}</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 xl:col-span-8">
            {children || (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    {/* Name */}
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "Full Name is required" }}
                      render={({ field }) => (
                        <InputField
                          label="Full Name"
                          {...field}
                          error={errors.name?.message}
                        />
                      )}
                    />

                    {/* Phone */}
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: "Phone Number is required" }}
                      render={({ field }) => (
                        <InputField
                          label="Phone"
                          type="tel"
                          {...field}
                          error={errors.phone?.message}
                        />
                      )}
                    />

                    {/* Program */}
                    <Controller
                      name="program"
                      control={control}
                      rules={{ required: "Program is required" }}
                      render={({ field }) => (
                        <SelectField
                          label="Select Program"
                          options={[
                            { label: "NLP Practitioner", value: "nlp_practitioner" },
                            { label: "NLP Master Practitioner", value: "nlp_master" },
                          ]}
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.program?.message}
                        />
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Email */}
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: "Email is required" }}
                      render={({ field }) => (
                        <InputField
                          label="Email"
                          type="email"
                          {...field}
                          error={errors.email?.message}
                        />
                      )}
                    />

                    {/* Profession */}
                    <Controller
                      name="profession"
                      control={control}
                      rules={{ required: "Profession is required" }}
                      render={({ field }) => (
                        <InputField
                          label="Profession"
                          {...field}
                          error={errors.profession?.message}
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Goals and Concern */}
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-2 justify-between">
                    <Controller
                      name="goals"
                      control={control}
                      render={({ field }) => (
                        <Checkboxfield
                          label="Which goal would you like to attain via NLP?"
                          options={goalOptions}
                          values={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />

                    <Controller
                      name="concern"
                      control={control}
                      rules={{ required: "Concern is required" }}
                      render={({ field }) => (
                        <InputField
                          label="Share your concern briefly"
                          {...field}
                          textarea
                          error={errors.concern?.message}
                        />
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-2 justify-between">
                    <Controller
                      name="programs"
                      control={control}
                      render={({ field }) => (
                        <Checkboxfield
                          label="Which program do you want to enroll in?"
                          options={programOptions}
                          values={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />

                    <Controller
                      name="otherInfo"
                      control={control}
                      render={({ field }) => (
                        <InputField
                          label="Any other query/information"
                          {...field}
                          textarea
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Checkboxes and Submit */}
          <div className="col-span-12 space-y-2 ">
            <div className="space-y-2">
              <Controller
                name="acceptPolicy"
                control={control}
                defaultValue={false}
                rules={{ required: "You must accept Policy consent" }}
                render={({ field }) => (
                  <Checkboxfield
                    checked={field.value}
                    onChange={field.onChange}
                    color="black"
                    label={
                      <span>
                        By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others.
                        Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.

                      </span>
                    }
                  />
                )}
              />

              <Controller
                name="acceptTerms"
                control={control}
                defaultValue={false}
                rules={{ required: "You must accept Terms consent" }}
                render={({ field }) => (
                  <Checkboxfield
                    checked={field.value}
                    onChange={field.onChange}
                    color="black"
                    label={
                      <span>
                        By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others.
                        Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                      </span>
                    }
                  />
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center ">
              <div className="text-xs text-gray-500 mb-2 sm:mb-0 sm:ms-6">
                <a href="/privacy-policy" className="underline text-primary me-2">
                  Privacy Policy
                </a>
                |
                <a href="/terms" className="underline text-primary ms-2">
                  Terms of Service
                </a>
              </div>
              <div className="w-full sm:max-w-[150px]">
              <Button text="Submit" type="submit" variant="primary" className="mt-2 w-full " />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Popup>
  );
}