import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

export function Card({ className, children }: PropsWithChildren<Props>) {
  return (
    <div
      className={`p-1.5 sm:p-3 md:p-3.5 relative bg-white ring ring-black rounded-sm overflow-auto ${className}`}
    >
      {children}
    </div>
  );
}
