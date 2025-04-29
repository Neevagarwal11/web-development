import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DiagnosisForm } from "@/components/diagnosis-form"

export default function DiagnosePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Car Diagnosis</h1>
          <p className="mb-8 text-zinc-400">
            Tell us about your car problem and our AI will help diagnose the issue. You can describe symptoms, upload
            images, or enter diagnostic codes.
          </p>

          <DiagnosisForm />
        </div>
      </div>

      <Footer />
    </main>
  )
}
