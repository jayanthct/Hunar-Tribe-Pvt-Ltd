import React, { useState } from "react";
import DOMPurify from "dompurify";

import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formFields = [
    {
      name: "fullName",
      type: "text",
      label: "Full Name",
      placeholder: "Amit Kumar Mishra",
      required: true,
    },
    {
      name: "mobile",
      type: "tel",
      label: "Mobile",
      placeholder: "96422XXXXX",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "E-mail",
      placeholder: "example@gmail.com",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Need a Service...",
      required: false,
    },
  ];

  const handleChange = (e) => {
    const sanitized = DOMPurify.sanitize(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: sanitized,
    });
  };

  const validate = () => {
    let temp = {};
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) temp.fullName = "Full name is required.";
    if (!formData.mobile.trim() || !phoneRegex.test(formData.mobile))
      temp.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      temp.email = "Enter a valid email address.";
    if (formData.message.length > 300)
      temp.message = "Message should be under 300 characters.";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScp3qFUGDLe-tv3jP4LUF9-Ur-neX6EDpa_kNgB2l1ujMBh4A/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.385947290", formData.fullName);
    formDataToSend.append("entry.1452828579", formData.mobile);
    formDataToSend.append("entry.1226840964", formData.email);
    formDataToSend.append("entry.1700694137", formData.message);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });
      toast.success("Submitted Form Sucessfully, Our Team will Reach You");
      handleClear();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
      <div className="space-y-4">
        {formFields.map(({ name, type, label, placeholder, required }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">
              {label}
              {required && <span className="text-red-500"> *</span>}
            </label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full rounded-md border px-3 py-2 focus:border-accent1 focus:outline-none focus:ring-1 focus:ring-accent1"
                placeholder={placeholder}
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border px-3 py-2 focus:border-accent1 focus:outline-none focus:ring-1 focus:ring-accent1"
                placeholder={placeholder}
                required={required}
              />
            )}
            {errors[name] && (
              <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleClear}
            className="rounded-md bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 h-[52px] rounded-md bg-accent2 px-6 py-2 cursor-pointer font-medium text-white hover:bg-[#2a0c0c]"
          >
            {isSubmitting ? "Sending..." : "Request For Call"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
