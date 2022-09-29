import React, { useEffect, useState } from "react";
import "./ListOfPhones.css";
import Phone from "./Phone.js";
import SkeletonPhone from "./SkeletonPhone.js";
import getPhones from "../services/getPhones";

/* const INITIAL_PHONES = [
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
  }
]; */

const N_SKELETON = 5;

function ListOfPhones() {
  const [loading, setLoading] = useState(true); //Used to show placeholders.
  const [phones, setPhones] = useState([]); //Phone list retrieved from REST API.

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // False timeout to show placeholders
      getPhones().then((phones) => {
        setPhones(phones);
      });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    const skeletons = [];
    for (let i = 0; i < N_SKELETON; i++) {
      skeletons.push(<SkeletonPhone />);
    }
    return <ul className="list-phones">{skeletons}</ul>;
  } else {
    return (
      <ul className="list-phones">
        {phones.map(
          ({
            color,
            id,
            description,
            imageFileName,
            name,
            manufacturer,
            price,
            processor,
            ram,
            screen,
          }) => {
            return (
              <Phone
                color={color}
                id={id}
                description={description}
                key={id}
                name={name}
                imageFileName={imageFileName}
                manufacturer={manufacturer}
                price={price}
                processor={processor}
                ram={ram}
                screen={screen}
              />
            );
          }
        )}
      </ul>
    );
  }
}

export default ListOfPhones;
