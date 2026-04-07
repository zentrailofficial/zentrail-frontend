import Footer from "@/comman-component/footer";
import Navbar from "@/comman-component/navbar";
import React, { useEffect, useState } from "react";
import ConnectUsModal from "@/comman-component/connectUsModal/ConnectUsModal";
import CookiesPopup from "@/comman-component/cookies/cookies";




export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const modalShown = localStorage.getItem("modalShown");

        if (!modalShown) {
          const timer = setTimeout(() => {
            setOpen(true);
            localStorage.setItem("modalShown", "true"); 
          }, 7000);

          return () => clearTimeout(timer);
        }
      } catch (err) {
        console.error("localStorage error:", err);
      }
    }
  }, []);
  
  return (
    <div >
      <CookiesPopup />
      <Navbar></Navbar>
      <ConnectUsModal open={open} setOpen={setOpen} />
      <main >{children}</main>
      <Footer></Footer>
    </div>
  );
}
