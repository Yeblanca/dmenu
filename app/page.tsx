import Image from "next/image";
import logo from '@/assets/logo.png';
import Menu from "./components/Menu";
import { getItemsByCategory } from "./lib/items";
import { Suspense } from "react";

export default async function Home() {
  const items = await getItemsByCategory();

  return (<>
    <header className="header">
      <div><Image alt="Restaurant logo" layout="fill" src={logo} /></div>
    </header>
    <main>
      <Suspense fallback={<div>Loading...</div>} >
        <Menu items={items} />
      </Suspense>
    </main>
  </>);
}
