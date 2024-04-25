import { useState } from "react";
import arrowright from "../../assets/Carrousel/arrowright.png"
import arrowleft from "../../assets/Carrousel/arrowleft.png"
import "../../scss/carrousel.css"

export default function Carrousel({items}) {

    const [currentImageindex, setCurrentImageIndex] = useState(0)

    const nextImages = () =>{
        setCurrentImageIndex((currentImageindex + 4) % items.length)
    }

    const previousImages = () =>{
        setCurrentImageIndex((currentImageindex - 4 + items.length) % items.length)
    }

    return (
        <div className="Carrousel">
            <button onClick={previousImages}><img src={arrowleft} alt="arrowright" /></button>
            <div className="Content">
            {items.slice(currentImageindex, currentImageindex + 4).map((item, index) => (
                
                <div className="items"> 
                    <img
                        key={index}
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="prix">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                    
                </div>
            ))}
                <div className="Pagination">
                {Array.from({ length: Math.ceil(items.length / 4) }).map((_, index) => (
                    <span
                    key={index}
                    style={{
                        backgroundColor: index === currentImageindex / 4 ? '#555555' : '#EDEDED',
                    }}
                    />
                ))}
                </div>
            </div>
            <button onClick={nextImages}><img src={arrowright} alt="arrowright" /></button>
        </div>
    )
}