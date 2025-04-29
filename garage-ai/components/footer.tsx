import Link from "next/link"
import { Car } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">Garage AI</span>
            </Link>
            <p className="mt-4 text-sm text-zinc-400">
              Your AI-powered car diagnostic assistant. Get accurate diagnoses and save on repair costs.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-100">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/diagnose" className="text-zinc-400 hover:text-zinc-100">
                    Diagnose
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="text-zinc-400 hover:text-zinc-100">
                    AI Chat Assistant
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-zinc-400 hover:text-zinc-100">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-100">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-100">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-100">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Garage AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
