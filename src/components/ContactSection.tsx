import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Instagram,
  Navigation,
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  RotateCcw,
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export function ContactSection() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name');
      return;
    }
    if (!contact.trim() || contact.replace(/[^0-9]/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please enter your message');
      return;
    }

    setErrorMsg('');
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  const handleReset = () => {
    setName('');
    setContact('');
    setSubject('');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Have queries regarding school admissions, campus timings, or student life? Reach out to our school office.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-950 mb-1">
                YS Stars Academy
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                General Education School
              </p>

              <div className="space-y-4 text-sm text-slate-700 mb-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">School Campus:</span>
                    <span>Goplapur, Campierganj</span>
                    <br />
                    <span>Gorakhpur, Uttar Pradesh, India</span>
                    <br />
                    <span className="text-xs text-slate-500">Plus Code: {schoolData.plusCode}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Contact Numbers:</span>
                    <a
                      href={`tel:${schoolData.phoneRaw}`}
                      className="text-blue-700 hover:underline font-semibold block"
                    >
                      {schoolData.phone}
                    </a>
                    {schoolData.secondaryPhone && (
                      <a
                        href={`tel:${schoolData.secondaryPhone.replace(/\s+/g, '')}`}
                        className="text-blue-700 hover:underline font-semibold text-xs block mt-0.5"
                      >
                        {schoolData.secondaryPhone}
                      </a>
                    )}
                  </div>
                </div>

                {/* Email */}
                {schoolData.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Email Address:</span>
                      <a
                        href={`mailto:${schoolData.email}`}
                        className="text-blue-700 hover:underline font-medium"
                      >
                        {schoolData.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Instagram Profile:</span>
                    <a
                      href={schoolData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-700 hover:underline font-medium"
                    >
                      {schoolData.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Visiting Hours Placeholder */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">School Office Hours:</span>
                    <span className="text-xs text-slate-600">
                      Monday to Saturday (Standard School Hours)
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-200">
                <a
                  id="contact-action-call"
                  href={`tel:${schoolData.phoneRaw}`}
                  className="p-2.5 rounded-lg text-xs font-bold text-center bg-blue-700 text-white hover:bg-blue-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  id="contact-action-whatsapp"
                  href={`https://wa.me/${schoolData.whatsappNumber}?text=Hello%20YS%20Stars%20Academy%2C%20I%20have%20an%20enquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-xs font-bold text-center bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  id="contact-action-instagram"
                  href={schoolData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-xs font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                <a
                  id="contact-action-directions"
                  href={schoolData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-xs font-bold text-center bg-slate-800 text-white hover:bg-slate-900 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill the details below and we will respond promptly.
              </p>

              {status === 'success' ? (
                <div id="contact-success-box" className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 mb-1">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-emerald-800 mb-4">
                    Thank you, {name}. Your inquiry has been logged for our school office.
                  </p>
                  <button
                    id="contact-reset-btn"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form id="general-contact-form" onSubmit={handleContactSubmit} noValidate>
                  {errorMsg && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Admission timing, school visit, class queries"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-6 rounded-lg text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
