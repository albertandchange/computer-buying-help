import type { Metadata } from "next";
import { Geist, Geist_Mono, Sometype_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Components
import MainNav from "@/components/MainNav";
import PageTransitions from "@/components/PageTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sometypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Computer Buying Help",
  description: "Learn how, not just what, to buy",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sometypeMono.variable} antialiased overflow-hidden relative`}>
        <Gradient />
        <PageTransitions>
          <div className="flex">
            {/*main nav*/}
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            {/* <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <SecondaryNav />
            </div> */}
            <div className="w-full max-w-[1130px] px-[15px] mx-auto bg-pink-50/10">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransitions>
        <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" />
        <div dangerouslySetInnerHTML={{
          __html: `
    <df-messenger
    intent="WELCOME"
    chat-title="computer-buying-help"
    agent-id="9d8660d1-fddc-49c4-828d-4e2da06f0921"
    language-code="en"
    ></df-messenger>
    ` }} />
      </body>
    </html >
  );
}
