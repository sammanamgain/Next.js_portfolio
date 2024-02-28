import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActivesectionContextProvider from "@/context/active-section-context-provider";
import toast,{Toaster} from 'react-hot-toast'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samman Amgain",
  description:
    "Samman Babu Amgain is computer Engineer who  Mern stack developer and proficient in python and deep learning ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} 
      bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36 `}
      >
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem]  -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <ActivesectionContextProvider>
          <Header />
          <Toaster position="top-right"/>
          {children}
        </ActivesectionContextProvider>
      </body>
    </html>
  );
}
