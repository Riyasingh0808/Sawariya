import deluxeSheetStand1 from "./assets/SteelStand1.jpg";
import deluxeSheetStand2 from "./assets/SteelStand2.jpg";
// import squarePipeStand from "./assets/SquarePipeStand.png";
import squarePipeStand from "./assets/SquarePipeStand.webp";
import squareShelfPipeStand from "./assets/SquareShelfPipeStand.png";
import squareFruitTrolly1 from "./assets/SquareFruitTrolly1.png";
import squareFruitTrolly2 from "./assets/SquareFruitTrolly1.png";
import squareFruitTrolly3 from "./assets/SquareFruitTrolly3.png";
import roundClothStand from "./assets/RoundClothStand.png";
import multiPurposeStand1 from "./assets/MultiPurposeStand1.png";
import multiPurposeStand2 from "./assets/MultiPurposeStand2.png";

const products = [
  {
    id: 1,
    title: "Delux Sheet Stand",
    category: "Sheet Stand",
    sizes: ["24x24", "30x24", "30x30", "30x36", "39x30", "39x36", "48x36"],
    image: [deluxeSheetStand1, deluxeSheetStand2],
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
    image: [squarePipeStand],
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
    image: [squareShelfPipeStand],
    description: "Multi-purpose shelf stand with a sturdy square pipe design.",
  },
  {
    id: 4,
    title: "Steps Stand",
    category: "Steps Stand",
    sizes: ["2 Steps", "3 Steps", "4 Steps"],
    image: "/images/steps-stand.jpg",
    description: "Available in 2, 3, and 4 step configurations.",
  },
  {
    id: 5,
    title: "Square Fruit Trolley",
    category: "Fruit Basket",
    sizes: ["Small", "Big"],
    image: [squareFruitTrolly1, squareFruitTrolly2, squareFruitTrolly3],
    description: "Multipurpose trolley for storing fruits and vegetables.",
  },
  {
    id: 6,
    title: "Round Cloth Stand",
    category: "Cloth Stand",
    sizes: ["Small", "Big"],
    image: [roundClothStand],
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
    image: [multiPurposeStand1, multiPurposeStand2],
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
