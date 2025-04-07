import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: ''
  });

  const formFields = [
    { name: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Amit Kumar Mishra', required: true },
    { name: 'mobile', type: 'tel', label: 'Mobile', placeholder: '9642215885', required: true },
    { name: 'email', type: 'email', label: 'E-mail', placeholder: 'example@gmail.com', required: true },
    { name: 'message', type: 'textarea', label: 'Message', placeholder: 'Need a Service...', required: false }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleClear = () => {
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className='w-full lg:w-1/2'>
      <div className="space-y-4">
        {formFields.map(({ name, type, label, placeholder, required }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">
              {label}{required && <span className="text-red-500">*</span>}
            </label>
            {type === 'textarea' ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent1 focus:outline-none focus:ring-1 focus:ring-accent1"
                placeholder={placeholder}
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-accent1 focus:outline-none focus:ring-1 focus:ring-accent1"
                placeholder={placeholder}
                required={required}
              />
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
            className="flex-1 h-[52px] rounded-md bg-accent2 px-6 py-2 cursor-pointer font-medium text-white hover:bg-[#2a0c0c]"
          >
            Request For Call
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;