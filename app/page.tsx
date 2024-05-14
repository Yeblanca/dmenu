import Image from "next/image";
import logo from '@/assets/logo.png';
import Menu from "./components/Menu";
import { getItemsByCategory } from "./lib/items";
import { Suspense } from "react";

export default async function Home() {
  const items = await getItemsByCategory();

  return (<>
    <header className="header">
      <div><Image alt="Restaurant logo" src={logo} /></div>
    </header>
    <main>
      <h1>Welcome to our restaurant!</h1>
      <p>Enjoy our delicious food and drinks!</p>
      <Suspense fallback={<div>Loading...</div>} >
        <Menu items={items} />
      </Suspense>
    </main>
  </>);
}
