import React from "react"

export default function Card(props){

    const {Img,rating,reviewCount,location, title, price,openSpots} = props

    let cardBarge 
    if(openSpots === 0){
        cardBarge="SOLD OUT";
    }else if(location === "Online"){
        cardBarge="ONLINE";
    }

    return(
        <div className="card">
          {cardBarge && <div className="card--barge">{cardBarge}</div>}
            <img src={`../images/${Img}`} className="card--image" alt="logo" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>

    )
}




//{  <div className="card--barge">{cardBarge}</div>} -->