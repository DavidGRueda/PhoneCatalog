import React, { useEffect, useState } from 'react';

const INITIAL_PHONES = [
    {
        "id": 0,
        "name": "iPhone 7",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur.",
        "color": "black",
        "price": 769,
        "imageFileName": "IPhone_7.png",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
    }, 
    {
        "id": 1,
        "name": "iPhone 8",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur.",
        "color": "black",
        "price": 769,
        "imageFileName": "IPhone_7.png",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
    }];

function ListOfPhones(){
    const [loading, setLoading] = useState(false); //For showing placeholders. 
    const [phones, setPhones] = useState([])  //Change later to call API

    useEffect(()=>{
        setLoading(true);
        console.log("Set loading -> True");
        setTimeout(()=>{
            setPhones(INITIAL_PHONES);  //Later, call API. 
            setLoading(false);
        }, 2000);
        
    }, []);

    if(loading){
        //TODO: return placeholders
        console.log("La página se está cargando");
        return (<h1>CARGANDO</h1>);
    } else {
        //TODO: return one Phone component for each of the phones recieved.
        return  (                  
            phones.map(({id, name, manufacturer}) => {
                return(
                    <div className='phone'>
                        <h2>{id}</h2>
                        <p>{name}</p>
                        <p>{manufacturer}</p>
                    </div>  
                );                      
            })              
        );
    }
}


export default ListOfPhones;