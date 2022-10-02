import React, { useEffect, useState } from "react";
import "./ListOfPhones.css";
import Phone from "./Phone.js";
import SkeletonPhone from "./SkeletonPhone.js";
import getPhones from "../services/getPhones";

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
