import React, { useState } from 'react';
import { X, CheckCircle, Upload } from 'lucide-react';
import StandardButton from './ui/standard-button';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    projectDetails: '',
    pdfFile: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const budgetOptions = [
    'Under RM50,000',
    'RM50,000 - RM100,000',
    'RM100,000 - RM250,000',
    'RM250,000 - RM500,000',
    'RM500,000+'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      pdfFile: file
    }));
  };

  /**
   * Uploads a file to a specified Supabase Storage bucket and returns its public URL.
   * This function assumes a Supabase storage bucket named 'pdfs' exists
   * and has appropriate Row Level Security (RLS) policies configured for uploads and public access.
   *
   * @param file The File object to be uploaded.
   * @returns A Promise that resolves with the public URL of the uploaded file.
   * @throws An error if the file upload operation fails.
   */
  const uploadToSupabase = async (file: File): Promise<string> => {
    // Generate a unique file name to prevent conflicts
    const fileName = `${Date.now()}-${file.name}`;

    // Perform the file upload to the 'pdfs' bucket in Supabase Storage
    const { data, error } = await supabase.storage
      .from('pdfs') // Ensure this bucket exists in your Supabase project
      .upload(fileName, file);

    if (error) {
      // If an error occurs during upload, throw an error with a descriptive message
      throw new Error(`Failed to upload file: ${error.message}`);
    }

    // Retrieve the public URL for the newly uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from('pdfs')
      .getPublicUrl(fileName);

    // Return the public URL
    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsUploading(true);
    
    try {
      let pdfUrl = '';
      if (formData.pdfFile) {
        pdfUrl = await uploadToSupabase(formData.pdfFile);
        console.log('PDF uploaded successfully:', pdfUrl);
      }
      
      // Prepare form data for Google Sheets submission
      const submissionData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        projectDetails: formData.projectDetails,
        pdfUrl: pdfUrl
      };
      
      console.log('Form submitted:', submissionData);
      
      // Send data to Google Sheets via Apps Script webhook
      const response = await fetch('https://script.google.com/macros/s/AKfycbzb1swOCPJXaryOKiYHR0XFTOzqUAQYFT6mKcZASBRT9bRqeHdm-bAQDMoKkH2QiidR/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });
      
      console.log('Data sent to Google Sheets successfully');
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          budget: '',
          projectDetails: '',
          pdfFile: null
        });
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error during form submission:', error);
      
      // Provide user-friendly error messages
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to upload file')) {
          errorMessage = 'Failed to upload PDF file. Please check your file and try again.';
        } else if (error.message.includes('fetch')) {
          errorMessage = 'Failed to submit form. Please check your internet connection and try again.';
        } else {
          errorMessage = error.message;
        }
      }
      
      alert(`Error: ${errorMessage}`);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-zoom-in border border-gray-200">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold font-linik gradient-highlight">Get Your Free Quote</h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2 font-linik">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all font-linik"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2 font-linik">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all font-linik"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-2 font-linik">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all font-linik"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-black mb-2 font-linik">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all font-linik"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="pdfFile" className="block text-sm font-medium text-black mb-2 font-linik">
                  Upload Project Brief (PDF)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="pdfFile"
                    name="pdfFile"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all font-linik file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
                  />
                  {formData.pdfFile && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                      <Upload size={16} />
                      <span>Selected: {formData.pdfFile.name}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-black mb-2 font-linik">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all resize-none font-linik"
                  placeholder="Tell us about your project vision, space requirements, and any specific needs..."
                />
              </div>
              
              <StandardButton
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isUploading}
                showArrow
              >
                {isUploading ? 'Uploading...' : 'Send My Request'}
              </StandardButton>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="p-8 text-center">
            <div className="mb-6">
              <CheckCircle size={64} className="text-black mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 font-linik gradient-highlight">Thank You!</h3>
              <p className="text-gray-700 text-lg font-linik">
                We've received your request and will be in touch soon to discuss your project.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700 text-sm font-linik">
                Expected response time: <span className="font-semibold">Within 24 hours</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;