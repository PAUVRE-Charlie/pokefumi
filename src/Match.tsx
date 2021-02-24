import React from 'react'
import images from './images'

export default function Match() {
    return (
        <div>
            <div id='areneContainer'>
                <img id='arene' src={images.arene.src} alt="arene"/>
            </div>

            <div id='circleContainer'>
                
                    <a className='menuContainer' href="page1"><p>Choisir son pokémon</p><img id='circle' src={images.circle.src} alt="circle"/></a>
                
                    <a className='menuContainer' href="page2">Match en cours<br/><img id='circle' src={images.circle.src} alt="circle"/></a>
               
                    <a className='menuContainer' href="page">Résultats<br/><img id='circle' src={images.circle.src} alt="circle"/></a>
               
            </div>

            <div className="informationContainer" style={{marginTop:'25vh'}}>
                <p className="emphasisesInformation" >La partie à commencer il y a 2min</p>
            </div>
            <div className="informationContainer" style={{marginTop:'35vh'}}>
                <p className="emphasisesInformation" >Round en cours : 2</p>
            </div>
            <div className="informationContainer" style={{marginTop:'40vh'}}>
                <p className="emphasisesInformation" >Carapuce</p>
                <p className="emphasisesInformation" >Pika</p>
            </div>
            <div className="pokemonContainer">
                <img src={images.carapuce.src} alt="carapuce"/>
                <img src={images.logo.src} alt="pika"/>
            </div>
            
        </div>
    )
}
