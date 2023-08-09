import '../styles/globals.css'
import NavBar from '../components/nav';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
      <html lang="en">
        <body className="bg-white flex">

          <NavBar />

          <main className="px-4 sm:px-6 py-8">
            
            {children}

          </main>
            
        </body>
      </html>
    )
}