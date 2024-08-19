import { IconBrandWhatsapp } from "@tabler/icons-react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full bg-primary">
      <Container>
        <div className="flex md:justify-between flex-col md:flex-row gap-5 text-white py-8">
          <section className="md:w-1/3 w-full">
            <h5 className="font-bold text-lg mb-5">Logo BUM</h5>
            <p className="md:text-base text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              doloremque magnam at officiis quaerat fugit. Aliquam facilis
              officia rem ipsum!
            </p>
          </section>
          <section className="md:w-1/3 w-full">
            <h5 className="font-bold text-lg mb-5">Kantor Pusat</h5>
            <p className="md:text-base text-sm">
              Jl. Jenderal Sudirman No. 78 <br />
              Panderejo, Kab. Banyuwangi <br />
              Jawa Timur - Indonesia
            </p>
          </section>
          <section className="md:w-max w-full md:text-base text-sm">
            <h5 className="font-bold text-lg mb-5">Kontak Kami</h5>
            <div className="flex items-center gap-3">
              <IconBrandWhatsapp className="text-white" />
              <p>+62 82374342347</p>
            </div>
          </section>
        </div>
        <p className="text-center p-5 border-t border-white text-white md:text-sm text-xs">
          Copyright © 2024 PT Blambangan Usaha Mandiri. All rights reserved
        </p>
      </Container>
    </footer>
  );
}
