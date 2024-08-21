import Container from "@/components/Container";
import Image from "next/image";
import LawyerImage from "../../assets/img/lawyers.png";

export default function About() {
  return (
    <div className="min-h-screen flex items-center">
      <Container>
        <h3
          data-aos="fade-down"
          className="md:text-3xl text-xl font-bold text-primary mb-7"
        >
          Tentang Kami
        </h3>
        <div className="flex gap-5 justify-between items-center flex-col md:flex-row">
          <section data-aos="fade-right" className="md:w-1/3 w-full">
            <Image
              src={LawyerImage}
              className="rounded-md"
              alt="PT Blambangan Mandiri Sejahtera"
            />
          </section>
          <section data-aos="fade-left" className="md:w-2/3 w-full">
            <p className="font-bold text-primary md:text-2xl text-lg mb-3">
              PT BLAMBANGAN MANDIRI SEJAHTERA
            </p>
            <p className="md:text-base text-sm">
              Perusahaan yang bergerak di bidang jasa keamanan (security) yang
              berkomitmen untuk menyediakan layanan keamanan yang andal dan
              profesional bagi berbagai sektor industri, komersial, dan
              perumahan. Dengan tim yang terdiri dari personel keamanan terlatih
              dan berpengalaman, PT Blambangan Usaha Mandiri menawarkan berbagai
              layanan mulai dari pengamanan fasilitas, patroli area, hingga
              layanan pengawalan khusus.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
