import Container from "./Container";

export default function Navbar() {
  return (
    <nav className={"bg-primary text-white"}>
      <Container classNames={"flex justify-between py-6"}>
        <h1 className="font-bold text-lg">Logo BMS</h1>
        <ul className="flex justify-end items-center gap-3 font-medium">
          <li>
            <a
              href="/"
              className="hover:text-secondary transition-all ease-in-out"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#layananproduk"
              className="hover:text-secondary transition-all ease-in-out"
            >
              Layanan & Produk
            </a>
          </li>
          <li>
            <a
              href="#contactus"
              className="hover:text-secondary transition-all ease-in-out"
            >
              Hubungi Kami
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
