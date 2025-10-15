'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Target, Search, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AnalyzePage() {
  const [jobUrl, setJobUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setAnalysisResult({
        score: 73,
        matchedKeywords: [
          'React', 'TypeScript', 'Node.js', 'API Development', 'Agile',
          'Team Leadership', 'Problem Solving', 'Communication'
        ],
        missingKeywords: [
          'GraphQL', 'Docker', 'Kubernetes', 'CI/CD', 'Testing'
        ],
        suggestions: [
          'Add more specific technical skills mentioned in the job posting',
          'Include quantifiable achievements with metrics',
          'Emphasize leadership and collaboration experience',
          'Add relevant certifications if available'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Keyword Analyzer</h1>
          <p className="text-lg text-fg/70">
            Analyze job postings and optimize your resume for ATS compatibility
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-accent" />
                Job Posting URL
              </h2>
              
              <input
                type="url"
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                placeholder="https://example.com/job-posting"
                className="input-field mb-4"
              />

              <button
                onClick={handleAnalyze}
                disabled={!jobUrl || isAnalyzing}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Target className="w-5 h-5" />
                    Analyze Keywords
                  </>
                )}
              </button>
            </div>

            {analysisResult && (
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Compatibility Score</h2>
                  <div className="text-3xl font-bold text-accent">
                    {analysisResult.score}%
                  </div>
                </div>
                
                <div className="w-full bg-surface rounded-full h-3 mb-6">
                  <div
                    className="bg-accent h-3 rounded-full transition-all duration-500"
                    style={{ width: `${analysisResult.score}%` }}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="font-medium">Matched Keywords ({analysisResult.matchedKeywords.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.matchedKeywords.map((keyword: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-orange-400" />
                      <span className="font-medium">Missing Keywords ({analysisResult.missingKeywords.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.missingKeywords.map((keyword: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm text-orange-400"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {analysisResult ? (
              <div className="glass-card p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Optimization Suggestions
                </h2>

                <div className="space-y-3">
                  {analysisResult.suggestions.map((suggestion: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-surface/50 rounded-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-accent">{index + 1}</span>
                      </div>
                      <p className="text-sm text-fg/80">{suggestion}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <h3 className="font-medium mb-2">Next Steps</h3>
                  <ul className="text-sm text-fg/70 space-y-1">
                    <li>• Update your resume with missing keywords</li>
                    <li>• Use the AI Resume Optimizer for best results</li>
                    <li>• Request peer feedback on your changes</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="glass-card p-12 text-center">
                <Target className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ready to Analyze</h3>
                <p className="text-fg/70">
                  Enter a job posting URL to get keyword analysis and optimization suggestions
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
