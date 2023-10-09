import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "./next.svg";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="helpdesk logo" width={70} color="#7856ff" />
      <h1>Shop</h1>
      <Link href="/">Home</Link>
      <Link href="/catalogs">Catalogs</Link>
    </nav>
  );
}
