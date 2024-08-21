import Container from "@/components/Container";
import Image from "next/image";
import security1 from "../../assets/img/security1.jpg";
import security2 from "../../assets/img/security2.jpg";
import security3 from "../../assets/img/security3.jpg";
import security4 from "../../assets/img/security4.jpg";
import security5 from "../../assets/img/security5.jpg";
import security6 from "../../assets/img/security6.png";

export default function Services() {
  return (
    <div
      id="layananproduk"
      className="pb-12 min-h-screen grid place-items-center md:pt-28 pt-24"
    >
      <Container>
        <h5
          data-aos="fade-down"
          className="font-bold text-primary md:text-3xl text-xl mb-8"
        >
          Layanan & Produk
        </h5>
        <div className="space-y-10">
          <div className="flex md:flex-row flex-col items-center gap-6">
            <Image
              src={security1}
              data-aos="fade-right"
              className="md:w-1/3 w-full h-48 rounded-md object-cover"
              alt="Produk Image"
            />
            <div data-aos="fade-left" className="md:w-2/3 w-full space-y-3">
              <h6 className="font-bold md:text-2xl text-lg text-primary">
                Layanan Keamanan Fasilitas
              </h6>
              <p className="md:text-base text-sm">
                Layanan ini bertujuan untuk memberikan perlindungan menyeluruh
                bagi berbagai jenis fasilitas, seperti gedung perkantoran,
                pabrik, pusat perbelanjaan, dan kompleks perumahan. Dengan
                personel keamanan yang terlatih dan berpengalaman, kami menjaga
                keamanan dan ketertiban di lingkungan Anda. Kami juga
                menggunakan teknologi keamanan terkini, seperti sistem
                monitoring dan alarm, untuk memastikan bahwa setiap sudut
                fasilitas Anda aman dari potensi ancaman.
              </p>
            </div>
          </div>
          <div className="flex items-center md:flex-row-reverse flex-col gap-6">
            <Image
              src={security2}
              data-aos="fade-left"
              className="md:w-1/3 w-full h-48 rounded-md object-cover"
              alt="Produk Image"
            />
            <div data-aos="fade-right" className="md:w-2/3 w-full space-y-3">
              <h6 className="font-bold md:text-2xl text-lg text-primary">
                Patroli Area
              </h6>
              <p className="md:text-base text-sm">
                Patroli area adalah layanan pengamanan yang dirancang khusus
                untuk mengawasi area yang luas dan kompleks, seperti kawasan
                industri, perumahan, atau lahan terbuka. Tim patroli kami
                melakukan inspeksi rutin dengan rute yang tidak terduga untuk
                mencegah aktivitas kriminal. Selain itu, kami dilengkapi dengan
                teknologi komunikasi dan pelaporan yang memungkinkan respons
                cepat terhadap setiap insiden, sehingga Anda bisa merasa aman
                dan terlindungi.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-6">
            <Image
              src={security3}
              data-aos="fade-right"
              className="md:w-1/3 w-full h-48 rounded-md object-cover"
              alt="Produk Image"
            />
            <div data-aos="fade-left" className="md:w-2/3 w-full space-y-3">
              <h6 className="font-bold md:text-2xl text-lg text-primary">
                Layanan Pengawalan Khusus
              </h6>
              <p className="md:text-base text-sm">
                Kami menyediakan layanan pengawalan khusus untuk memastikan
                keselamatan individu atau barang berharga selama perjalanan.
                Pengawalan ini dilaksanakan oleh personel terlatih yang
                berpengalaman dalam menghadapi situasi berisiko tinggi. Layanan
                ini ideal untuk transportasi barang berharga, dokumen penting,
                atau pengawalan pribadi dalam kondisi yang memerlukan keamanan
                ekstra. Dengan kendaraan khusus dan protokol keamanan yang
                ketat, kami memastikan bahwa perjalanan Anda aman dari awal
                hingga akhir.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col items-center gap-6">
            <Image
              src={security4}
              data-aos="fade-right"
              className="md:w-1/3 w-full h-48 rounded-md object-cover"
              alt="Produk Image"
            />
            <div data-aos="fade-left" className="md:w-2/3 w-full space-y-3">
              <h6 className="font-bold md:text-2xl text-lg text-primary">
                Keamanan Acara Khusus
              </h6>
              <p className="md:text-base text-sm">
                Layanan keamanan acara kami dirancang untuk melindungi
                acara-acara besar, seperti konser, pameran, konferensi, atau
                pertemuan lainnya, dari potensi ancaman keamanan. Tim kami
                bekerja sama dengan penyelenggara acara untuk merancang rencana
                keamanan yang sesuai dengan kebutuhan acara tersebut. Kami
                mengelola akses masuk dan keluar, melakukan pengawasan ketat
                selama acara berlangsung, serta menangani insiden dengan cepat
                dan efektif untuk memastikan kelancaran acara Anda.
              </p>
            </div>
          </div>
          <div className="flex items-center md:flex-row flex-col gap-6">
            <Image
              src={security5}
              data-aos="fade-left"
              className="md:w-1/3 w-full h-48 rounded-md object-cover"
              alt="Produk Image"
            />
            <div data-aos="fade-right" className="md:w-2/3 w-full space-y-3">
              <h6 className="font-bold md:text-2xl text-lg text-primary">
                Sistem Keamanan Terintegrasi
              </h6>
              <p className="md:text-base text-sm">
                Selain menyediakan personel keamanan, kami juga menawarkan
                layanan instalasi dan pemeliharaan sistem keamanan terintegrasi.
                Sistem ini mencakup CCTV, alarm, kontrol akses, dan perangkat
                keamanan lainnya yang dirancang untuk memberikan perlindungan
                maksimal di lokasi Anda. Kami juga menyediakan layanan
                monitoring jarak jauh, sehingga Anda dapat memantau keamanan
                properti Anda kapan saja dan di mana saja. Instalasi dilakukan
                oleh teknisi berpengalaman, dan kami juga menawarkan layanan
                pemeliharaan rutin untuk memastikan semua sistem bekerja dengan
                baik.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col items-center gap-6">
            <Image
              src={security6}
              data-aos="fade-right"
              className="md:w-1/3 w-full h-48 rounded-md object-cover"
              alt="Produk Image"
            />
            <div data-aos="fade-left" className="md:w-2/3 w-full space-y-3">
              <h6 className="font-bold md:text-2xl text-lg text-primary">
                Layanan Pengawalan Kas/Logistik
              </h6>
              <p className="md:text-base text-sm">
                Layanan ini khusus dirancang untuk pengawalan pengambilan dan
                pengiriman uang tunai atau barang berharga, baik antar bank,
                perusahaan, atau lokasi tertentu. Tim pengawalan kami terdiri
                dari personel yang terlatih dalam menangani transportasi
                berisiko tinggi. Kami menggunakan kendaraan khusus dan mengikuti
                protokol keamanan yang ketat untuk memastikan bahwa uang atau
                barang berharga Anda tiba dengan aman di tujuan. Layanan ini
                sangat cocok untuk perusahaan yang memerlukan transfer uang atau
                barang berharga secara rutin dan ingin meminimalkan risiko
                selama proses tersebut.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
