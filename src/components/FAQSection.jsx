import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is the Octave Model™?",
            answer: "The Octave Model™ is our proprietary framework built on 8 pillars of leadership excellence: Identity, Clarity, Trust, Rhythm, Alignment, Communication, Accountability, and Sustainability. Each pillar addresses a critical dimension of organizational clarity and performance."
        },
        {
            question: "How long does a typical engagement last?",
            answer: "Engagements vary based on your needs. A Leadership System Pilot typically runs 6-8 weeks, while comprehensive organizational transformations may extend 6-12 months. We design every engagement to create lasting, sustainable change."
        },
        {
            question: "Do you work with organizations of all sizes?",
            answer: "Yes! The Octave Model™ is designed to scale. We work with startups, mid-sized companies, and enterprise organizations alike. The frameworks adapt to your organization's unique context and needs."
        },
        {
            question: "What makes LeadOctave different from other consultants?",
            answer: "We focus on building systems, not dependencies. Our goal is to create frameworks that your organization can sustain long after our engagement ends. We don't just solve problems—we build the capacity for your leaders to solve future problems themselves."
        },
        {
            question: "How do I know which service is right for us?",
            answer: "We recommend starting with the Octave Diagnostic—a free assessment that identifies which of the 8 pillars need the most attention. This provides a clear roadmap and helps us recommend the most impactful starting point for your organization."
        },
        {
            question: "Can you work with remote or distributed teams?",
            answer: "Absolutely. We've designed our frameworks to work effectively with both in-person and distributed teams. Many of our most successful implementations have been with fully remote organizations spanning multiple time zones."
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">FAQ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-6">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Everything you need to know about LeadOctave and our approach to leadership transformation.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? 'border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-[#D4AF37]' : 'text-[#132C4A]'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                        ? 'bg-[#D4AF37] rotate-180'
                                        : 'bg-gray-100'
                                    }`}>
                                    <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-white' : 'text-gray-500'
                                        }`} />
                                </div>
                            </button>

                            <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 p-8 bg-gradient-to-r from-[#132C4A] to-[#1a3a5c] rounded-3xl">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white font-medium">Still have questions?</span>
                    </div>
                    <p className="text-gray-300 mb-6">We're here to help. Get in touch with our team.</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
