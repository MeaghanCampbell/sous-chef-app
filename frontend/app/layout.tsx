import '../styles/globals.css'
import NavBar from '../components/nav';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
      <html lang="en">
        <body className="blush-bg flex">

          <NavBar />

          <main className="px-4 sm:px-6 md:px-10 py-8">
            
            {children}

          </main>
            
        </body>
      </html>
    )
}