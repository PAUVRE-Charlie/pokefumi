import React from 'react'
import images from './images'

export default function Match() {
    return (
        <div>
            <div id='areneContainer'>
                <img id='arene' src={images.arene.src} alt="arene"/>
            </div>
            <div className="pokemonContainer">
                <img src={images.carapuce.src} alt="carapuce"/>
                <img src={images.logo.src} alt="pika"/>
            </div>
        </div>
    )
}
