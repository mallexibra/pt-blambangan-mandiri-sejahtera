import { IconBrandWhatsapp } from "@tabler/icons-react";
import Container from "./Container";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary">
      <Container>
        <div className="flex md:justify-between flex-col md:flex-row gap-5 text-white py-8">
          <section className="md:w-1/3 w-full">
            <Image
              src={logo}
              className="md:w-full w-10/12"
              alt="Logo PT Blambangan Mandiri Sejahtera"
            />
          </section>
          <section className="md:w-1/3 w-full">
            <h5 className="font-bold text-lg mb-3">Kantor Pusat</h5>
            <Link
              href="https://maps.app.goo.gl/xs4aTbV6UYkBrDrS6"
              target="_blank"
              className="md:text-base text-sm"
            >
              Jl. Jenderal Sudirman No. 78 <br />
              Panderejo, Kab. Banyuwangi <br />
              Jawa Timur - Indonesia
            </Link>
          </section>
          <section className="md:w-max w-full md:text-base text-sm">
            <h5 className="font-bold text-lg mb-3">Kontak Kami</h5>
            <Link
              href="https://wa.me/6285330172687"
              target="_blank"
              className="flex items-center gap-3"
            >
              <IconBrandWhatsapp className="text-white" />
              <p>+62 85330172687</p>
            </Link>
          </section>
        </div>
        <p className="text-center p-5 border-t border-white text-white md:text-sm text-xs">
          Copyright © 2024 PT Blambangan Usaha Mandiri. All rights reserved
        </p>
      </Container>
    </footer>
  );
}
