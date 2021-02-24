import React from 'react';

export function Connection() {
    return (
      <div className="Connection">
        <header className="Connection-header">

        </header>
        <body>
            <form>
                <label>Nom d'utilisateur:</label>
                <input type="text" id="nom_utilisateur"></input>
                <label>Mot de passe:</label>
                <input type="text" id="mot_de_passe"></input>
            </form>
        </body>
      </div>
    );
  }