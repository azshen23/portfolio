export default function BrandLogo({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        width="64"
        height="64"
        rx="16"
        fill="#121A2F"
        stroke="rgba(148,163,184,0.28)"
        strokeWidth="2"
      />
      {/* Top Pokéball Crimson Arc */}
      <path
        d="M12 30C12 18.954 20.954 10 32 10C43.046 10 52 18.954 52 30H40.5C39.6 25.9 36.15 23 32 23C27.85 23 24.4 25.9 23.5 30H12Z"
        fill="#E3350D"
      />
      {/* Bottom Pokéball Crisp White Arc */}
      <path
        d="M12 34H23.5C24.4 38.1 27.85 41 32 41C36.15 41 39.6 38.1 40.5 34H52C52 45.046 43.046 54 32 54C20.954 54 12 45.046 12 34Z"
        fill="#F8FAFC"
      />
      {/* Center Champion Gold Core */}
      <circle
        cx="32"
        cy="32"
        r="5.5"
        fill="#F5B700"
        stroke="#0B1020"
        strokeWidth="2.5"
      />
    </svg>
  );
}
