import './globals.css'

export const metadata = {
  title: 'Ne:One Play',
  description: 'Play around with your OneRecord Database',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ overflow: "hidden" }}>{children}</body>
    </html >
  )
}
