import { ReactNode } from "react";
import Image from "next/image";
import "./globals.css";

export default function layout ({children}:{children: React.ReactNode}){
  return(
  <html lang ="en">
    <body className="bg-[#314892] text-white">
      {children}
    </body>
  </html>
  )
}