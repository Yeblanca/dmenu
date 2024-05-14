import Image from "next/image";
import logo from '@/assets/logo.png';
import Menu from "./components/Menu";
import { getItemsByCategory } from "./lib/items";

export default async function Home() {
  const items = await getItemsByCategory();

  return (<>
    <header>
      <div><Image alt="Restaurant logo" src={logo} /></div>
    </header>
    <main>
      <h1>Welcome to our restaurant!</h1>
      <p>Enjoy our delicious food and drinks!</p>
      <Menu items={items} />
    </main>
  </>);
}
