import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import StandardButton from '../components/ui/standard-button';
import Footer from '../components/Footer';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    budget: '',
    message: ''
  });

  // Your WhatsApp business number (format: country code + number, no + or spaces)
  const WHATSAPP_NUMBER = '60125053395';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Budget:* ${formData.budget}

*Message:*
${formData.message}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');

    // Optional: Reset form after opening WhatsApp
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
                Let's Create Something Beautiful Together
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're planning a complete home renovation or a single room makeover,
                our team is ready to bring your vision to life with our award-winning design expertise.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#59514e] mb-6">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59514e]/20 focus:border-[#59514e] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59514e]/20 focus:border-[#59514e] transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59514e]/20 focus:border-[#59514e] transition-all"
                    placeholder="+60 12-345 6789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59514e]/20 focus:border-[#59514e] transition-all"
                >
                  <option value="" disabled selected>Select a subject</option>
                  <option value="New Project Inquiry">New Project Inquiry</option>
                  <option value="Book a Consultation">Book a Consultation</option>
                  <option value="General Question">General Question</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59514e]/20 focus:border-[#59514e] transition-all"
                >
                  <option value="" disabled selected>Budget range</option>
                  <option value="Below RM50K">Below RM50K</option>
                  <option value="RM50 - RM100k">RM50 - RM100k</option>
                  <option value="RM100K - RM250K">RM100K - RM250K</option>
                  <option value="RM250K - RM500K">RM250K - RM500K</option>
                  <option value="RM500K+">RM500K+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59514e]/20 focus:border-[#59514e] transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <StandardButton
                type="submit"
                variant="primary"
                className="w-full"
                showArrow
              >
                Send via WhatsApp
              </StandardButton>

              <p className="text-sm text-gray-500 text-center">
                Clicking the button will open WhatsApp with your message pre-filled
              </p>
            </form>

            {/* Call to Action - Inside Form */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-left">
                <h3 className="text-lg font-bold text-[#59514e] mb-2">
                  Prefer to Call Directly?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Book a consultation at our studio and let's explore your design possibilities together.
                </p>
                <a
                  href="tel:+60125053395"
                  className="inline-block text-[#59514e] font-semibold hover:underline"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;