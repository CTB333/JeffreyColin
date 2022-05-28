import movieSeat from "../assets/movieSeat.png";
import pakapala from "../assets/pakapala.png";
import grabEats from "../assets/grabEats.png";
import courtier from "../assets/courtier.png";
import michWich from "../assets/michWich.png";

export const COLORS = {
  red: "#d21236",
  blue: "#2273de",
  orange: "#f17229",
  grey: "#a4a5a1",
  yellow: "#f7c215",
};

export const PROJECTS = [
  {
    title: "MovieSeat",
    subTitle: "",
    categories: ["PASSION PROJECT", "UX DESIGN", "USER RESEARCH"],
    subText:
      "Giving movie-goers and film fanatics a thrilling experience before they get to the theater.",
    imagePath: movieSeat,
    color: COLORS.blue,
  },

  {
    title: "Michwich",
    subTitle: "",
    categories: ["CONCEPTUAL", "UX DESIGN", "USER RESEARCH"],
    subText:
      "Providing customers with healthy meals and the ability to view their orders whereabouts through a centralized application.",
    imagePath: michWich,
    color: COLORS.yellow,
  },

  {
    title: "GrabnEats",
    subTitle: "Coming Soon",
    categories: ["INTERNSHIP", "RESEARCH", "ITERATIVE DESIGN", "PROTOTYPING"],
    subText:
      "Redesigning and researching the online food ordering and delivery to improvie conversions significantly in the process.",
    imagePath: grabEats,
    color: COLORS.orange,
  },

  {
    title: "Pakapala",
    subTitle: "Coming Soon",
    categories: ["INTERNSHIP", "RESEARCH", "ITERATIVE DESIGN", "PROTOTYPING"],
    subText:
      "Connecting caribbean diaspora to track their favorite artists and events.",
    imagePath: pakapala,
    color: COLORS.red,
  },

  {
    title: "Courtier",
    subTitle: "Coming Soon",
    categories: ["INTERNSHIP", "UX DESIGN", "PROTOTYPING"],
    subText:
      "Helping individuals who are looking to buy or rent a home make the  move with confidence by connecting them with local professionals.",
    imagePath: courtier,
    color: COLORS.grey,
  },
];
