"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "./button";
import InputField from "./inputfield";
import ContactBg from "@/assets/background/contact-info.webp";

type ContactFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    comments: string;
};

const ContactUS = () => {
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            comments: "",
        },
    });

    const onSubmit = (data: ContactFormValues) => {
        console.log("Contact Form:", data);
        alert("Form submitted!");
        reset();
    };

    return (
        <section className="max-w-7xl mx-auto pb-6 md:pb-8 lg:pb-12 xl:pb-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Info */}
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

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="border border-gray-300 p-6 rounded-lg">
                    <h2 className="text-2xl md:text-4xl font-semibold text-center text-primary mb-6">
                        Contact Us
                    </h2>

                    {/* First + Last */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: "First Name is required" }}
                            render={({ field }) => (
                                <InputField
                                    label="First Name*"
                                    {...field}
                                    error={errors.firstName?.message}
                                />
                            )}
                        />

                        <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: "Last Name is required" }}
                            render={({ field }) => (
                                <InputField
                                    label="Last Name*"
                                    {...field}
                                    error={errors.lastName?.message}
                                />
                            )}
                        />
                    </div>

                    {/* Email */}
                    <div className="mt-6">
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email",
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    label="Email*"
                                    type="email"
                                    {...field}
                                    error={errors.email?.message}
                                />
                            )}
                        />
                    </div>

                    {/* Phone */}
                    <div className="mt-6">
                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: "Phone is required",
                                minLength: {
                                    value: 10,
                                    message: "Phone must be at least 10 digits",
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    label="Phone*"
                                    type="tel"
                                    {...field}
                                    error={errors.phone?.message}
                                />
                            )}
                        />
                    </div>

                    {/* Comments */}
                    <div className="my-6">
                        <Controller
                            name="comments"
                            control={control}
                            rules={{ required: "Comments are required" }}
                            render={({ field }) => (
                                <InputField
                                    label="Comments*"
                                    textarea={true}
                                    {...field}
                                    error={errors.comments?.message}
                                />
                            )}
                        />
                    </div>

                    <Button
                        text={isSubmitting ? "Submitting..." : "Submit"}
                        type="submit"
                        variant="primary"
                        className="w-full"
                    />
                </form>
            </div>
        </section>
    );
};

export default ContactUS;