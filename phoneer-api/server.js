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
      "Accessibility features help people with disabilities get the most out of their new iPhone 7. With built-in support for vision, hearing, physical and motor skills, and learning and literacy, you can fully enjoy the world's most personal device",
    color: "Black",
    price: 170,
    imageFileName: "IPhone_7.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "iPhone 8",
    manufacturer: "Apple",
    description:
      "One of its finest features is its ability to shoot 4K video at 60 frames per second. The iPhone 8 is one of the few smartphones capable of this",
    color: "Gold",
    price: 220,
    imageFileName: "IPhone_8.jpg",
    screen: "6,7 inch AMOLED",
    processor: "A11 Bionic",
    ram: 2,
  },
  {
    id: 2,
    name: "Samsung Z Flip4",
    manufacturer: "Samsung",
    description:
      "The era of planning looks around your phone is over. Small but mighty when folded, Galaxy Z Flip4 is a compact full-sized smartphone, and just the right size to slip in a pocket when it's time to slay",
    color: "Bora Purple",
    price: 1143,
    imageFileName: "Samsung_Z_Flip.jpg",
    screen: "6,7 inch IPS",
    processor: "8-core CPU",
    ram: 8,
  },
  {
    id: 3,
    name: "Realme GT 2 Pro",
    manufacturer: "Realme",
    description:
      "First high-end Realme, with OnePlus9 Pro camera sensor and 2K Gorilla Glass Victus screen",
    color: "Green / White",
    price: 749,
    imageFileName: "Realme-GT-2-Pro.jpg",
    screen: "6,7 inch LTPO 2.0",
    processor: "Snapdragon 8 Gen 1",
    ram: 12,
  },
  {
    id: 4,
    name: "OnePlus Nord CE 2",
    manufacturer: "OnePlus",
    description:
      "The new OnePlus Nord CE 2 5G brings back the essence that is expected in a Nord: a cheap mobile with awesome specifications",
    color: "Blue",
    price: 359,
    imageFileName: "OnePlus_Nord_CE2.jpg",
    screen: "6,43 inch AMOLED",
    processor: "MediaTek Dimensity 900",
    ram: 8,
  },
];

app.get("/phones", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(SAVED_PHONES);
});

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});
