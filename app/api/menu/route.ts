import { NextResponse } from "next/server";

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  /** Price in SGD cents. e.g. 1280 means S$12.80 */
  priceCents: number;
  image: string;
};

const menu: MenuItem[] = [
  {
    id: 1,
    name: "Hainanese Chicken Rice",
    description:
      "Tender poached chicken served with fragrant rice cooked in chicken stock, accompanied by chilli sauce, ginger paste and dark soy.",
    priceCents: 850,
    image: "/images/example-menu.jpg",
  },
  {
    id: 2,
    name: "Char Kway Teow",
    description:
      "Stir-fried flat rice noodles with prawns, Chinese sausage, cockles, eggs, bean sprouts and chives in a rich dark soy sauce.",
    priceCents: 780,
    image: "/images/example-menu.jpg",
  },
  {
    id: 3,
    name: "Laksa",
    description:
      "Spicy coconut curry noodle soup with prawns, fishcake and bean sprouts. Topped with laksa leaf and a generous spoon of sambal.",
    priceCents: 920,
    image: "/images/example-menu.jpg",
  },
  {
    id: 4,
    name: "Hainanese Pork Chop",
    description: "Crispy breaded pork chop with onions, peas and tomato gravy.",
    priceCents: 1450,
    image: "/images/example-menu.jpg",
  },
  {
    id: 5,
    name: "Roti Prata Set",
    description:
      "Two pieces of flaky pan-fried flatbread served with a side of curry. Choose plain or egg.",
    priceCents: 650,
    image: "/images/example-menu.jpg",
  },
  {
    id: 6,
    name: "Mee Goreng",
    description:
      "Spicy stir-fried yellow noodles with potato, tofu, beansprouts, tomato and a fried egg on top.",
    priceCents: 720,
    image: "/images/example-menu.jpg",
  },
];

export async function GET() {
  return NextResponse.json(menu);
}
