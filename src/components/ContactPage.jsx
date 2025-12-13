import React, { useState } from 'react';
import {
  ArrowRight,
  Send,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  FileText,
  Target,
  Settings,
  GitMerge,
  MessageSquare,
  ClipboardCheck,
  Leaf,
  Fingerprint,
  Quote,
  Star
} from 'lucide-react';

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    answers: {}
  });

  const diagnosticQuestions = [
    { pillar: "Identity", icon: <Fingerprint className="w-5 h-5" />, color: "from-blue-500 to-indigo-600", questions: ["Do you clearly define your leadership vision and values?", "Can your team articulate what you stand for as a leader?", "Do you consistently make decisions aligned with your stated values?"] },
    { pillar: "Clarity", icon: <Target className="w-5 h-5" />, color: "from-emerald-500 to-teal-600", questions: ["Does every team member understand their role and outcomes?", "Are expectations documented and easily accessible?", "Do new team members quickly understand how things work?"] },
    { pillar: "Trust", icon: <Shield className="w-5 h-5" />, color: "from-[#D4AF37] to-amber-500", questions: ["Do your teams feel they can rely on you and each other?", "Is honest feedback welcomed and acted upon?", "Do people feel safe to take risks and make mistakes?"] },
    { pillar: "Rhythm", icon: <Clock className="w-5 h-5" />, color: "from-purple-500 to-pink-500", questions: ["Are your meetings, feedback, and workflows predictable?", "Do you have consistent cadences for check-ins and reviews?", "Can team members anticipate what's coming next?"] },
    { pillar: "Alignment", icon: <GitMerge className="w-5 h-5" />, color: "from-rose-500 to-orange-500", questions: ["Are team priorities synchronized with organizational goals?", "Does everyone understand how their work connects to the bigger picture?", "Do departments collaborate effectively without silos?"] },
    { pillar: "Communication", icon: <MessageSquare className="w-5 h-5" />, color: "from-cyan-500 to-blue-500", questions: ["Is messaging clear, consistent, and structured?", "Do important updates reach everyone who needs them?", "Are channels of communication well-defined and efficient?"] },
    { pillar: "Accountability", icon: <ClipboardCheck className="w-5 h-5" />, color: "from-violet-500 to-purple-600", questions: ["Do you have systems that track responsibilities and follow-up?", "Are commitments reliably kept across the organization?", "Is there clarity on who owns what outcomes?"] },
    { pillar: "Sustainability", icon: <Leaf className="w-5 h-5" />, color: "from-green-500 to-emerald-600", questions: ["Can your leadership and culture endure changes or crises?", "Is knowledge documented so it doesn't leave with individuals?", "Would your team function effectively if you were absent for a month?"] }
  ];

  const handleAnswerChange = (pillarIndex, questionIndex, value) => {
    setFormData(prev => ({ ...prev, answers: { ...prev.answers, [`${pillarIndex}-${questionIndex}`]: value } }));
  };

  const handleSubmit = (e) => { e.preventDefault(); setCurrentStep(3); };
  const totalQuestions = diagnosticQuestions.reduce((acc, p) => acc + p.questions.length, 0);
  const answeredQuestions = Object.keys(formData.answers).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-gradient-to-br from-[#0a1628] via-[#132C4A] to-[#1a3a5c] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (<div key={i} className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" style={{ top: `${10 + i * 10}%`, left: '-50%', transform: `rotate(${-8 + i * 2}deg)`, animationDelay: `${i * 0.2}s` }}></div>))}
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full border border-[#D4AF37]/30 mb-10">
            <FileText className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-white font-bold uppercase tracking-wider">Free Assessment</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.05] mb-8">
            Start With Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-400">Octave Diagnostic</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
            Discover how your leadership measures across <span className="text-[#D4AF37] font-semibold">eight pillars</span> and receive a clear roadmap to move from chaos to cadence.
          </p>
          <a href="#diagnostic" className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
            <FileText className="w-5 h-5" />Take the Diagnostic<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-70">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-white" /><span className="text-white/80 text-sm">5-10 minutes</span></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-white" /><span className="text-white/80 text-sm">100% Confidential</span></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-white" /><span className="text-white/80 text-sm">Personalized Report</span></div>
          </div>
        </div>
      </section>

      {/* Why Diagnostic */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6">
                <Target className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Why Diagnose?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-6">Why the Octave <span className="text-[#D4AF37]">Diagnostic?</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">Most leaders don't fail due to lack of effort—they fail because <span className="font-bold text-red-500">leadership systems are unclear</span>.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">The Octave Diagnostic measures performance across the <span className="font-bold text-[#132C4A]">8 Octave pillars</span>, giving you actionable insights.</p>
              <div className="space-y-4">
                {["Score across all 8 leadership pillars", "Identify your top areas for improvement", "Get actionable quick wins immediately", "Personalized roadmap in 24 hours"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center"><CheckCircle className="w-4 h-4 text-white" /></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-[#132C4A] to-[#1a3a5c] rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6"><h3 className="text-2xl font-bold text-white mb-2">Sample Octave Score</h3></div>
                <div className="space-y-4">
                  {diagnosticQuestions.slice(0, 4).map((p, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${p.color} rounded-xl flex items-center justify-center text-white`}>{p.icon}</div>
                      <div className="flex-1"><div className="flex justify-between items-center mb-1"><span className="text-white text-sm font-medium">{p.pillar}</span><span className="text-[#D4AF37] text-sm font-bold">{3 + i}/5</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className={`h-full bg-gradient-to-r ${p.color} rounded-full`} style={{ width: `${(3 + i) * 20}%` }}></div></div></div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 text-center"><p className="text-gray-400 text-sm mb-2">Total Score</p><p className="text-4xl font-bold text-[#D4AF37]">32<span className="text-xl text-gray-400">/40</span></p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Form */}
      <section id="diagnostic" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {currentStep < 3 ? (
            <>
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#132C4A]">{currentStep === 0 ? "Step 1: Introduction" : currentStep === 1 ? "Step 2: Your Info" : `Step 3: Questions (${answeredQuestions}/${totalQuestions})`}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-400 rounded-full transition-all" style={{ width: `${currentStep * 33 + (currentStep === 2 ? (answeredQuestions / totalQuestions) * 34 : 0)}%` }}></div></div>
              </div>

              {currentStep === 0 && (
                <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-3xl flex items-center justify-center mb-8"><FileText className="w-10 h-10 text-white" /></div>
                  <h3 className="text-3xl font-serif font-bold text-[#132C4A] mb-4">Ready to Discover Your Leadership Score?</h3>
                  <p className="text-gray-600 mb-8">Answer 24 questions across 8 pillars. It takes 5-10 minutes.</p>
                  <button onClick={() => setCurrentStep(1)} className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white font-bold rounded-xl hover:scale-105 shadow-lg">Start<ArrowRight className="w-5 h-5" /></button>
                </div>
              )}

              {currentStep === 1 && (
                <div className="bg-white rounded-3xl p-10 shadow-xl">
                  <h3 className="text-2xl font-bold text-[#132C4A] mb-8">Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold text-[#132C4A] mb-2">Full Name *</label><input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none" placeholder="Your name" /></div>
                    <div><label className="block text-sm font-bold text-[#132C4A] mb-2">Email *</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none" placeholder="you@company.com" /></div>
                    <div><label className="block text-sm font-bold text-[#132C4A] mb-2">Company</label><input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none" placeholder="Your company" /></div>
                    <div><label className="block text-sm font-bold text-[#132C4A] mb-2">Role</label><input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none" placeholder="Your role" /></div>
                  </div>
                  <div className="flex justify-between mt-10">
                    <button onClick={() => setCurrentStep(0)} className="px-6 py-3 text-gray-500">Back</button>
                    <button onClick={() => setCurrentStep(2)} disabled={!formData.name || !formData.email} className="group inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white font-bold rounded-xl hover:scale-105 shadow-lg disabled:opacity-50">Continue<ArrowRight className="w-5 h-5" /></button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-8">
                    {diagnosticQuestions.map((pillar, pi) => (
                      <div key={pi} className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="flex items-center gap-4 mb-6"><div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center text-white`}>{pillar.icon}</div><div><h4 className="text-xl font-bold text-[#132C4A]">{pillar.pillar}</h4><p className="text-gray-500 text-sm">Pillar {pi + 1} of 8</p></div></div>
                        <div className="space-y-6">
                          {pillar.questions.map((q, qi) => (
                            <div key={qi} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                              <p className="text-gray-700 mb-4">{q}</p>
                              <div className="flex flex-wrap gap-3">
                                {['Yes', 'Somewhat', 'No'].map((opt) => (<button key={opt} type="button" onClick={() => handleAnswerChange(pi, qi, opt)} className={`px-6 py-2 rounded-full border-2 font-medium transition-all ${formData.answers[`${pi}-${qi}`] === opt ? (opt === 'Yes' ? 'bg-emerald-500 border-emerald-500 text-white' : opt === 'Somewhat' ? 'bg-amber-500 border-amber-500 text-white' : 'bg-red-500 border-red-500 text-white') : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>{opt}</button>))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 bg-[#132C4A]/5 rounded-2xl p-6 text-center"><Shield className="w-8 h-8 text-[#132C4A] mx-auto mb-3" /><p className="text-gray-600 text-sm">Your responses are <span className="font-bold">100% confidential</span>. A personalized Octave Report will be emailed within 24 hours.</p></div>
                  <div className="flex justify-between mt-10">
                    <button type="button" onClick={() => setCurrentStep(1)} className="px-6 py-3 text-gray-500">Back</button>
                    <button type="submit" className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white font-bold text-lg rounded-xl hover:scale-105 shadow-xl"><Send className="w-5 h-5" />Submit & Get Report<ArrowRight className="w-5 h-5" /></button>
                  </div>
                </form>
              )}
            </>
          ) : (
            <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-8"><CheckCircle className="w-12 h-12 text-white" /></div>
              <h3 className="text-3xl font-serif font-bold text-[#132C4A] mb-4">Thank You!</h3>
              <p className="text-xl text-gray-600 mb-6">Your Octave Diagnostic has been submitted successfully.</p>
              <p className="text-gray-500 mb-8">You'll receive your personalized report at <span className="font-bold text-[#132C4A]">{formData.email}</span> within 24 hours.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#132C4A] to-[#1a3a5c] rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5" />
            <div className="flex items-center gap-1 mb-6">{[1, 2, 3, 4, 5].map((s) => (<Star key={s} className="w-5 h-5 text-[#D4AF37]" fill="#D4AF37" />))}</div>
            <blockquote className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-8">"The Octave Diagnostic revealed blind spots in our leadership we didn't know existed—and gave us a clear roadmap to fix them."</blockquote>
            <div className="flex items-center gap-4"><div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">SC</div><div><p className="text-white font-bold">Sarah Chen</p><p className="text-gray-400">CEO, TechVision Inc</p></div></div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#D4AF37] via-[#c9a430] to-[#b8962e] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (<div key={i} className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{ top: `${10 + i * 10}%`, left: '-50%', transform: `rotate(${-8 + i * 2}deg)` }}></div>))}
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to Transform Your Leadership?</h2>
          <a href="#diagnostic" className="group inline-flex items-center gap-4 px-14 py-6 bg-white text-[#132C4A] font-bold text-xl rounded-2xl shadow-2xl hover:scale-105"><Sparkles className="w-6 h-6" />Begin Your Octave Journey<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></a>
        </div>
      </section>
    </div>
  );
}
