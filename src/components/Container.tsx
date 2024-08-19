"use client";
import cn from "@/utils/cn";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Container({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: String;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <div className={cn(classNames, "max-w-5xl px-7 md:px-0 mx-auto")}>
      {children}
    </div>
  );
}
