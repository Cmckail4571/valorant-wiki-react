import React from 'react';
// import '../index.css';

function Card(props){
    return(
        <div className="card bg-secondary h-100">        
            <img src={props.img} className="card-img" alt="..."/>
                <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-text">Author: {props.user}</h6>
                <p className="card-text">{props.text}</p>
                <a href={props.link} className="mt-auto align-self-start btn btn-dark">Watch Now</a>
            </div>
        </div>
    )
}

export default Card;