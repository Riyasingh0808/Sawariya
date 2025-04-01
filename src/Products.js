import DeluxeSteelStand1 from "./assets/DulexSteelStand1.jpg";
import DeluxeSteelStand2 from "./assets/DulexSteelStand1sizeview.jpg";
import DeluxeSteelStand3 from "./assets/DulexSteelStandbackview2.jpg";
import DeluxeSteelStand4 from "./assets/DulexSteelStandzoomview2.jpg";

//square pipe stand
import SquarePipeStand1 from "./assets/SquarePipeStand.png";
import SquarePipeStand2 from "./assets/SquarePipeStand.webp";

// square fruit trolley
import SquareFruitTrolley1 from "./assets/squareFruitTrolly1.jpg";
import SquareFruitTrolley2 from "./assets/squareFruitTrolly2.jpg";
import SquareFruitTrolley3 from "./assets/squareFruitTrolly3.jpg";

// round cloth stand
import RoundClothStand1 from "./assets/RoundClothStand1.jpg";
import RoundClothStand2 from "./assets/Roundclothstand1zoom.jpg";
import RoundClothStand3 from "./assets/RoundClothStandcloseview.jpg";
import RoundClothStand4 from "./assets/RoundclothstandRIGHTVIEW.jpg";

//multipurpose stand
import multiPurposeStand1 from "./assets/MultiPurposeStand1.jpg";
import multiPurposeStand2 from "./assets/Multipurposestand1demo.jpg";
import multiPurposeStand3 from "./assets/Multipurposestand1demo2.jpg";

const products = [
  {
    id: 1,
    title: "Delux Sheet Stand",
    category: "Sheet Stand",
    sizes: ["24x24", "30x24", "30x30", "30x36", "39x30", "39x36", "48x36"],
    image: [
      DeluxeSteelStand1,
      DeluxeSteelStand2,
      DeluxeSteelStand3,
      DeluxeSteelStand4,
    ],
    description: "A premium quality sheet stand available in multiple sizes.",
  },
  {
    id: 2,
    title: "Square Pipe Stand",
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
    image: [SquarePipeStand1, SquarePipeStand2],
    description:
      "This is a multi-tier stainless steel kitchen rack, designed for efficient storage and organization of kitchen essentials. It features multiple shelves and compartments to hold plates, bowls, utensils, and other kitchen accessories. The sturdy metal frame ensures durability, while the open wire design allows for proper ventilation and easy access. Ideal for modern kitchens, this rack helps maximize space and keep everything neatly arranged.",
  },
  {
    id: 3,
    title: "Square Pipe Shelf Stand",
    category: "Shelf Stand",
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
      "48x36",
      "60x36",
      "72x36",
    ],
    image: [],
    description: "Multi-purpose shelf stand with a sturdy square pipe design.",
  },
  {
    id: 4,
    title: "Steps Stand",
    category: "Steps Stand",
    sizes: ["2 Steps", "3 Steps", "4 Steps"],
    image: "",
    description: "Available in 2, 3, and 4 step configurations.",
  },
  {
    id: 5,
    title: "Square Fruit Trolley",
    category: "Fruit Basket",
    sizes: ["Small", "Big"],
    image: [SquareFruitTrolley1, SquareFruitTrolley2, SquareFruitTrolley3],
    description: "Multipurpose trolley for storing fruits and vegetables.",
  },
  {
    id: 6,
    title: "Round Cloth Stand",
    category: "Cloth Stand",
    sizes: ["Small", "Big"],
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
    title: "Kitchen Utility Rack",
    category: "Rack",
    sizes: ["2 Shelves", "3 Shelves", "4 Shelves"],
    image: "/images/kitchen-utility-rack.jpg",
    description:
      "Compact and sturdy kitchen utility rack for organized storage.",
  },
  {
    id: 8,
    title: "Multipurpose Basket Stand",
    category: "Basket Stand",
    sizes: ["Single", "Double", "Triple"],
    image: [multiPurposeStand1, multiPurposeStand2, multiPurposeStand3],
    description:
      "Versatile stand with multiple baskets for kitchen essentials.",
  },
  {
    id: 9,
    title: "Adjustable Dish Rack",
    category: "Dish Rack",
    sizes: ["Small", "Medium", "Large"],
    image: "/images/adjustable-dish-rack.jpg",
    description:
      "Adjustable dish rack to keep your plates and cutlery organized.",
  },
];

export default products;
