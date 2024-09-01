import type { PostStructure } from "../post/types";

export const postsMocks: Array<Omit<PostStructure, "id">> = [
  {
    title: "Why the spider has eight legs",
    author: "John Doe",
    date: 1714751590000,
    imageUrl:
      "https://media.istockphoto.com/id/175948666/es/foto/ara%C3%B1a-en-la-web-sobre-fondo-verde.webp?b=1&s=612x612&w=0&k=20&c=5MrSYxt_jpC-oPW2XbfeV3lyBNpKN61HFhCrjIafYm8=",
    alternativeText: "A head spider",
    content:
      "The spider has eight legs because it is a spider. It is a spider because it has eight legs. If it had seven legs, it wouldn't be a spider. If it had nine legs, it wouldn't be a spider. It has eight legs, so it is a spider.",
  },
  {
    title: "Why the lion is the king of the jungle",
    author: "Jane Doe",
    date: 1714665190000,
    imageUrl:
      "https://media.istockphoto.com/id/1174903057/es/foto/retrato-de-le%C3%B3n.webp?b=1&s=612x612&w=0&k=20&c=uIFkmIB-XS-bez69QF93IlgNG8EN-mV_X15eqY7RR1c=",
    alternativeText: "A lion in the jungle",
    content:
      "The lion is the king of the jungle because it is the biggest and strongest animal in the jungle. It is the biggest and strongest animal in the jungle because it is the king of the jungle. If it wasn't the biggest and strongest animal in the jungle, it wouldn't be the king of the jungle. It is the biggest and strongest animal in the jungle, so it is the king of the jungle. If it wasn't the king of the jungle, it wouldn't be the biggest and strongest animal in the jungle.",
  },
];
