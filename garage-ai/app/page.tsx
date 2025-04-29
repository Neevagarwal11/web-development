import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Car, Wrench, Zap, Shield, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/80 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_50%)]" />
        </div>

        <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
            <Zap size={14} className="mr-1" />
            Powered by Advanced AI
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Your AI Car Doctor
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Diagnose Car Issues in Seconds
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Get instant, accurate diagnoses for your vehicle problems using our advanced AI system. No more guesswork or
            expensive mechanic visits for simple issues.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
            >
              <Link href="/diagnose">
                Start Diagnosis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#how-it-works">How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How Garage AI Works</h2>
            <p className="mx-auto max-w-2xl text-zinc-400">
              Our AI-powered system uses advanced algorithms to diagnose car problems with high accuracy
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Car className="h-10 w-10 text-emerald-400" />}
              title="Describe Symptoms"
              description="Select from common symptoms or describe your car's issue in your own words"
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-cyan-400" />}
              title="AI Analysis"
              description="Our advanced AI analyzes your input and compares with millions of known issues"
            />
            <FeatureCard
              icon={<Wrench className="h-10 w-10 text-emerald-400" />}
              title="Get Solutions"
              description="Receive detailed diagnosis with step-by-step repair instructions"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-cyan-400" />}
              title="Save Money"
              description="Avoid unnecessary mechanic visits for issues you can fix yourself"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trusted by Thousands</h2>
            <p className="mx-auto max-w-2xl text-zinc-400">See what our users are saying about Garage AI</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "Saved me $300 on a repair I was able to do myself after Garage AI diagnosed the issue correctly.",
                author: "Michael T.",
                car: "Toyota Camry Owner",
              },
              {
                quote:
                  "The AI chat assistant walked me through troubleshooting my check engine light. Incredibly helpful!",
                author: "Sarah L.",
                car: "Honda Civic Owner",
              },
              {
                quote:
                  "As a new car owner, this tool is invaluable. It helped me understand what was wrong before going to the mechanic.",
                author: "James K.",
                car: "Ford F-150 Owner",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="mb-4 text-emerald-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="mr-1">
                        ★
                      </span>
                    ))}
                </div>
                <p className="mb-4 text-zinc-300">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-zinc-500">{testimonial.car}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Diagnose Your Car?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
            Start using our AI-powered diagnostic tool today and save time and money on car repairs
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
          >
            <Link href="/diagnose">
              Start Diagnosis <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
