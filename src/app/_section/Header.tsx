import Container from "@/components/Container";
import heroImage from "../../assets/img/hero.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="min-h-screen grid place-items-center pt-6">
      <Container
        classNames={
          "flex md:justify-between items-center gap-5 md:gap-8 flex-col-reverse md:flex-row"
        }
      >
        <section data-aos="fade-up-right" className="md:w-1/2 w-full">
          <h2 className="text-primary font-extrabold md:text-4xl text-2xl text-center md:text-start">
            PT BLAMBANGAN MANDIRI SEJAHTERA
          </h2>
          <p className="text-primary my-3 text-center md:text-base text-sm md:text-start">
            Firma hukum terkemuka yang berdedikasi untuk melindungi hak dan
            kepentingan Anda melalui solusi hukum yang tepat dan berintegritas.
          </p>
          <div className="flex gap-3 mt-6 justify-center md:justify-start">
            <a
              href="#layananproduk"
              className="py-3 px-5 rounded-md text-white text-xs font-medium inline-block bg-primary"
            >
              Layanan Kami
            </a>
            <a
              href="#contactus"
              className="py-3 px-5 rounded-md text-secondary outline outline-1 outline-secondary text-xs font-medium inline-block bg-transparent"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
        <section data-aos="fade-up-left" className="md:w-1/2 w-full">
          <Image
            src={heroImage}
            className="rounded-md border-2 border-white"
            alt="Lawyer Advokat Hero Image"
          />
        </section>
      </Container>
    </header>
  );
}
