interface IconAnalyticsProps {
  className?: string;
}

export default function IconAnalytics({ className }: IconAnalyticsProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F3873A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 15h1" />
      <path d="M9 12h3" />
      <path d="M9 18h5" />
    </svg>
  );
}
