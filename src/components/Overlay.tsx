import Image from "next/image";
import WhatsappLogo from "../assets/icons/whatsapp.png";

export default function Overlay() {
  return (
    <a
      href="https://wa.me/6285330172687"
      target="_blank"
      className="inline-block fixed bottom-8 right-8"
    >
      <Image src={WhatsappLogo} width={42} alt="Icon Logo Whatsapp" />
    </a>
  );
}
