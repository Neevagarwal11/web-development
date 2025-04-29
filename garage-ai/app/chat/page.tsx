import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">AI Assistant Chat</h1>
          <p className="mb-8 text-zinc-400">
            Chat with our AI assistant to troubleshoot your car problems interactively.
          </p>

          <ChatInterface />
        </div>
      </div>

      <Footer />
    </main>
  )
}
