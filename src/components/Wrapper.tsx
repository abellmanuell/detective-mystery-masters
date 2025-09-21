import type { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-chamois-500 relative">
      <div className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay" />
      <div className="relative z-5">{children}</div>
    </div>
  );
};

export default Wrapper;
