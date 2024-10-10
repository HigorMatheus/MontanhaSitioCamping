import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-emerald-50">
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
