import DeluxSteelStand1 from "./assets/DeluxSteelStand.webp";
// import DeluxSteelStand2 from "./assets/DeluxSheetStand.jpg";
import DeluxSteelStand3 from "./assets/DeluxSteelStand2.jpg";

//square pipe stand
import SquarePipeStand1 from "./assets/SquarePipeStand.png";
import SquarePipeStand2 from "./assets/SquarePipeStand.webp";

// square fruit trolley
import SquareFruitTrolly5 from "./assets/SquareFruitTrolly5.jpg";
import SquareFruitTrolley1 from "./assets/squareFruitTrolly1.jpg";
import SquareFruitTrolley2 from "./assets/squareFruitTrolly2.jpg";
import SquareFruitTrolley3 from "./assets/squareFruitTrolly3.jpg";
import Zoomfruittrolley from "./assets/Zoomfruittrolley.jpg";

// round cloth stand
import RoundClothStand1 from "./assets/RoundClothStand1.jpg";
import RoundClothStand2 from "./assets/Roundclothstand1zoom.jpg";
import RoundClothStand3 from "./assets/RoundClothStandcloseview.jpg";
import RoundClothStand4 from "./assets/RoundclothstandRIGHTVIEW.jpg";

//multipurpose stand
import multiPurposeStand1 from "./assets/MultiPurposeStand1.jpg";
import multiPurposeStand2 from "./assets/Multipurposestand1demo.jpg";
import multiPurposeStand3 from "./assets/Multipurposestand1demo2.jpg";

//steel stand//
import SteelStand1 from "./assets/SteelStand1.jpg";
import SteelStandcloseview from "./assets/SteelStandcloseview.jpg";
import SteelStand2 from "./assets/SheetStand1.png";

// Squaure Basket //
import squarebacketHomepage from "./assets/SquarebacketHomepage.jpg";
import Sqaurebasket from "./assets/Squarebasket.jpg";
import Sqaurebasket1upperview from "./assets/sqaurebasket1upperview.jpg";
import Sqaurebasket1sideview from "./assets/Sqaurebasket1sideview.jpg";
import Sqaurebasket1handle from "./assets/Sqaurebasket1handle.jpg";
import Sqaurebasketzoombottom from "./assets/sqaurebasket1zoombotton.jpg";

// Steel Fruit Basket//
import roundfruitbasket1 from "./assets/roundfruitbasket1.jpg";
import roundfruitbasket1homepage from "./assets/roundfruitbasket1homepage.jpg";
import miniFruitBasket from "./assets/miniFruitBasket.jpg";
import Sqaurefruitbasket2 from "./assets/sqaurefruitbasket2.png";
import fruitbasketnew from "./assets/fruitbasketnew.png";
import basketround from "./assets/basketround.jpg";

//Square cloth stand//
import SquareClothStand1Details from "./assets/SqaureClothStand1Details.jpg";
import SquareClothStand1 from "./assets/SqaureClothStand1.jpg";
import SquareClothStand from "./assets/SquareClothStand.png";

//Square shelf sttand
import squareShelfStand from "./assets/SquareShelfPipeStand.png";

const products = [
  {
    id: 1,
    title: "Square Pipe Stand",
    category: "Sheet Stand",
    sizes: ["24x24", "30x24", "30x30", "30x36", "39x30", "39x36", "48x36"],
    image: [SquarePipeStand2, SquarePipeStand1],
    description:
      "The Deluxe Sheet Stand offers a durable, rust-resistant, and stylish storage solution. Crafted from premium stainless steel, it’s perfect for organizing sheets and kitchen essentials with strength and elegance.",
  },
  {
    id: 2,
    title: "Sheet Stand",
    category: "Stand",
    sizes: [
      "15x15",
      "18x18",
      "18x24",
      "24x18",
      "24x24",
      "30x24",
      "30x30",
      "39x30",
      "39x36",
      "48x30",
      "48x36",
      "60x30",
      "60x36",
      "72x30",
      "72x36",
    ],
    image: [SteelStand2, SteelStandcloseview],
    description:
      "This is a multi-tier stainless steel kitchen rack, designed for efficient storage and organization of kitchen essentials. It features multiple shelves and compartments to hold plates, bowls, utensils, and other kitchen accessories. The sturdy metal frame ensures durability, while the open wire design allows for proper ventilation and easy access. Ideal for modern kitchens, this rack helps maximize space and keep everything neatly arranged.",
  },
  {
    id: 3,
    title: "Square cloth stand",
    category: "cloth stand ",
    sizes: ["Small", "Big"],
    image: [SquareClothStand1Details, SquareClothStand, SquareClothStand1],
    description:
      "A sturdy and rust-resistant** square steel stand designed for **efficient drying and organizing of clothes**. Its **durable stainless steel frame** ensures stability, while the sleek design makes it ideal for both indoor and outdoor use. **Made in India.",
  },

  {
    id: 4,
    title: "Delux Steel Stand",
    category: "Steel Stand",
    sizes: [
      "24x24",
      "30x24",
      "30x30",
      "30x36",
      "39x30",
      "39x36",
      "48x36",
      "60x36",
      "72x36",
    ],
    image: [SteelStand1, DeluxSteelStand1, DeluxSteelStand3],
    description:
      "The Deluxe Sheet Stand offers a durable, rust-resistant, and stylish storage solution. Crafted from premium stainless steel, it’s perfect for organizing sheets and kitchen essentials with strength and elegance.", // ✅ Corrected
  },
  {
    id: 5,
    title: "Square Fruit Trolley",
    category: "Fruit Basket",
    sizes: ["Small", "Big"],
    image: [
      SquareFruitTrolly5,
      SquareFruitTrolley2,
      SquareFruitTrolley1,
      SquareFruitTrolley3,
      Zoomfruittrolley,
    ],
    description: [
      "Keep your kitchen organized with our 2-step, 3-step, and 4-step stainless steel trolleys. Designed for durability, they feature a polished, rust-resistant finish and a sturdy fixed-height frame. Ideal for storing fruits, vegetables, and kitchen essentials with easy access",
    ],
  },
  {
    id: 6,
    title: "Round Cloth Stand",
    category: "Cloth Stand",
    types: ["Small", "Big"],
    image: [
      RoundClothStand1,
      RoundClothStand2,
      RoundClothStand3,
      RoundClothStand4,
    ],
    description: "Round cloth stand perfect for drying clothes.",
  },
  // New Products

  {
    id: 7,
    title: "Stainless Steel Fruit Basket",
    category: "Baskets",
    sizes: ["Round basket", "Curve basket"],
    image: [
      roundfruitbasket1homepage,
      miniFruitBasket,
      roundfruitbasket1,
      Sqaurefruitbasket2,
      fruitbasketnew,
      basketround,
    ],
    description:
      "Organize your fruits in style with our small round and square stainless steel baskets. Designed for durability and elegance, these baskets feature a rust-resistant, polished finish with an open structure for better air circulation, keeping fruits fresh for longer. Perfect for home and commercial use.", // ✅ Fixed description format
  },
  {
    id: 8,
    title: "Multipurpose Stand",
    category: "Basket Stand",
    sizes: ["2 Step", "3 Step", "4 Step"],
    image: [multiPurposeStand1, multiPurposeStand2, multiPurposeStand3],
    description:
      "Versatile stand with multiple baskets for kitchen essentials.",
  },
  {
    id: 9,
    title: "SQUARE PIPE SHELF STAND",
    category: "Basket",
    sizes: [
      "15 X 15",
      "18 X 18",
      "18 X 24",
      "24 X 18",
      "24 X 24",
      "30 X 24",
      "30 X 30",
      "39 X 30",
      "39 X 36",
      "48 X 36",
      "60 X 36",
      "72 X 36",
    ],
    image: [squareShelfStand],
    description: [
      "A durable and rust-resistant square steel basket, perfect for storing washed utensils. Designed with high-quality stainless steel, it ensures proper drainage and ventilation, keeping your kitchen organized and hygienic. Ideal for homes and commercial kitchens.",
    ],
  },
  {
    id: 10,
    title: "SquareBasket",
    category: "Basket",
    sizes: ["Medium", "Large"],
    image: [
      squarebacketHomepage,
      Sqaurebasket,
      Sqaurebasket1sideview,
      Sqaurebasket1upperview,
      Sqaurebasket1handle,
      Sqaurebasketzoombottom,
    ],
    description: [
      "A durable and rust-resistant square steel basket, perfect for storing washed utensils. Designed with high-quality stainless steel, it ensures proper drainage and ventilation, keeping your kitchen organized and hygienic. Ideal for homes and commercial kitchens.",
    ],
  },
];

export default products;
