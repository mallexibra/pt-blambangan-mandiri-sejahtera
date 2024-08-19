import Container from "@/components/Container";
import Image from "next/image";
import ProdukImage from "../../assets/img/produk.jpg";

export default function Services() {
  return (
    <div
      id="layananproduk"
      className="pb-12 min-h-screen grid place-items-center pt-20"
    >
      <Container>
        <h5
          data-aos="fade-down"
          className="font-bold text-primary md:text-3xl text-xl mb-8"
        >
          Layanan & Produk
        </h5>
        <div className="space-y-8">
          <div className="flex md:flex-row flex-col items-center gap-6">
            <Image
              src={ProdukImage}
              data-aos="fade-right"
              className="md:w-1/3 w-full h-48 rounded-md object-cover"
              alt="Produk Image"
            />
            <div data-aos="fade-left" className="md:w-2/3 w-full space-y-3">
              <h6 className="font-bold md:text-2xl text-lg text-primary">
                Jasa Security Aman Banget
              </h6>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                dolorem eos dignissimos voluptate illo quod perferendis, maiores
                nemo error magnam hic rerum, beatae nihil ipsam culpa quibusdam.
                Delectus ab vero ut inventore doloremque corporis eligendi
                blanditiis iure, commodi sunt, culpa dolores debitis? Molestias,
                voluptates. Praesentium asperiores nisi animi nihil voluptas.
              </p>
            </div>
          </div>
          <div className="flex items-center md:flex-row-reverse flex-col gap-6">
            <Image
              src={ProdukImage}
              data-aos="fade-left"
              className="md:w-1/3 w-full h-48 rounded-md object-cover"
              alt="Produk Image"
            />
            <div data-aos="fade-right" className="md:w-2/3 w-full space-y-3">
              <h6 className="font-bold md:text-2xl text-lg text-primary">
                Jasa Security Aman Banget
              </h6>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                dolorem eos dignissimos voluptate illo quod perferendis, maiores
                nemo error magnam hic rerum, beatae nihil ipsam culpa quibusdam.
                Delectus ab vero ut inventore doloremque corporis eligendi
                blanditiis iure, commodi sunt, culpa dolores debitis? Molestias,
                voluptates. Praesentium asperiores nisi animi nihil voluptas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
