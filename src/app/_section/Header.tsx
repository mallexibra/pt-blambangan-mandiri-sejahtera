import Container from "@/components/Container";
import heroImage from "../../assets/img/hero.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Container
        classNames={"flex justify-between items-center gap-8 min-h-screen"}
      >
        <section className="w-1/2">
          <h2 className="text-primary font-extrabold text-4xl">
            PT BLAMBANGAN MANDIRI SEJAHTERA
          </h2>
          <p className="text-primary my-3">
            Firma hukum terkemuka yang berdedikasi untuk melindungi hak dan
            kepentingan Anda melalui solusi hukum yang tepat dan berintegritas.
          </p>
          <div className="flex gap-3 mt-6">
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
        <section className="w-1/2">
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
