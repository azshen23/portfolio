import React from "react";

const ScreenWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-poke-ink text-slate-100 overflow-x-hidden">
      {/* Zero-cost radial atmospheric glow (no expensive blur filter on scroll) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(650px 360px at 50% -5%, rgba(42, 117, 187, 0.18), transparent 70%), radial-gradient(480px 320px at 95% 95%, rgba(227, 53, 13, 0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        {children}
      </div>
    </div>
  );
};

export default ScreenWrapper;
