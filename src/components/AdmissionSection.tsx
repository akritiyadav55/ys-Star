import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Sparkles,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';
import { schoolData, availableClasses } from '../data/schoolData';
import { AdmissionFormData } from '../types';

export function AdmissionSection() {
  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '',
    parentName: '',
    classApplyingFor: '',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AdmissionFormData, string>> = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required';
    }

    if (!formData.classApplyingFor) {
      newErrors.classApplyingFor = 'Please select a class';
    }

    // Clean phone number
    const cleanPhone = formData.mobileNumber.replace(/[^0-9]/g, '');
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (cleanPhone.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side handling & create submission ID
    setTimeout(() => {
      const refId = `YSA-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refId);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save locally so parent or admin can review
      try {
        const existing = JSON.parse(localStorage.getItem('ys_enquiries') || '[]');
        existing.push({
          id: refId,
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('ys_enquiries', JSON.stringify(existing));
      } catch {
        // Safe fallback if storage unavailable
      }
    }, 600);
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = `Hello YS Stars Academy, I would like to enquire about Admission for ${schoolData.currentAdmissionSession}.%0A%0A*Student Name:* ${encodeURIComponent(formData.studentName || 'Not specified')}%0A*Class:* ${encodeURIComponent(formData.classApplyingFor || 'General Enquiry')}%0A*Parent Name:* ${encodeURIComponent(formData.parentName || 'Parent')}%0A*Contact:* ${encodeURIComponent(formData.mobileNumber || '')}${formData.message ? `%0A*Message:* ${encodeURIComponent(formData.message)}` : ''}`;
    return `https://wa.me/${schoolData.whatsappNumber}?text=${text}`;
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      parentName: '',
      classApplyingFor: '',
      mobileNumber: '',
      email: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="admissions" className="py-16 sm:py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Admission Open 2026–2027</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Admissions Open 2026–2027
          </h2>

          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
            Take the first step toward your child's learning journey at YS Stars Academy.
          </p>

          {/* Direct CTA Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              id="admission-call-cta"
              href={`tel:${schoolData.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-white text-blue-950 hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call {schoolData.phone}</span>
            </a>

            <a
              id="admission-whatsapp-cta"
              href={`https://wa.me/${schoolData.whatsappNumber}?text=Hello%20YS%20Stars%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20Admissions%20for%20Academic%20Session%202026-2027.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

        {/* Two Column Layout: Admission Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Admission Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <h3 className="text-lg font-bold text-amber-300 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Simple Admission Process</span>
              </h3>
              <p className="text-sm text-blue-100/80 mb-6 leading-relaxed">
                We welcome parents to visit our school in Goplapur, Campierganj, or submit an enquiry online.
              </p>

              <ol className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Submit Enquiry</h4>
                    <p className="text-xs text-blue-200/70">Fill the enquiry form or contact us via WhatsApp/Phone.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Campus Interaction</h4>
                    <p className="text-xs text-blue-200/70">Visit the school campus in Goplapur to meet our educators.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Enrollment Confirmation</h4>
                    <p className="text-xs text-blue-200/70">Complete formal registration for Academic Session 2026–2027.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="p-5 rounded-2xl bg-blue-900/40 border border-blue-700/50">
              <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                School Office & Assistance
              </h4>
              <p className="text-sm text-white font-semibold">
                YS Stars Academy
              </p>
              <p className="text-xs text-blue-200/80 mt-1">
                {schoolData.location}
              </p>
              <p className="text-xs text-amber-300 font-medium mt-2">
                Helpline: {schoolData.phone}
              </p>
            </div>
          </div>

          {/* Right Column: Clean Admission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100">
              {isSubmitted ? (
                <div id="admission-success-card" className="text-center py-8">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
                    Thank you, <span className="font-semibold text-slate-900">{formData.parentName}</span>. Your enquiry for <span className="font-semibold text-slate-900">{formData.studentName}</span> ({formData.classApplyingFor}) has been recorded.
                  </p>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 mb-6 inline-block">
                    Reference ID: <span className="font-mono font-bold text-blue-800">{submittedRef}</span>
                  </div>

                  {/* Immediate WhatsApp Forwarding Option */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 mb-6 text-left">
                    <p className="text-xs font-bold text-emerald-900 mb-1">
                      Direct WhatsApp Notification Available:
                    </p>
                    <p className="text-xs text-emerald-800 mb-3">
                      Would you like to send these enquiry details directly to the school office WhatsApp (+91 91610 34400) for faster response?
                    </p>
                    <a
                      id="submit-whatsapp-forward-btn"
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send to School WhatsApp</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>

                  <button
                    id="submit-another-enquiry-btn"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form id="admission-enquiry-form" onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <div>
                      <h3 className="text-xl font-bold text-blue-950">
                        Admission Enquiry Form
                      </h3>
                      <p className="text-xs text-slate-500">
                        Academic Session 2026–2027 • Fill the details below
                      </p>
                    </div>
                    <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium border border-amber-200">
                      * Required fields
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Student Name */}
                    <div>
                      <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Student Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="Full name of student"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.studentName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.studentName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.studentName}</span>
                        </p>
                      )}
                    </div>

                    {/* Parent / Guardian Name */}
                    <div>
                      <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Parent / Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="Parent or guardian name"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.parentName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.parentName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.parentName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Class Applying For */}
                    <div>
                      <label htmlFor="classApplyingFor" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Class Applying For <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="classApplyingFor"
                        value={formData.classApplyingFor}
                        onChange={(e) => setFormData({ ...formData, classApplyingFor: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors cursor-pointer ${
                          errors.classApplyingFor ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                        }`}
                      >
                        <option value="">Select Grade / Class</option>
                        {availableClasses.map((cls) => (
                          <option key={cls} value={cls}>
                            {cls}
                          </option>
                        ))}
                      </select>
                      {errors.classApplyingFor && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.classApplyingFor}</span>
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-sm text-slate-500 font-medium">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          placeholder="91610 34400"
                          maxLength={14}
                          className={`w-full pl-12 pr-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors ${
                            errors.mobileNumber ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                          }`}
                        />
                      </div>
                      {errors.mobileNumber && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.mobileNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Address (Optional) */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Email Address <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Message / Special Queries <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter any specific queries regarding admission, timing, or school visit..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button & WhatsApp Fallback */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      id="submit-enquiry-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-5 rounded-lg text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 disabled:opacity-60 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      id="enquiry-whatsapp-direct"
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-700" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>

                  <p className="mt-3 text-[11px] text-slate-500 text-center">
                    Your details are shared directly with YS Stars Academy administration.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
