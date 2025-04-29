"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Diagnose", href: "/diagnose" },
    { label: "Chat Assistant", href: "/chat" },
    { label: "How It Works", href: "/how-it-works" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold">Garage AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
            <Link href="/diagnose">Start Diagnosis</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-zinc-950 border-zinc-800">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-lg font-medium text-zinc-400 transition-colors hover:text-zinc-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-emerald-500 hover:bg-emerald-600">
                <Link href="/diagnose" onClick={() => setIsOpen(false)}>
                  Start Diagnosis
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
