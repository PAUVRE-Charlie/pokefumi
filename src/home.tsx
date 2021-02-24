import React from 'react'
import PageLink from './pageLink'
import images from './images';

export default function home() {
    return (
        <div className="homePage">
            <img src={images.logo.src} className="App-logo" alt="logo" />
        
            <h1>Accueil</h1>
            <div className="listPages">
                <PageLink link="connexion" text="Connection"/>
            </div>
        </div>


    )


}


