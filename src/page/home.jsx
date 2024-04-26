import image1 from "../assets/image1.png";
import CardSellers from "../components/card/sellers";
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image2 from "../assets/image2.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"

import imageCarrousel1 from "../assets/Carrousel/image1.png"
import imageCarrousel2 from "../assets/Carrousel/image2.png"
import imageCarrousel3 from "../assets/Carrousel/image3.png"
import imageCarrousel4 from "../assets/Carrousel/image4.png"
import imageCarrousel5 from "../assets/Carrousel/image5.png"
import imageCarrousel6 from "../assets/Carrousel/image6.png"
import imageCarrousel7 from "../assets/Carrousel/image7.png"
import imageCarrousel8 from "../assets/Carrousel/image8.png"
import imageCarrousel9 from "../assets/Carrousel/image9.png"
import imageCarrousel10 from "../assets/Carrousel/image10.png"
import imageCarrousel11 from "../assets/Carrousel/image11.png"
import imageCarrousel12 from "../assets/Carrousel/image12.png"

import "../scss/Home.scss"
import Carrousel from "../components/carrousel/carrousel";



export default function Home() {

      const items = [
        {
          image: imageCarrousel1,
          name: 'Lorem',
          price: '9.99€'
        },
        {
          image: imageCarrousel2,
          name: 'Lorem',
          price: '6.99€'
        },
        {
          image: imageCarrousel3,
          name: 'Lorem',
          price: '19.99€'
        },
        {
          image: imageCarrousel4,
          name: 'Lorem',
          price: '29.99€'
        },
        {
            image: imageCarrousel5,
            name: 'Lorem',
            price: '9.99€'
          },
          {
            image: imageCarrousel6,
            name: 'Lorem',
            price: '6.99€'
          },
          {
            image: imageCarrousel7,
            name: 'Lorem',
            price: '19.99€'
          },
          {
            image: imageCarrousel8,
            name: 'Lorem',
            price: '29.99€'
          },
          {
            image: imageCarrousel9,
            name: 'Lorem',
            price: '9.99€'
          },
          {
            image: imageCarrousel10,
            name: 'Lorem',
            price: '6.99€'
          },
          {
            image: imageCarrousel11,
            name: 'Lorem',
            price: '19.99€'
          },
          {
            image: imageCarrousel12,
            name: 'Lorem',
            price: '29.99€'
          },
      ];


    return(
        <div>
            <div id="Part1">
                <div className="image1">
                    <img src={image1} alt="image1" />
                </div>
                <div className="content">
                    <h1>Égayez vos pieds, enfilez la couleur !</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium pharetra odio non volutpat. 
                        Aliquam mattis faucibus ipsum. Proin ultrices purus sit amet tellus egestas.
                    </p>
                    <div className="button">
                        <button>En savoir plus </button>
                        <button>Rejoignez nous</button>
                    </div>
                </div>
            </div>
            <div id="Part2">
                <div className="content">
                    <h1>Best sellers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium pharetra odio non volutpat. 
                        Aliquam mattis faucibus ipsum. Proin ultrices purus sit amet tellus egestas.
                    </p>
                </div>
                <div className="Card">
                    <CardSellers cover={image4} title="Notre collections Bieres" content="35 Paires de chaussette dans l'univers du Houblon"/>
                    <CardSellers cover={image3} title="Notre collections Gourmand" content="68 Paires de chaussette avocats, donuts, pommes, fromages, cerises… Et bien d’autres encore !"/>
                    <CardSellers cover={image5} title="Notre collections Green" content="35 Paires de chaussette invitant à célébrer le monde naturel."/>
                    <CardSellers cover={image2} title="Notre collections Japon" content="35 Paires de chaussette entre modernité et traditions"/>
                    <CardSellers cover={image6} title="Notre collections Tech" content="68 Paires de chaussette en rapport avec le monde de la tech vous avez déjà entendu parlez des web socket"/>
                    <CardSellers cover={image7} title="Notre collections Musique" content="35 Paires de chaussette en rapport avec les plus grand artiste"/>
                </div>

            </div>
            <div id="Part3">
                <h1>Dernières chances</h1>
                <Carrousel items={items}/>
            </div>
        </div>
    )
}