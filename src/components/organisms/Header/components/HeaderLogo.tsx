import Link from "next/link";
import Image from "next/image";

export function HeaderLogo() {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src="/images/logo.png"
        alt="MedStore Logo"
        width={160}
        height={40}
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
}
