import { getMenuItemsByName } from "@/app/lib/items";

export async function GET(request: Request) {
  const items = await getMenuItemsByName('');
  return new Response(JSON.stringify(items));

}