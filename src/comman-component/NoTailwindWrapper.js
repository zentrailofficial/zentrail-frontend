import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function NoTailwindWrapper({ children, styleText = "" }) {
  const hostRef = useRef(null);
  const [shadowRoot, setShadowRoot] = useState(null);

  useEffect(() => {
    if (!hostRef.current) return;
    if (!hostRef.current.shadowRoot) {
      const root = hostRef.current.attachShadow({ mode: "open" });
      setShadowRoot(root);
    } else {
      setShadowRoot(hostRef.current.shadowRoot);
    }
  }, []);

  useEffect(() => {
    if (!shadowRoot) return;
    const styleEl = document.createElement("style");
    styleEl.textContent = styleText;
    shadowRoot.appendChild(styleEl);
    return () => {
      if (shadowRoot.contains(styleEl)) shadowRoot.removeChild(styleEl);
    };
  }, [shadowRoot, styleText]);

  return (
    <div ref={hostRef}>
      {shadowRoot && ReactDOM.createPortal(children, shadowRoot)}
    </div>
  );
}
