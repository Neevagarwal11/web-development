"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { AlertTriangle, CheckCircle, Wrench, DollarSign, Clock, Shield } from "lucide-react"
import Link from "next/link"

// Replace the mockDiagnoses array with this enhanced version
const mockDiagnoses = [
  {
    id: "battery",
    title: "Dead or Weak Battery",
    description: "Your battery may be discharged or reaching the end of its life.",
    symptoms: [
      "Car won't start",
      "Clicking sound when starting",
      "Dim headlights",
      "Electrical components working poorly",
    ],
    solution:
      "Check battery terminals for corrosion. Clean if necessary. Test battery voltage with a multimeter. If below 12.4V when the car is off, the battery may need charging or replacement.",
    diyDifficulty: "Easy",
    mechanicRequired: false,
    estimatedCost: "$80-150 for a new battery",
    parts: ["Battery", "Battery terminals (if corroded)"],
    tools: ["Wrench", "Wire brush", "Multimeter (optional)"],
    vehicleDetails: {
      affectedSystems: ["Electrical System", "Starting System"],
      commonVehicles: ["All vehicles, but especially older models and those in extreme climates"],
      averageRepairTime: "30 minutes to 1 hour",
      warningSignals: ["Slow engine cranking", "Dashboard lights dimming", "Multiple electrical failures"],
    },
    rootCause:
      "Battery failure typically occurs due to age (most batteries last 3-5 years), extreme temperatures, leaving lights on, or a failing charging system that isn't properly recharging the battery.",
    prevention:
      "Have your battery tested regularly, especially before extreme weather seasons. Keep terminals clean and free of corrosion. Ensure your alternator is functioning properly. Don't leave lights or accessories on when the engine is off. Consider a battery tender for vehicles not driven regularly.",
    longTermImpact:
      "Continuing to drive with a weak battery can damage your alternator by forcing it to work harder to compensate. It can also leave you stranded if the battery fails completely.",
  },
  {
    id: "alternator",
    title: "Failing Alternator",
    description: "The alternator may not be charging your battery properly.",
    symptoms: [
      "Battery warning light on dashboard",
      "Dim headlights that get dimmer when revving",
      "Multiple electrical issues",
      "Battery drains quickly after charging",
    ],
    solution:
      "Test alternator output with a multimeter. Should read 13.5-14.5V when the engine is running. If output is low, the alternator needs replacement.",
    diyDifficulty: "Moderate",
    mechanicRequired: true,
    estimatedCost: "$250-400 including parts and labor",
    parts: ["Alternator", "Drive belt (sometimes needed)"],
    tools: ["Socket set", "Wrench set", "Multimeter"],
    vehicleDetails: {
      affectedSystems: ["Electrical System", "Charging System"],
      commonVehicles: ["All vehicles, but higher failure rates in high-mileage vehicles"],
      averageRepairTime: "1-3 hours depending on engine accessibility",
      warningSignals: [
        "Battery light on dashboard",
        "Electrical components failing while driving",
        "Burning rubber smell",
      ],
    },
    rootCause:
      "Alternator failure usually occurs due to worn internal components (brushes, bearings), damaged diodes, or external factors like water damage or belt issues. The alternator is responsible for generating electricity to power your vehicle's systems and recharge the battery while the engine runs.",
    prevention:
      "Have your charging system tested during regular maintenance. Listen for unusual noises from the alternator area. Check belt tension and condition regularly. Keep the alternator clean and protected from excessive water exposure. Address any warning lights promptly.",
    longTermImpact:
      "Driving with a failing alternator will eventually drain your battery completely, causing your vehicle to stall and leaving you stranded. It can also damage sensitive electronic components due to voltage fluctuations.",
  },
  {
    id: "starter",
    title: "Faulty Starter Motor",
    description: "The starter motor may be worn out or malfunctioning.",
    symptoms: [
      "Grinding noise when starting",
      "Car cranks slowly",
      "Click sound but engine doesn't turn over",
      "Intermittent starting issues",
    ],
    solution:
      "Test the starter circuit. If the battery is good but the starter is not engaging properly, it may need replacement.",
    diyDifficulty: "Difficult",
    mechanicRequired: true,
    estimatedCost: "$350-500 including parts and labor",
    parts: ["Starter motor", "Possibly solenoid", "Mounting hardware"],
    tools: ["Socket set", "Wrench set", "Jack and stands", "Electrical tester"],
    vehicleDetails: {
      affectedSystems: ["Starting System", "Electrical System"],
      commonVehicles: ["All vehicles, particularly high-mileage and older models"],
      averageRepairTime: "1-4 hours depending on accessibility",
      warningSignals: [
        "Grinding or clicking when attempting to start",
        "Intermittent starting failures",
        "Smoke from starter area",
      ],
    },
    rootCause:
      "Starter motor failure typically occurs due to worn brushes, damaged commutator, failed solenoid, or damaged flywheel teeth. The starter is a high-torque electric motor that engages with your engine's flywheel to crank the engine during starting.",
    prevention:
      "Avoid prolonged cranking when starting your vehicle. Address starting issues promptly before they worsen. Ensure your battery is in good condition to prevent the starter from working harder than necessary. Have your starting system inspected during regular maintenance.",
    longTermImpact:
      "Continuing to use a failing starter can damage your engine's flywheel teeth, leading to more expensive repairs. It can also leave you stranded when the starter eventually fails completely.",
  },
]

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const diagnosisId = searchParams.get("id") || "battery"
  const [diagnosis, setDiagnosis] = useState<any>(null)

  useEffect(() => {
    // In a real app, this would be an API call
    const result = mockDiagnoses.find((d) => d.id === diagnosisId) || mockDiagnoses[0]
    setDiagnosis(result)
  }, [diagnosisId])

  if (!diagnosis) {
    return <div className="flex justify-center items-center h-screen">Loading diagnosis...</div>
  }

  // Replace the return statement with this enhanced version that includes more detailed information
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Diagnosis Results</h1>
            <p className="text-zinc-400">
              Based on your description, our AI has identified the following possible issue:
            </p>
          </div>

          <Card className="mb-8 border-emerald-500/20 bg-zinc-900/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-emerald-400">{diagnosis.title}</CardTitle>
              <CardDescription className="text-zinc-400 text-base">{diagnosis.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Vehicle Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-800/30 rounded-lg p-4 border border-zinc-700/50">
                  <div>
                    <h3 className="text-sm uppercase text-zinc-500 font-medium mb-2">Vehicle Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Make:</span>
                        <span className="text-zinc-200 font-medium">Toyota</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Model:</span>
                        <span className="text-zinc-200 font-medium">Camry</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Year:</span>
                        <span className="text-zinc-200 font-medium">2018</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase text-zinc-500 font-medium mb-2">Affected Systems</h3>
                    <div className="flex flex-wrap gap-2">
                      {diagnosis.vehicleDetails.affectedSystems.map((system: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-zinc-700/50 rounded-full text-xs text-zinc-300">
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-medium text-zinc-200">Common Symptoms</h3>
                  <ul className="list-disc pl-5 text-zinc-400">
                    {diagnosis.symptoms.map((symptom: string, index: number) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-medium text-zinc-200">Root Cause</h3>
                  <p className="text-zinc-400">{diagnosis.rootCause}</p>
                </div>

                <div>
                  <h3 className="mb-2 font-medium text-zinc-200">Recommended Solution</h3>
                  <p className="text-zinc-400">{diagnosis.solution}</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                    <div className="mb-2 flex items-center">
                      <Wrench className="mr-2 h-5 w-5 text-emerald-400" />
                      <h3 className="font-medium text-zinc-200">DIY Difficulty</h3>
                    </div>
                    <p className="text-zinc-400">{diagnosis.diyDifficulty}</p>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                    <div className="mb-2 flex items-center">
                      <DollarSign className="mr-2 h-5 w-5 text-emerald-400" />
                      <h3 className="font-medium text-zinc-200">Estimated Cost</h3>
                    </div>
                    <p className="text-zinc-400">{diagnosis.estimatedCost}</p>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                    <div className="mb-2 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-emerald-400" />
                      <h3 className="font-medium text-zinc-200">Repair Time</h3>
                    </div>
                    <p className="text-zinc-400">{diagnosis.vehicleDetails.averageRepairTime}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  {diagnosis.mechanicRequired ? (
                    <div className="flex items-center text-amber-400">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      <span>Professional mechanic recommended for this repair</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-emerald-400">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      <span>This repair can be done at home with basic tools</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-medium text-zinc-200">Required Parts</h3>
                    <ul className="list-disc pl-5 text-zinc-400">
                      {diagnosis.parts.map((part: string, index: number) => (
                        <li key={index}>{part}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium text-zinc-200">Required Tools</h3>
                    <ul className="list-disc pl-5 text-zinc-400">
                      {diagnosis.tools.map((tool: string, index: number) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-lg p-4">
                  <h3 className="mb-2 font-medium text-emerald-300 flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Prevention Tips
                  </h3>
                  <p className="text-zinc-300">{diagnosis.prevention}</p>
                </div>

                <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-4">
                  <h3 className="mb-2 font-medium text-amber-300 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Long-Term Impact If Not Addressed
                  </h3>
                  <p className="text-zinc-300">{diagnosis.longTermImpact}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild variant="outline">
              <Link href="/diagnose">New Diagnosis</Link>
            </Button>
            <Button asChild>
              <Link href="/chat">Chat with AI Assistant</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
