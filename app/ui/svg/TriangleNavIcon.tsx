import { FC } from "react";

const TriangleNavIcon:FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      width="calc(1rem * 0.4375)"
      height="calc(1rem * 0.6250)"
      viewBox="0 0 7 10"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M0.702812 4.0233L4.59838 0.73839C5.25313 0.18639 6.24981 0.654342 6.24981 1.51384V8.48577C6.24981 9.34527 5.25238 9.81322 4.59838 9.26122L0.702812 5.97631C0.0990625 5.46706 0.0990625 4.53255 0.702812 4.0233Z"></path>
    </svg>
  );
};

export default TriangleNavIcon;
