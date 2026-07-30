"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "next/navigation"; // ✅ useSearchParams hata diya
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.webp";
import InputField from "@/component/inputfield";
import Checkboxfield from "@/component/checkboxfield";
import Button from "@/component/button";
import toast from "react-hot-toast";
import { PUBLIC_API } from "@/utils/api";
import { CheckCircle2 } from "lucide-react";

type FieldType = "text" | "email" | "phone" | "number" | "date" | "textarea" | "select" | "checkbox";

interface WebinarField {
  fieldKey: string;
  label: string;
  type: FieldType;
  required?: boolean;
  order: number;
  options?: string[];
  allowOther?: boolean;
}


const OTHER_VALUE = "__other__";

interface Webinar {
  _id: string;
  title: string;
  description?: string;
  date: string;
  fields: WebinarField[];
}

export default function PublicWebinarRegisterPage() {
  const { id } = useParams<{ id: string }>();

  const [webinar, setWebinar] = useState<Webinar | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {} as Record<string, any>,
  });

  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const res = await PUBLIC_API.get<Webinar>(`/api/webinars/public/${id}`);
        setWebinar(res.data);
      } catch (err) {
        setLoadError("This webinar is not available for registration.");
      } finally {
        setLoading(false);
      }
    };
    fetchWebinar();
  }, [id]);

  const sortedFields = [...(webinar?.fields || [])].sort((a, b) => a.order - b.order);

  const onSubmit = async (data: Record<string, any>) => {
    try {
      // ✅ Har field ke liye "Other" placeholder ko actual typed text se replace karo
      const processedData: Record<string, any> = {};
      sortedFields.forEach((field) => {
        const value = data[field.fieldKey];
        const otherText = data[`${field.fieldKey}_otherText`];

        if (field.type === "select" && value === OTHER_VALUE) {
          processedData[field.fieldKey] = otherText || "Other";
        } else if (field.type === "checkbox" && Array.isArray(value)) {
          processedData[field.fieldKey] = value.map((v) =>
            v === OTHER_VALUE ? (otherText || "Other") : v
          );
        } else {
          processedData[field.fieldKey] = value;
        }
      });

      await PUBLIC_API.post(`/api/webinars/public/${id}/register`, {
        responses: processedData,
      });
      toast.success("Registered successfully!");
      setSubmitted(true);
      reset();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  const onError = (errors: any) => {
    console.log("FORM ERRORS:", errors);
  };

  const validationRules = (field: WebinarField) => {
    if (!field.required) return {};
    if (field.type === "checkbox") {
      return { validate: (v: string[]) => (v && v.length > 0) || `${field.label} is required` };
    }
    if (field.type === "email") {
      return {
        required: `${field.label} is required`,
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
      };
    }
    return { required: `${field.label} is required` };
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white border border-gray-300 rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="flex flex-col items-center mb-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src={Logo} alt="logo" className="h-10 md:h-11 xl:h-12 w-auto" priority />
          </Link>
        </div>

        {loading && <p className="text-center text-gray-500 text-sm py-6">Loading...</p>}

        {!loading && loadError && (
          <p className="text-center text-red-500 text-sm py-6">{loadError}</p>
        )}

        {!loading && !loadError && submitted && webinar && (
          <div className="text-center py-6">
            <CheckCircle2 className="mx-auto text-primary mb-3" size={40} />
            <h2 className="text-2xl font-semibold text-primary mb-1">You&apos;re Registered!</h2>
            <p className="text-gray-500 text-sm">
              Thanks for signing up for <span className="font-medium">{webinar.title}</span>.
              We&apos;ll send further details to your email.
            </p>
          </div>
        )}

        {!loading && !loadError && !submitted && webinar && (
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <h2 className="text-md font-semibold text-center text-primary mb-1">
              {webinar.title}
            </h2>
            {webinar.description && (
              <p className="text-sm text-gray-500 text-center mb-1">{webinar.description}</p>
            )}
            <p className="text-xs text-gray-400 text-center mb-6">
              Lock your seat for this exclusive free webinar on <br /> {new Date(webinar.date).toLocaleString()}
            </p>

            <div className="grid grid-cols-1 gap-4">
              {sortedFields.map((field) => {
                return (
                  <div key={field.fieldKey} >
                    <Controller
                      name={field.fieldKey}
                      control={control}
                      rules={validationRules(field)}
                      defaultValue={field.type === "checkbox" ? [] : ""}
                      render={({ field: rhfField, fieldState }) => {
                        if (field.type === "checkbox") {
                          const checkboxOptions = [
                            ...(field.options || []).map((o) => ({ label: o, value: o })),
                            ...(field.allowOther ? [{ label: "Other", value: OTHER_VALUE }] : []),
                          ];

                          return (
                            <div>
                              <Checkboxfield
                                label={`${field.label}${field.required ? "*" : ""}`}
                                options={checkboxOptions}
                                values={rhfField.value}
                                onChange={rhfField.onChange}
                              />
                              {fieldState.error && (
                                <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                              )}

                              {/* ✅ "Other" checkbox select hote hi text input dikhega */}
                              {field.allowOther &&
                                Array.isArray(rhfField.value) &&
                                rhfField.value.includes(OTHER_VALUE) && (
                                  <Controller
                                    name={`${field.fieldKey}_otherText`}
                                    control={control}
                                    rules={{ required: `Please specify your answer` }}
                                    defaultValue=""
                                    render={({ field: otherField, fieldState: otherFieldState }) => (
                                      <div className="mt-2">
                                        <input
                                          {...otherField}
                                          type="text"
                                          placeholder="Please specify"
                                          className="w-full border rounded-md px-3 py-2 text-sm"
                                        />
                                        {otherFieldState.error && (
                                          <p className="text-red-500 text-xs mt-1">
                                            {otherFieldState.error.message}
                                          </p>
                                        )}
                                      </div>
                                    )}
                                  />
                                )}
                            </div>
                          );
                        }
                        if (field.type === "select") {
                          return (
                            <div>
                              <label className="text-sm text-gray-700 mb-2 block">
                                {field.label}
                                {field.required && <span className="text-red-500 ml-0.5">*</span>}
                              </label>

                              <div className="space-y-2">
                                {field.options?.map((opt) => (
                                  <label
                                    key={opt}
                                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                                  >
                                    <input
                                      type="radio"
                                      name={field.fieldKey}
                                      value={opt}
                                      checked={rhfField.value === opt}
                                      onChange={() => rhfField.onChange(opt)}
                                      onBlur={rhfField.onBlur}
                                      className="accent-primary w-4 h-4"
                                    />
                                    {opt}
                                  </label>
                                ))}

                                {field.allowOther && (
                                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                    <input
                                      type="radio"
                                      name={field.fieldKey}
                                      value={OTHER_VALUE}
                                      checked={rhfField.value === OTHER_VALUE}
                                      onChange={() => rhfField.onChange(OTHER_VALUE)}
                                      onBlur={rhfField.onBlur}
                                      className="accent-primary w-4 h-4"
                                    />
                                    <span>Other:</span>
                                  </label>
                                )}
                              </div>

                              {fieldState.error && (
                                <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                              )}

                              {/* Other text input, inline jaise Google Forms mein hota hai */}
                              {field.allowOther && rhfField.value === OTHER_VALUE && (
                                <Controller
                                  name={`${field.fieldKey}_otherText`}
                                  control={control}
                                  rules={{ required: `Please specify your answer` }}
                                  defaultValue=""
                                  render={({ field: otherField, fieldState: otherFieldState }) => (
                                    <div className="mt-2 ml-6">
                                      <input
                                        {...otherField}
                                        type="text"
                                        placeholder="Please specify"
                                        className="w-full border-b border-gray-300 focus:border-primary outline-none px-1 py-1 text-sm"
                                      />
                                      {otherFieldState.error && (
                                        <p className="text-red-500 text-xs mt-1">
                                          {otherFieldState.error.message}
                                        </p>
                                      )}
                                    </div>
                                  )}
                                />
                              )}
                            </div>
                          );
                        }
                        if (field.type === "textarea") {
                          return (
                            <div>
                              <label className="text-sm text-gray-700 mb-1 block">
                                {field.label}
                                {field.required && <span className="text-red-500 ml-0.5">*</span>}
                              </label>
                              <textarea {...rhfField} rows={3} className="w-full border rounded-md px-3 py-2 text-sm" />
                              {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                            </div>
                          );
                        }
                        if (field.type === "date") {
                          return (
                            <div>
                              <label className="text-sm text-gray-700 mb-1 block">
                                {field.label}
                                {field.required && <span className="text-red-500 ml-0.5">*</span>}
                              </label>
                              <input type="date" {...rhfField} className="w-full border rounded-md px-3 py-2 text-sm" />
                              {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                            </div>
                          );
                        }
                        return (
                          <InputField
                            label={`${field.label}${field.required ? "*" : ""}`}
                            type={field.type === "phone" ? "tel" : (field.type as "text" | "email" | "number")}
                            {...rhfField}
                            error={fieldState.error?.message}
                          />
                        );
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <Button
              text={isSubmitting ? "Submitting..." : "Register"}
              type="submit"
              variant="primary"
              className="w-full mt-6"
              disabled={isSubmitting}
            />
          </form>
        )}
      </div>
    </div>
  );
}
// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import api from "@/utils/api"; // uses the shared axios instance directly since these are public, unauthenticated calls

// export default function PublicWebinarRegisterPage() {
//   const { id } = useParams();

//   const [webinar, setWebinar] = useState(null);
//   const [responses, setResponses] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchWebinar = async () => {
//       try {
//         const res = await api.get(`/webinars/public/${id}`);
//         setWebinar(res.data);
//       } catch (err) {
//         setError("This webinar is not available for registration.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWebinar();
//   }, [id]);

//   const handleChange = (fieldKey, value) => {
//     setResponses((prev) => ({ ...prev, [fieldKey]: value }));
//   };

//   const handleCheckboxChange = (fieldKey, option, checked) => {
//     setResponses((prev) => {
//       const current = Array.isArray(prev[fieldKey]) ? prev[fieldKey] : [];
//       const next = checked ? [...current, option] : current.filter((o) => o !== option);
//       return { ...prev, [fieldKey]: next };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const missing = (webinar.fields || []).find(
//       (f) => f.required && !responses[f.fieldKey]
//     );
//     if (missing) {
//       setError(`Please fill in "${missing.label}".`);
//       return;
//     }

//     setSubmitting(true);
//     try {
//       await api.post(`/webinars/public/${id}/register`, { responses });
//       setSubmitted(true);
//     } catch (err) {
//       setError(err?.response?.data?.message || "Registration failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
//   }

//   if (error && !webinar) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-4">
//         <p className="text-red-600 text-sm">{error}</p>
//       </div>
//     );
//   }

//   if (submitted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-4">
//         <div className="text-center max-w-md">
//           <h1 className="text-xl font-semibold text-navy-900 mb-2">You're registered!</h1>
//           <p className="text-gray-600 text-sm">
//             Thanks for signing up for {webinar.title}. We'll send further details to your email.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const sortedFields = [...(webinar.fields || [])].sort((a, b) => a.order - b.order);

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-lg bg-white rounded-lg shadow-sm border p-8">
//         <h1 className="text-xl font-semibold text-navy-900 mb-1">{webinar.title}</h1>
//         {webinar.description && (
//           <p className="text-sm text-gray-600 mb-2">{webinar.description}</p>
//         )}
//         <p className="text-sm text-gray-500 mb-6">
//           {new Date(webinar.date).toLocaleString()}
//         </p>

//         {error && (
//           <div className="bg-red-50 text-red-700 text-sm rounded-md px-4 py-2 mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {sortedFields.map((field) => (
//             <div key={field.fieldKey}>
//               <label className="text-sm text-gray-700">
//                 {field.label}
//                 {field.required && <span className="text-red-500 ml-0.5">*</span>}
//               </label>

//               {field.type === "textarea" && (
//                 <textarea
//                   rows={3}
//                   className="w-full border rounded-md px-3 py-2 text-sm mt-1"
//                   onChange={(e) => handleChange(field.fieldKey, e.target.value)}
//                 />
//               )}

//               {field.type === "select" && (
//                 <select
//                   className="w-full border rounded-md px-3 py-2 text-sm mt-1"
//                   onChange={(e) => handleChange(field.fieldKey, e.target.value)}
//                   defaultValue=""
//                 >
//                   <option value="" disabled>Select an option</option>
//                   {field.options.map((opt) => (
//                     <option key={opt} value={opt}>{opt}</option>
//                   ))}
//                 </select>
//               )}

//               {field.type === "checkbox" && (
//                 <div className="mt-1 space-y-1">
//                   {field.options.map((opt) => (
//                     <label key={opt} className="flex items-center gap-2 text-sm text-gray-700">
//                       <input
//                         type="checkbox"
//                         onChange={(e) => handleCheckboxChange(field.fieldKey, opt, e.target.checked)}
//                       />
//                       {opt}
//                     </label>
//                   ))}
//                 </div>
//               )}

//               {["text", "email", "phone", "number", "date"].includes(field.type) && (
//                 <input
//                   type={field.type === "phone" ? "tel" : field.type}
//                   className="w-full border rounded-md px-3 py-2 text-sm mt-1"
//                   onChange={(e) => handleChange(field.fieldKey, e.target.value)}
//                 />
//               )}
//             </div>
//           ))}

//           <button
//             type="submit"
//             disabled={submitting}
//             className="w-full bg-navy-900 text-gold-500 px-5 py-2.5 rounded-md text-sm hover:opacity-90 disabled:opacity-50 mt-2"
//           >
//             {submitting ? "Submitting..." : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState, FormEvent, ChangeEvent } from "react";
// import { useParams } from "next/navigation";// uses the shared axios instance directly since these are public, unauthenticated calls
// import { PUBLIC_API } from "@/utils/api";

// type FieldType =
//   | "text"
//   | "email"
//   | "phone"
//   | "number"
//   | "date"
//   | "textarea"
//   | "select"
//   | "checkbox";

// interface WebinarField {
//   fieldKey: string;
//   label: string;
//   type: FieldType;
//   required?: boolean;
//   order: number;
//   options?: string[];
// }

// interface Webinar {
//   _id: string;
//   title: string;
//   description?: string;
//   date: string;
//   fields: WebinarField[];
// }

// type ResponseValue = string | string[];
// type Responses = Record<string, ResponseValue>;

// export default function PublicWebinarRegisterPage() {
//   const { id } = useParams<{ id: string }>();

//   const [webinar, setWebinar] = useState<Webinar | null>(null);
//   const [responses, setResponses] = useState<Responses>({});
//   const [loading, setLoading] = useState<boolean>(true);
//   const [submitting, setSubmitting] = useState<boolean>(false);
//   const [submitted, setSubmitted] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const fetchWebinar = async () => {
//       try {
//         const res = await PUBLIC_API.get<Webinar>(`/api/webinars/public/${id}`);
//         setWebinar(res.data);
//       } catch (err) {
//         setError("This webinar is not available for registration.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWebinar();
//   }, [id]);

//   const handleChange = (fieldKey: string, value: string) => {
//     setResponses((prev) => ({ ...prev, [fieldKey]: value }));
//   };

//   const handleCheckboxChange = (
//     fieldKey: string,
//     option: string,
//     checked: boolean
//   ) => {
//     setResponses((prev) => {
//       const current = Array.isArray(prev[fieldKey])
//         ? (prev[fieldKey] as string[])
//         : [];
//       const next = checked
//         ? [...current, option]
//         : current.filter((o) => o !== option);
//       return { ...prev, [fieldKey]: next };
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (!webinar) return;

//     const missing = (webinar.fields || []).find(
//       (f) => f.required && !responses[f.fieldKey]
//     );
//     if (missing) {
//       setError(`Please fill in "${missing.label}".`);
//       return;
//     }

//     setSubmitting(true);
//     try {
//       await PUBLIC_API.post(`/api/webinars/public/${id}/register`, { responses });
//       setSubmitted(true);
//     } catch (err: any) {
//       setError(err?.response?.data?.message || "Registration failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         Loading...
//       </div>
//     );
//   }

//   if (error && !webinar) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-4">
//         <p className="text-red-600 text-sm">{error}</p>
//       </div>
//     );
//   }

//   if (submitted && webinar) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-4">
//         <div className="text-center max-w-md">
//           <h1 className="text-xl font-semibold text-navy-900 mb-2">You're registered!</h1>
//           <p className="text-gray-600 text-sm">
//             Thanks for signing up for {webinar.title}. We'll send further details to your email.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (!webinar) return null;

//   const sortedFields = [...(webinar.fields || [])].sort((a, b) => a.order - b.order);

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-lg bg-white rounded-lg shadow-sm border p-8">
//         <h1 className="text-xl font-semibold text-navy-900 mb-1">{webinar.title}</h1>
//         {webinar.description && (
//           <p className="text-sm text-gray-600 mb-2">{webinar.description}</p>
//         )}
//         <p className="text-sm text-gray-500 mb-6">
//           {new Date(webinar.date).toLocaleString()}
//         </p>

//         {error && (
//           <div className="bg-red-50 text-red-700 text-sm rounded-md px-4 py-2 mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {sortedFields.map((field) => (
//             <div key={field.fieldKey}>
//               <label className="text-sm text-gray-700">
//                 {field.label}
//                 {field.required && <span className="text-red-500 ml-0.5">*</span>}
//               </label>

//               {field.type === "textarea" && (
//                 <textarea
//                   rows={3}
//                   className="w-full border rounded-md px-3 py-2 text-sm mt-1"
//                   onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
//                     handleChange(field.fieldKey, e.target.value)
//                   }
//                 />
//               )}

//               {field.type === "select" && (
//                 <select
//                   className="w-full border rounded-md px-3 py-2 text-sm mt-1"
//                   onChange={(e: ChangeEvent<HTMLSelectElement>) =>
//                     handleChange(field.fieldKey, e.target.value)
//                   }
//                   defaultValue=""
//                 >
//                   <option value="" disabled>Select an option</option>
//                   {field.options?.map((opt) => (
//                     <option key={opt} value={opt}>{opt}</option>
//                   ))}
//                 </select>
//               )}

//               {field.type === "checkbox" && (
//                 <div className="mt-1 space-y-1">
//                   {field.options?.map((opt) => (
//                     <label key={opt} className="flex items-center gap-2 text-sm text-gray-700">
//                       <input
//                         type="checkbox"
//                         onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                           handleCheckboxChange(field.fieldKey, opt, e.target.checked)
//                         }
//                       />
//                       {opt}
//                     </label>
//                   ))}
//                 </div>
//               )}

//               {(["text", "email", "phone", "number", "date"] as FieldType[]).includes(field.type) && (
//                 <input
//                   type={field.type === "phone" ? "tel" : field.type}
//                   className="w-full border rounded-md px-3 py-2 text-sm mt-1"
//                   onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                     handleChange(field.fieldKey, e.target.value)
//                   }
//                 />
//               )}
//             </div>
//           ))}

//           <button
//             type="submit"
//             disabled={submitting}
//             className="w-full bg-navy-900 text-gold-500 px-5 py-2.5 rounded-md text-sm hover:opacity-90 disabled:opacity-50 mt-2"
//           >
//             {submitting ? "Submitting..." : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }