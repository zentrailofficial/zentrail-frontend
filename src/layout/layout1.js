import Navbar from "@/comman-component/navbar";
import React from "react";

export default function layout1({ children }) {
    return (
        <div >
         <Navbar></Navbar>
            <main >{children}</main>
        </div>
    );
}
