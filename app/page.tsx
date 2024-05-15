import Image from "next/image";
import logo from '@/assets/logo.png';
import Menu from "./components/Menu";
import { getItemsByCategory } from "./lib/items";
import { Suspense } from "react";
import Link from "next/link";

export default async function Home() {
  const items = await getItemsByCategory();

  return (<>
    <header className="header">
      <div className="shopping-cart">
      <Link href="/cart"><h1>Shopping cart</h1></Link>
      </div>
      <div className="img-container"><Image alt="Restaurant logo" layout="fill" src={logo} /></div>
    </header>
    <main>
      <Suspense fallback={<div>Loading...</div>} >
        <Menu items={items} />
      </Suspense>
    </main>
  </>);
}
