import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Ask Community',
  description: 'Community Q&A platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white border-b">
          <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-xl font-semibold">Ask Community</h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
