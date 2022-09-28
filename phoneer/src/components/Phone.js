import React from 'react';
import './Phone.css';

function Phone({id, name, manufacturer, imageFileName}){
    const img_path = `/assets/${imageFileName}`;
    console.log(img_path);

    return(
        <div className='card'>
            <div className='img-cont'>
                <img src={img_path} alt=''/>
            </div>             
            <div className='info-cont'>
                <h4>{name}</h4>
                <p>{manufacturer}</p>
            </div>
        </div>




    /*
        { <li className='phone'>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{manufacturer}</p>
         }</li>*/  
    );
}

export default Phone;