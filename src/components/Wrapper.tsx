import type { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-tequila-600/70 relative">
      <div className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay" />

      {children}
    </div>
  );
};

export default Wrapper;
