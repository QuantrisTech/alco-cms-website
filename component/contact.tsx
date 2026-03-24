"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "./button";
import InputField from "./inputfield";

import ContactBg from "@/assets/background/contact-info.webp";

const ContactUS = () => {
    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
    });

    // Validation errors
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Handle change for all fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error on input change
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    // Simple validation on submit
    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.firstName.trim()) newErrors.firstName = "is required";
        if (!formData.lastName.trim()) newErrors.lastName = "is required";
        if (!formData.email.trim()) newErrors.email = "is required";
        else {
            // Basic email regex check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) newErrors.email = "invalid email";
        }
        if (!formData.phone.trim()) newErrors.phone = "is required";
        if (!formData.comments.trim()) newErrors.comments = "comments is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submit here (e.g., send data)
            alert("Form submitted!");
            // Clear form if needed
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                comments: "",
            });
            setErrors({});
        }
    };

    return (
        <section className="max-w-7xl mx-auto py-10 px-4 md:px-8">
            {/* Heading */}
            {/* <h2 className="bg-yellow-400 text-center font-bold text-2xl md:text-3xl py-3 rounded-md text-blue-900 mb-8">
                Have any question?
            </h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Info Box */}
                {/* <div className="bg-blue-700 text-white p-6 rounded-lg flex flex-col gap-6"> */}
                <div
                    className="relative flex flex-col justify-center px-8 lg:py-6 xl:px-8 xl:py-6 2xl:px-10 2xl:py-8 rounded-xl shadow-lg bg-cover bg-no-repeat bg-right overflow-hidden min-h-[350px]"
                    style={{ backgroundImage: `url(${ContactBg.src})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/10 "></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:-translate-y-1 hover:opacity-90"
                        >
                            <FaMapMarkerAlt size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary-dark ">Our Location</h3>
                            <p className="text-white">D-86/1, Block-7, Gulshan-e-iqbal, Karachi Sindh, Pakistan.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:-translate-y-1 hover:opacity-90"
                        >
                            <FaPhoneAlt size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary-dark ">Call Us On</h3>
                            <p className="text-white">+1(888)681-4808</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:-translate-y-1 hover:opacity-90"
                        >
                            <FaEnvelope size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-secondary-dark ">Email Us</h3>
                            <p className="text-white">connect@arslanlarik.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Contact Form */}
                <form onSubmit={handleSubmit} className="border border-gray-300 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            label="First Name*"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                            size="medium"
                        />

                        <InputField
                            label="Last Name*"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                            size="medium"
                        />
                    </div>

                    <div className="mt-6">
                        <InputField
                            label="Email*"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            size="medium"
                        />
                    </div>

                    <div className="mt-6">
                        <InputField
                            label="Phone*"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            size="medium"
                        />
                    </div>

                    {/* <div className="mt-6">
                        <label
                            htmlFor="phone"
                            className={`block relative left-3 mb-1 text-sm transition-all duration-200 pointer-events-none ${formData.phone || errors.phone ? "text-primary top-1" : "text-gray-400 top-3"
                                }`}
                        >
                            Phone*
                        </label>
                        <div className="flex items-center border rounded-lg border-gray-300 focus-within:border-primary px-3 py-2">
                            
                            <span className="mr-3 select-none">🇵🇰</span>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full outline-none font-light text-sm"
                                placeholder="Phone*"
                            />
                        </div>
                        {errors.phone && (
                            <span className="text-red-500 text-xs absolute right-3 -mt-5">{errors.phone}</span>
                        )}
                    </div> */}

                    <div className="my-6">
                        <InputField
                            label="Comments*"
                            textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            error={errors.comments}
                            size="medium"
                        />
                    </div>

                    <Button
                        iconRight={true} variant="primary" size="medium" text="Submit" href="#" className='w-full' />


                    {/* <button
            type="submit"
            className="mt-8 w-full bg-yellow-400 text-blue-900 font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
          >
            Send
          </button> */}
                </form>
            </div>
        </section>
    );
};

export default ContactUS;