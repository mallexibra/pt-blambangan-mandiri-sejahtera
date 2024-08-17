import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-4xl px-4 md:px-8">{children}</div>;
}
