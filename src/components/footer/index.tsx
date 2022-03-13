import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <a
        href="https://github.com/gyanverma2"
        target="_blank"
        className="d-block mb-3"
      >
        <Image
            src="/icons/github-icon.svg"
            alt="github"
            width="28"
            height="29"
          />
      </a>

      <span className="text-light">Author: Nishant Kumar Verma</span>
    </div>
  );
};
