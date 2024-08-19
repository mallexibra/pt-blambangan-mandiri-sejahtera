import Image from "next/image";
import WhatsappLogo from "../assets/icons/whatsapp.png";

export default function Overlay() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=6283857671574&text&type=phone_number&app_absent=0"
      target="_blank"
      className="inline-block fixed bottom-8 right-8"
    >
      <Image src={WhatsappLogo} width={42} alt="Icon Logo Whatsapp" />
    </a>
  );
}
