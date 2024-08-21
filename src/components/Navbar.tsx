"use client";
import { IconMenu } from "@tabler/icons-react";
import Container from "./Container";
import { useState, useEffect } from "react";
import cn from "@/utils/cn";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import Link from "next/link";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-primary text-white fixed left-0 top-0 right-0 z-50">
      <Container classNames="flex justify-between items-center py-6">
        <Link href={"/"}>
          <Image
            src={logo}
            className="md:w-[200px] w-[120]"
            alt="Logo PT Blambangan Mandiri Sejahtera"
          />
        </Link>
        <div>
          <IconMenu
            className={cn(
              "text-white cursor-pointer md:hidden transition-transform duration-300 ease-in-out",
              mobile ? "rotate-90" : "rotate-0"
            )}
            onClick={() => setMobile(!mobile)}
          />
        </div>
        <ul className="md:flex hidden justify-end items-center gap-3">
          <li>
            <a
              href="#home"
              className={cn(
                "hover:text-secondary transition-colors duration-300 ease-in-out",
                activeSection === "home" ? "text-secondary" : ""
              )}
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#layananproduk"
              className={cn(
                "hover:text-secondary transition-colors duration-300 ease-in-out",
                activeSection === "layananproduk" ? "text-secondary" : ""
              )}
            >
              Layanan & Produk
            </a>
          </li>
          <li>
            <a
              href="#contactus"
              className={cn(
                "hover:text-secondary transition-colors duration-300 ease-in-out",
                activeSection === "contactus" ? "text-secondary" : ""
              )}
            >
              Hubungi Kami
            </a>
          </li>
        </ul>
      </Container>
      <ul
        className={cn(
          "flex-col justify-center items-center gap-3 mb-8 md:hidden transition-transform duration-300 ease-in-out",
          mobile ? "flex mt-4" : "hidden"
        )}
      >
        <li>
          <a
            href="#home"
            className={cn(
              "hover:text-secondary transition-colors duration-300 ease-in-out",
              activeSection === "home" ? "text-secondary" : ""
            )}
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#layananproduk"
            className={cn(
              "hover:text-secondary transition-colors duration-300 ease-in-out",
              activeSection === "layananproduk" ? "text-secondary" : ""
            )}
          >
            Layanan & Produk
          </a>
        </li>
        <li>
          <a
            href="#contactus"
            className={cn(
              "hover:text-secondary transition-colors duration-300 ease-in-out",
              activeSection === "contactus" ? "text-secondary" : ""
            )}
          >
            Hubungi Kami
          </a>
        </li>
      </ul>
    </nav>
  );
}
