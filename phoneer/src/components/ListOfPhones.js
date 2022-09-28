import React, { useEffect, useState } from 'react';
import './ListOfPhones.css';
import Phone from './Phone.js';

const INITIAL_PHONES = [
    {
        "id": 0,
        "name": "iPhone 7",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur.",
        "color": "black",
        "price": 769,
        "imageFileName": "IPhone_7.jpg",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
    }, 
    {
        "id": 1,
        "name": "iPhone 8",
        "manufacturer": "Apple",
        "description": "lore ipsum dolor sit amet consectetur.",
        "color": "black",
        "price": 769,
        "imageFileName": "IPhone_8.jpg",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
    }];

function ListOfPhones(){
    const [loading, setLoading] = useState(true); //Used to show placeholders. 
    const [phones, setPhones] = useState([])  //Phone list retrieved from REST API. 

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            //getPhones().then(phones => setPhones(phones))
            setPhones(INITIAL_PHONES);  //Later, call API. 
            setLoading(false);
        }, 2000);
        
    }, []);

    if(loading){
        //TODO: return placeholders
        return (<h1>CARGANDO</h1>);
    } else {
        //TODO: return one Phone component for each of the phones recieved.
        return  (     
            <ul className='list-phones'>
                {                   
                    phones.map(({id, name, manufacturer, imageFileName}) => {                       
                        return(
                            <Phone 
                                id={id}
                                key={id}
                                name={name}
                                imageFileName={imageFileName}
                                manufacturer={manufacturer}
                            />                            
                        );                      
                    })
                }
            </ul>             
                          
        );
    }
}


export default ListOfPhones;