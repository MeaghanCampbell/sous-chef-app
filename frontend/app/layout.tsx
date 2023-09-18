
import '../styles/globals.css'
import '../axiosConfig'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
      <html lang="en">

          <body className="blush-bg h-screen">
                
                {children}
              
          </body>

      </html>
    )
}