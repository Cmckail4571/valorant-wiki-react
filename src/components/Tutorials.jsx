import React from 'react';
// import '../index.css';
import Jett from '../media/images/Jett_images/VALORANT_Jett_Dark.jpg'
import Sova from '../media/images/Sova_images/VALORANT_Sova_Dark.jpg'
import Viper from '../media/images/Viper_images/VALORANT_Viper_Dark.jpg'
import Card from './Card.jsx'


function Tutorials(){
    return (
      <div>
        <h2 className="mt-4" id="tutorials">
          Valorant Tutorials
        </h2>
        <p className="text-muted">
          Watch tutorials from popular content creators and real players
        </p>
        <div className="row mt-3 g-3">
          <div className="col-sm">
            <Card
              img={Jett}
              name="Jet Super Dash Turtoial!"
              user="Immortal Player 360"
              text="Let me show you the best super dahses available to achieve crazy off angles and catch your enemies off guard every time!"
              link="https://youtu.be/fMjX6uthmBY"
            />
          </div>
          
          <div className="col-sm">
            <Card 
              img={Sova}
              name="Shock Darts Line Ups for Post Plant"
              user="TTV_SovaMain"
              text="Learn some of the best post plant shock darts for every situation."
              link="https://youtu.be/dt3KjicXzLo"
            />
          </div>
          
          <div className="col-sm">
            <Card 
              img={Viper}
              name="Learn the best snake bite line-ups"
              user="LineupLinda"
              text="Watch and learn how to line up the best defensive snake bites to secure the round in any clutch situation."
              link="https://youtu.be/LwFohkIN8Tk"
            />
          </div>
        </div>
      </div>
    );

}

export default Tutorials;