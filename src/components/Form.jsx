import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../index.css";

const ContactUs = () => {
  const formRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.sendForm(
        "service_pn25os2",
        "template_dczrpf4",
        formRef.current,
        "_G24MM8H4iI9eBs8J"
      );
      reset(); // Reset form after successful submission
    } catch (error) {
      setErrorMessage("Failed to send email. Please try again.");
    }
  };

  const renderInput = (className, type, obj, name) => {
    return <input className={className} type={type} {...obj} name={name} />;
  };

  return (
    <div className="wrapper flex flex-col justify-center bg-transparent">
      <div className="errorMessage flex flex-col items-center justify-center gap-[0.5rem]">
        {errors.user_name && (
          <p className="bg-slate-900 border border-red-800 px-4 py-1">
            {errors.user_name.message}
          </p>
        )}
        {errors.user_email && (
          <p className="bg-slate-900 border border-red-800 px-4 py-1">
            {errors.user_email.message}
          </p>
        )}
        {errors.message && (
          <p className="bg-slate-900 border border-red-800 px-4 py-1">
            {errors.message.message}
          </p>
        )}
        {errorMessage && (
          <p className="bg-slate-900 border border-red-800 px-4 py-1">
            {errorMessage}
          </p>
        )}
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="border flex flex-col w-[80vw] sm:w-[45vw] border-gray-800 rounded-md gap-[0.4rem] px-4 py-8 bg-transparent justify-center"
      >
        <div className="flex gap-[0.5rem] w-[100%] items-center justify-between">
          <label className="text-white text-md sm:text-xl">Name</label>
          {renderInput(
            "px-4 w-[75%] py-1 outline-0 border border-gray-800",
            "text",
            { ...register("user_name", { required: "Name is required" }) },
            "user_name"
          )}
        </div>

        <div className="flex gap-[0.5rem] w-[100%] items-center justify-between">
          <label className="text-white text-md sm:text-xl">Email</label>
          {renderInput(
            "px-4 w-[75%] py-1 outline-0 border border-gray-800",
            "email",
            {
              ...register("user_email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              }),
            },
            "user_email"
          )}
        </div>

        <div className="flex gap-[0.5rem] w-[100%] items-center justify-between">
          <label className="text-white text-md sm:text-xl">Message</label>
          <textarea
            className="border border-gray-900 px-4 w-[75%] py-1 outline-0"
            name="message"
            {...register("message", { required: "Message is required" })}
          />
        </div>

        <div className="flex gap-[0.5rem] w-[20%] shrink-0">
          <input
            className="border border-red-500 bg-red-600 px-4 py-1 outline-0 text-white rounded-lg"
            type="submit"
            value={isSubmitting ? "Submitting..." : "Send Message"}
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;