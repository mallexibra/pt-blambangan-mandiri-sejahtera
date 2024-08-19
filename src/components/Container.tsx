import cn from "@/utils/cn";
import { ReactNode } from "react";

export default function Container({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: String;
}) {
  return (
    <div className={cn(classNames, "max-w-5xl px-7 md:px-0 mx-auto")}>
      {children}
    </div>
  );
}
