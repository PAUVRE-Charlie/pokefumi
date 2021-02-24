import React from 'react'
import PageLink from './pageLink'

export default function Header() {
    return (
        <div className="header">
            <PageLink link="" text="Accueil"/>
            <PageLink link="connexion" text="Connection"/>
        </div>
    )
}
