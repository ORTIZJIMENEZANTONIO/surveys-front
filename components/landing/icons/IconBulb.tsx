interface IconBulbProps {
  className?: string;
}

export default function IconBulb({ className }: IconBulbProps) {
  return (
    <svg
      className={className}
      width="62"
      height="62"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6D2FD8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="11" r="4" />
      <path d="M12 15v3" />
      <path d="M9 21h6" />
    </svg>
  );
}
