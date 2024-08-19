"use client";
import { IconMenu } from "@tabler/icons-react";
import Container from "./Container";
import { useState } from "react";
import cn from "@/utils/cn";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="bg-primary text-white fixed left-0 top-0 right-0 z-50">
      <Container classNames="flex justify-between py-6">
        <h1 className="font-bold text-lg">Logo BMS</h1>
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
              href="/"
              className="hover:text-secondary transition-colors duration-300 ease-in-out"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#layananproduk"
              className="hover:text-secondary transition-colors duration-300 ease-in-out"
            >
              Layanan & Produk
            </a>
          </li>
          <li>
            <a
              href="#contactus"
              className="hover:text-secondary transition-colors duration-300 ease-in-out"
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
            href="/"
            className="hover:text-secondary transition-colors duration-300 ease-in-out"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#layananproduk"
            className="hover:text-secondary transition-colors duration-300 ease-in-out"
          >
            Layanan & Produk
          </a>
        </li>
        <li>
          <a
            href="#contactus"
            className="hover:text-secondary transition-colors duration-300 ease-in-out"
          >
            Hubungi Kami
          </a>
        </li>
      </ul>
    </nav>
  );
}
