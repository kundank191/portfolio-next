import '@/styles/globals.css'
import {Montserrat} from "next/font/google"

const mosterrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
  <main className={`${mosterrat.variable} font-mont`}>
    <Component {...pageProps} />
  </main>
  )
}
