import "@/styles/globals.css";
import AppShell from "@/components/layouts/AppShell";
import type { AppProps } from "next/app";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Portfolio | Raihan Febriyansah',
  description: 'Ini adalah portfolio Raihan Febriyansah',
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
    </>
  )
}
