"use client";
import React, { useState } from "react";
import links from "@/data/links";
import { FloatingDock } from "@/components/FloatingDock";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isReadyToSend, setIsReadyToSend] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message || !email) {
      alert("Please fill out all fields.");
      return;
    }

    setIsReadyToSend(true);

    // Construct the mailto link
    const subject = "New Message from Portfolio";
    const body = `Message: ${message}\n\nFrom: ${email}`;
    const mailtoLink = `mailto:cognitivetech52+portfolio@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded-lg shadow-xl w-full max-w-lg border border-gray-800">
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium text-white mb-3"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-gray-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg border border-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xl font-medium text-white mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full px-5 py-4 bg-gray-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg border border-gray-700"
              placeholder="Type your message here"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-blue-600 text-white font-semibold text-xl rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
        {isReadyToSend && (
          <p className="mt-8 text-center text-blue-400 text-xl">
            Your message is ready to be sent. Please check your email client.
          </p>
        )}
      </div>
      <FloatingDock items={links} />
    </div>
  );
}