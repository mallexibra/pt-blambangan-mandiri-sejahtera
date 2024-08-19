"use client";
import Container from "@/components/Container";
import { IconBrandWhatsapp, IconLocation } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [sectionHeight, setSectionHeight] = useState("auto");

  useEffect(() => {
    const footer = document.querySelector("footer");
    const footerHeight = footer?.clientHeight || 0;
    const viewportHeight = window.innerHeight;
    setSectionHeight(`${viewportHeight - footerHeight}px`);
  }, []);

  return (
    <div
      id="contactus"
      className="bg-neutral py-12 grid place-items-center"
      style={{ minHeight: sectionHeight }}
    >
      <Container classNames={"flex justify-between flex-col md:flex-row gap-8"}>
        <section data-aos="fade-right" className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.878956701032!2d114.36811827477092!3d-8.214926291817449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1452e36fade95%3A0xcbcf19a802a16922!2sJl.%20Jend.%20Sudirman%20No.8%2C%20Kec.%20Banyuwangi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1724027306677!5m2!1sen!2sid"
            className="w-full h-60 rounded-md border border-white"
            loading="lazy"
          ></iframe>
        </section>
        <section
          data-aos="fade-left"
          className="space-y-2 font-medium w-full md:text-base text-sm"
        >
          <h5 className="md:text-2xl text-lg font-bold text-primary">
            Kontak Kami
          </h5>
          <p>
            Untuk informasi lebih lanjut atau jika Anda memerlukan bantuan,
            silakan hubungi kami di:
          </p>
          <div className="flex gap-3 items-center">
            <IconBrandWhatsapp className="text-primary" />
            <p>+62984373221</p>
          </div>
          <div className="flex gap-3 items-start">
            <IconLocation className="text-primary" />
            <p>
              Jl. Jendereal Sudirman <br />
              No. 8 Panderejo <br />
              Banyuwangi - Jawa Timur
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
