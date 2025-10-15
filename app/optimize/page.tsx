'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Upload, FileText, Sparkles, Download, AlertCircle } from 'lucide-react';

export default function OptimizePage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizedResume, setOptimizedResume] = useState('');
  const [keywordScore, setKeywordScore] = useState(0);

  const handleOptimize = async () => {
    if (!resumeFile || !jobDescription) return;

    setIsOptimizing(true);
    
    // Simulate AI optimization
    setTimeout(() => {
      setOptimizedResume(`OPTIMIZED RESUME

PROFESSIONAL SUMMARY
Results-driven professional with expertise in ${jobDescription.split(' ').slice(0, 3).join(', ')}. Proven track record of delivering high-impact solutions and driving business growth.

KEY SKILLS
• ${jobDescription.split(' ').slice(0, 5).join(' ')}
• Project Management & Leadership
• Strategic Planning & Execution
• Cross-functional Team Collaboration

WORK EXPERIENCE
Senior Professional | Company Name | 2020 - Present
• Led initiatives resulting in 40% improvement in key metrics
• Managed cross-functional teams of 10+ members
• Implemented solutions aligned with ${jobDescription.split(' ').slice(0, 2).join(' ')}

EDUCATION
Bachelor's Degree in Relevant Field
University Name | 2016

CERTIFICATIONS
• Certified Professional in ${jobDescription.split(' ')[0]}
• Advanced Leadership Certificate`);
      
      setKeywordScore(87);
      setIsOptimizing(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">AI Resume Optimizer</h1>
          <p className="text-lg text-fg/70">
            Upload your resume and job description to get AI-powered optimization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5 text-accent" />
                Upload Resume
              </h2>
              
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <FileText className="w-12 h-12 text-accent mx-auto mb-3" />
                  <p className="font-medium mb-1">
                    {resumeFile ? resumeFile.name : 'Click to upload resume'}
                  </p>
                  <p className="text-sm text-fg/60">PDF, DOC, or DOCX (Max 5MB)</p>
                </label>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                Job Description
              </h2>
              
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here..."
                className="input-field min-h-[200px] resize-none"
              />
            </div>

            <button
              onClick={handleOptimize}
              disabled={!resumeFile || !jobDescription || isOptimizing}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isOptimizing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Optimize Resume
                </>
              )}
            </button>

            <div className="glass-card p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-sm text-fg/70">
                <p className="font-medium text-fg mb-1">Micro-transaction Required</p>
                <p>This optimization costs 0.001 ETH (~$2.50). Gas fees are sponsored by Paymaster.</p>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {optimizedResume ? (
              <>
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      Optimized Resume
                    </h2>
                    <button className="btn-secondary flex items-center gap-2 text-sm py-2 px-4">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>

                  <div className="bg-surface/50 rounded-lg p-6 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">ATS Compatibility Score</span>
                      <span className="text-2xl font-bold text-accent">{keywordScore}%</span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${keywordScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-white text-gray-900 rounded-lg p-6 max-h-[500px] overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm font-mono">
                      {optimizedResume}
                    </pre>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-3">Keyword Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-fg/70">Matched Keywords</span>
                      <span className="font-medium">23/28</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-fg/70">Missing Keywords</span>
                      <span className="font-medium text-orange-400">5</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-fg/70">Readability Score</span>
                      <span className="font-medium">92/100</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="glass-card p-12 text-center">
                <Sparkles className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ready to Optimize</h3>
                <p className="text-fg/70">
                  Upload your resume and job description to get started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
