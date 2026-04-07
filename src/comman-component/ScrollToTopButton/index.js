import { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          aria-label="scroll to top"
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 cursor-pointer p-3 rounded-[12px] bg-[#35c0f0] text-white shadow-lg hover:bg-[#0ec3ff] transition"
        >
          <MdArrowUpward size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
