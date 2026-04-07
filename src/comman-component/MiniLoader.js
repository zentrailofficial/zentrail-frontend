import Image from "next/image";
import React from "react";

const MiniLoader = () => {
  return (
    <div className="flex items-center justify-center gap-3 text-green-600 dm_sans">
      <Image
        src="/footerlogo.png"
        width={35}
        height={35}
        alt="loading logo"
        className="animate-spin-slow animate-spin-zoom"
      />
      <p className="text-lg font-medium animate-pulse">Loading...</p>
    </div>
  );
};

export default MiniLoader;
