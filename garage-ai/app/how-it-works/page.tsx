import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { FileText, Wrench, Zap, CheckCircle, ArrowRight, AlertTriangle, Shield, BookOpen } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">How Garage AI Works</h1>
          <p className="mb-8 text-zinc-400">
            Our AI-powered car diagnostic system uses advanced machine learning algorithms to accurately diagnose car
            problems. Follow these simple steps to get started.
          </p>

          {/* Step-by-step instructions */}
          <div className="space-y-8 mb-12">
            <Card className="border-zinc-800 bg-zinc-900/50 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full"></div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center justify-center bg-emerald-500/20 rounded-full w-16 h-16 flex-shrink-0">
                  <span className="text-2xl font-bold text-emerald-400">1</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-emerald-400" />
                    Select Your Input Method
                  </h2>
                  <p className="text-zinc-300 mb-4">Choose how you want to describe your car problem:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Symptom Selection:</strong> Choose from common car problems
                        like engine noises, warning lights, or performance issues.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Text or Voice Description:</strong> Describe the issue in your
                        own words or record a voice description.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Image/Video Upload:</strong> Upload photos or videos of the
                        problem or warning lights.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">OBD-II Codes:</strong> Enter diagnostic trouble codes from an
                        OBD scanner.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full"></div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center justify-center bg-cyan-500/20 rounded-full w-16 h-16 flex-shrink-0">
                  <span className="text-2xl font-bold text-cyan-400">2</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-cyan-400" />
                    AI Analysis Process
                  </h2>
                  <p className="text-zinc-300 mb-4">Our advanced AI processes your input and analyzes the problem:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Pattern Recognition:</strong> The AI compares your symptoms
                        with millions of known car issues.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Vehicle-Specific Analysis:</strong> Takes into account your
                        car's make, model, and year for accurate diagnosis.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Image Processing:</strong> Analyzes uploaded images to
                        identify visible issues.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Code Interpretation:</strong> Translates OBD-II codes into
                        plain language explanations.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full"></div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center justify-center bg-emerald-500/20 rounded-full w-16 h-16 flex-shrink-0">
                  <span className="text-2xl font-bold text-emerald-400">3</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <Wrench className="mr-2 h-5 w-5 text-emerald-400" />
                    Comprehensive Results
                  </h2>
                  <p className="text-zinc-300 mb-4">Receive detailed diagnosis information:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Problem Identification:</strong> Clear explanation of the
                        likely issue and its severity.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Repair Instructions:</strong> Step-by-step guide on how to fix
                        the problem yourself, if possible.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Cost Estimation:</strong> Approximate cost for parts and
                        professional repair if needed.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Preventive Advice:</strong> Tips to prevent the issue from
                        recurring in the future.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full"></div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center justify-center bg-cyan-500/20 rounded-full w-16 h-16 flex-shrink-0">
                  <span className="text-2xl font-bold text-cyan-400">4</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-cyan-400" />
                    Interactive AI Assistant
                  </h2>
                  <p className="text-zinc-300 mb-4">Get additional help from our AI chat assistant:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Ask Follow-up Questions:</strong> Get clarification on any
                        part of the diagnosis.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Use Code Words:</strong> Try keywords like "EXPLAIN", "COST",
                        "DIY", or "PARTS" for specific information.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Troubleshooting Help:</strong> Get real-time guidance while
                        attempting repairs.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-zinc-400">
                        <strong className="text-zinc-300">Save Conversations:</strong> Reference the chat history for
                        future maintenance.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Pro Tips Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Pro Tips for Better Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex items-start">
                  <Shield className="mt-1 mr-3 h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-zinc-200">Be Specific</h3>
                    <p className="text-sm text-zinc-400">
                      The more details you provide about your car problem, the more accurate our diagnosis will be.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex items-start">
                  <Shield className="mt-1 mr-3 h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-zinc-200">Use Multiple Inputs</h3>
                    <p className="text-sm text-zinc-400">
                      Combine symptom selection with images or OBD codes for the most accurate results.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex items-start">
                  <Shield className="mt-1 mr-3 h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-zinc-200">Try Code Words</h3>
                    <p className="text-sm text-zinc-400">
                      In the AI chat, use keywords like "EXPLAIN", "COST", "DIY", or "PARTS" for specific information.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex items-start">
                  <AlertTriangle className="mt-1 mr-3 h-5 w-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-zinc-200">Safety First</h3>
                    <p className="text-sm text-zinc-400">
                      Always prioritize safety. If you're unsure about a repair, consult a professional mechanic.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
            >
              <Link href="/diagnose">
                Start Your Diagnosis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
