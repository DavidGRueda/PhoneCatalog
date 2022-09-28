import React from 'react';
import './Phone.css';

function Phone({color, id, imageFileName, name, manufacturer, price}){

    const img_path = `/assets/${imageFileName}`;
    const more_info_path = `/phones/${id}`; 

    return(
        <div className='card'>
            <div className='img-cont'>
                <img src={img_path} alt=''/>
            </div>             
            <div className='info-cont'>
                <div className='main-info'>
                    <div className='name-manuf'>
                        <h2>{name}</h2>
                        <p>{manufacturer}</p>
                    </div>
                    <div className='price'>
                        <h2>{price}$</h2>
                    </div>
                    
                </div>
                <div className='lower-bar'>
                    <i class="fa-solid fa-droplet"></i> 
                    <p>{color}</p>
                    <a href={more_info_path}>
                        <i className="fa-solid fa-circle-info"></i>
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Phone;