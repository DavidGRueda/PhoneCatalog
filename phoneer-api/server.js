const express = require("express");
const app = express();
const PORT = 3001;

// Create an array to save the phones
const SAVED_PHONES = [
  {
    id: 0,
    name: "iPhone 7",
    manufacturer: "Apple",
    description:
      "Las funcionalidades de accesibilidad ayudan a las personas con alguna discapacidad a aprovechar al máximo su nuevo iPhone 7. Con soporte integrado para visión, audición, habilidades motoras y físicas, y lectura, escritura y aprendizaje, puedes disfrutar como nunca del dispositivo más personal del mundo",
    color: "Black",
    price: 769,
    imageFileName: "IPhone_7.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "iPhone 8",
    manufacturer: "Apple",
    description: "lore ipsum dolor sit amet consectetur.",
    color: "Gold",
    price: 1339,
    imageFileName: "IPhone_8.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 2,
    name: "Samsung Z Flip",
    manufacturer: "Samsung",
    description: "lore ipsum dolor sit amet consectetur.",
    color: "Purple",
    price: 685,
    imageFileName: "Samsung_Z_Flip.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 3,
    name: "Samsung Z Flip4",
    manufacturer: "Samsung",
    description: "lore ipsum dolor sit amet consectetur.",
    color: "Purple",
    price: 685,
    imageFileName: "Samsung_Z_Flip.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 4,
    name: "Samsung Z Flip7",
    manufacturer: "Samsung",
    description: "lore ipsum dolor sit amet consectetur.",
    color: "Purple",
    price: 685,
    imageFileName: "Samsung_Z_Flip.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
];

app.get("/getPhones", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(SAVED_PHONES);
});

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});
