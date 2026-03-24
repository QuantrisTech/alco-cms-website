"use client";
import React, { useState } from "react";
import Popup from "./popup";
import Button from "@/component/button";
import InputField from "@/component/inputfield";
import { usePopup } from "@/context/enrollPopupContext";
import SelectField from "@/component/selectfield";
import Checkboxfield from "@/component/checkboxfield";
import EnrollPopupImage from "@/assets/enroll-popup/enroll-popup.webp"

type EnrollPopupProps = {
  buttonText?: string;
  title?: string;
  description?: any;
  children?: React.ReactNode
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    profession: "",
    message: "",
    goals: [] as string[],
    programs: [] as string[],
    concern: "",
    otherInfo: "",
    acceptPolicy: false,
    acceptTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptPolicy || !formData.acceptTerms) {
      alert("Please accept required consents");
      return;
    }

    alert("Form Submitted 🚀\n" + JSON.stringify(formData, null, 2));
    closePopup();
  };

  return (
    <>
      {/* Popup */}
      <Popup isOpen={isOpen} onClose={() => closePopup()}>
        <form className="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-x-6 gap-y-4">
            <div className="col-span-4">
              <div>
                <img
                  src={EnrollPopupImage.src}
                  alt="Enroll popup"
                  className="w-full h-[90px] sm:h-[120px] md:h-[150px] lg:h-[200px] object-cover rounded-md "
                />
              </div>

              <div className="mt-4">
                <h2 className="text-3xl font-outfit font-semibold">{title}</h2>
                <div className="text-sm font-outfit text-gray-600 mt-3">
                  {description}
                </div>
              </div>

            </div>
            <div className="col-span-8">
              {children ? (
                children
              ) : (
                <div className="">
                  <div className="grid grid-cols-2 gap-4">
                    <div className=" flex flex-col gap-[20px]">
                      <InputField
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        // size="small"
                        onChange={handleChange}
                        error={!formData.name?.trim() ? "Full Name is required" : ""}
                      />

                      <InputField
                        label="Phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        // size="small"
                        onChange={handleChange}
                        error={!formData.phone?.trim() ? "Phone Number is required" : ""}
                      />

                      <SelectField
                        label="Select Program"
                        value={formData.program}
                        onChange={(val) =>
                          setFormData((prev) => ({ ...prev, program: val }))
                        }
                        options={[
                          { label: "NLP Practitioner", value: "NLP Practitioner" },
                          { label: "NLP Master Practitioner", value: "NLP Master Practitioner" },
                        ]}
                      />

                    </div>
                    <div className="flex flex-col gap-[20px] ">

                      <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        // size="small"
                        onChange={handleChange}
                        error={!formData.email?.trim() ? "Email is required" : ""}
                      />

                      <InputField
                        label="Profession"
                        name="profession"
                        value={formData.profession}
                        // size="small"
                        onChange={handleChange}
                        error={!formData.profession?.trim() ? "Profession is required" : ""}
                      />

                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className=" flex flex-col gap-2 justify-between">

                      <Checkboxfield
                        label="Which goal would you like to attain via NLP?"
                        options={goalOptions}
                        values={formData.goals}
                        onChange={(vals) =>
                          setFormData((prev) => ({ ...prev, goals: vals }))
                        }
                      />

                      <InputField
                        label="Share your concern briefly"
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        textarea
                        error={!formData.concern?.trim() ? "Concern is required" : ""}
                      />

                    </div>
                    <div className="flex flex-col gap-2 justify-between">

                      <Checkboxfield
                        label="Which program do you want to enroll in?"
                        options={programOptions}
                        values={formData.programs}
                        onChange={(vals) =>
                          setFormData((prev) => ({ ...prev, programs: vals }))
                        }
                      />

                      <InputField
                        label="Any other query/information"
                        name="otherInfo"
                        value={formData.otherInfo}
                        onChange={handleChange}
                        textarea
                        // error={!formData.concern?.trim() ? "Concern is required" : ""}
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>
            <div className="col-span-12">
              <div className="space-y-2">
                <Checkboxfield
                  checked={formData.acceptPolicy}
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, acceptPolicy: val }))
                  }
                  color="black"
                  label={
                    <span>
                      By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others.
                      Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.

                    </span>
                  } />

                <Checkboxfield
                  checked={formData.acceptTerms}
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, acceptTerms: val }))
                  }
                  color="black"
                  label={
                    <span>
                      By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others.
                      Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                    </span>
                  } />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500 ms-6">
                  <a href="/privacy-policy" className="underline text-primary me-2">
                    Privacy Policy
                  </a>{" "}
                  |
                  <a href="/terms" className="underline text-primary ms-2">
                    Terms of Service
                  </a>
                </div>
                <Button
                  text="Submit"
                  type="submit"
                  variant="primary"
                  className="mt-2 min-w-[150px]"
                />
              </div>
            </div>
          </div>
        </form>
      </Popup>
    </>
  );
}