"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { Car, FileText, Mic, Camera, Upload, AlertTriangle, CheckCircle } from "lucide-react"

export function DiagnosisForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  const commonSymptoms = [
    "Car won't start",
    "Check engine light on",
    "Strange noise when accelerating",
    "Overheating",
    "Poor fuel economy",
    "Rough idle",
    "Stalling",
    "Vibration when driving",
    "Difficulty steering",
    "Brake issues",
    "Transmission problems",
    "Battery/electrical issues",
  ]

  const handleSymptomToggle = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to results page
      router.push("/results?id=battery")
    }, 1500)
  }

  const handleRecording = () => {
    setIsRecording(!isRecording)

    if (!isRecording) {
      // In a real app, this would start recording
      setTimeout(() => {
        setIsRecording(false)
      }, 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="symptoms" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="symptoms" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Symptoms</span>
          </TabsTrigger>
          <TabsTrigger value="describe" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            <span className="hidden sm:inline">Describe</span>
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Camera className="h-4 w-4" />
            <span className="hidden sm:inline">Upload</span>
          </TabsTrigger>
          <TabsTrigger value="codes" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            <span className="hidden sm:inline">OBD Codes</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="symptoms" className="mt-6">
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <div className="space-y-4">
              <div>
                <h3 className="mb-3 text-lg font-medium">Select Common Symptoms</h3>
                <p className="text-sm text-zinc-400 mb-4">Choose all symptoms that apply to your vehicle</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {commonSymptoms.map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox
                        id={symptom.replace(/\s+/g, "-").toLowerCase()}
                        checked={selectedSymptoms.includes(symptom)}
                        onCheckedChange={() => handleSymptomToggle(symptom)}
                      />
                      <Label htmlFor={symptom.replace(/\s+/g, "-").toLowerCase()} className="text-zinc-300">
                        {symptom}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="vehicle-info" className="mb-2 block text-lg font-medium">
                  Vehicle Information
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="make" className="mb-1 block text-sm">
                      Make
                    </Label>
                    <Input id="make" placeholder="e.g. Toyota" className="bg-zinc-800 border-zinc-700" />
                  </div>
                  <div>
                    <Label htmlFor="model" className="mb-1 block text-sm">
                      Model
                    </Label>
                    <Input id="model" placeholder="e.g. Camry" className="bg-zinc-800 border-zinc-700" />
                  </div>
                  <div>
                    <Label htmlFor="year" className="mb-1 block text-sm">
                      Year
                    </Label>
                    <Input id="year" placeholder="e.g. 2018" className="bg-zinc-800 border-zinc-700" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="describe" className="mt-6">
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="description" className="mb-2 block text-lg font-medium">
                  Describe Your Car Problem
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the issue in detail. When does it happen? What sounds do you hear? How long has it been occurring?"
                  className="h-32 bg-zinc-800 border-zinc-700"
                />
              </div>

              <div>
                <Button
                  type="button"
                  variant={isRecording ? "destructive" : "outline"}
                  onClick={handleRecording}
                  className="flex items-center"
                >
                  {isRecording ? (
                    <>
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Mic className="mr-2 h-4 w-4" />
                      Record Voice Description
                    </>
                  )}
                </Button>
                {isRecording && (
                  <p className="mt-2 text-sm text-zinc-400">Recording... Speak clearly about your car problem</p>
                )}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="upload" className="mt-6">
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-zinc-500" />
                <h3 className="mt-2 text-lg font-medium">Upload Images or Video</h3>
                <p className="mt-1 text-sm text-zinc-400">Drag and drop files here, or click to select files</p>
                <Button variant="outline" className="mt-4">
                  Select Files
                </Button>
                <p className="mt-2 text-xs text-zinc-500">Supports: JPG, PNG, MP4, MOV (max 50MB)</p>
              </div>

              <div>
                <Label htmlFor="image-description" className="mb-2 block text-lg font-medium">
                  Describe What's Shown in the Images/Video
                </Label>
                <Textarea
                  id="image-description"
                  placeholder="Provide additional context about what's shown in your uploads"
                  className="h-20 bg-zinc-800 border-zinc-700"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="codes" className="mt-6">
          <Card className="border-zinc-800 bg-zinc-900/50 p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="obd-code" className="mb-2 block text-lg font-medium">
                  Enter OBD-II Diagnostic Codes
                </Label>
                <p className="text-sm text-zinc-400 mb-4">
                  Enter the diagnostic trouble codes from your OBD-II scanner
                </p>
                <Input id="obd-code" placeholder="e.g. P0300, P0171" className="bg-zinc-800 border-zinc-700" />
                <p className="mt-2 text-xs text-zinc-500">Separate multiple codes with commas</p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Don't Have a Scanner?</h3>
                <p className="text-sm text-zinc-400">
                  If you don't have an OBD-II scanner, you can still get a diagnosis by:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-zinc-400">
                  <li className="mt-1">Describing your symptoms in the "Describe" tab</li>
                  <li className="mt-1">Uploading images/videos of your dashboard warning lights</li>
                  <li className="mt-1">Selecting common symptoms in the "Symptoms" tab</li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Get Diagnosis
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
