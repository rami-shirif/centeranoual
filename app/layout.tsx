import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Centre Dentaire ANOUAL | Kénitra',
  description: 'Centre Dentaire ANOUAL — Dr. Ilias EL KHATTABI & Dr. Lamyae BOUHI à Kénitra.',
}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
