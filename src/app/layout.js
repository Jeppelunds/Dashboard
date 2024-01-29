import './globals.css'
import { oswaldFont } from '@/utils/fonts';
import Navigation from '@/components/navigation/navigation';
import { fetchGalleries } from "@/lib/data.service";

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default async function RootLayout({ children }) {

  const galleries = await fetchGalleries();

  return (
    <html lang="en">
      <body className={oswaldFont.className}>
        <Navigation galleries={galleries} />
        {children}
      </body>
    </html>
  )
}
