import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const CardCharacter = () => {
    const { store, actions } = useContext(Context);


    return (
        <div>
            <h3>Aca se muestran los personajes</h3>
            <div>
            <ul>
                    {store.characters.map((character, index) => (
                        <li key={index}>
                            <p><strong>Nombre:</strong> {character.name}</p>
                            <p><strong>Altura:</strong> {character.height}</p>
                            <p><strong>Color de cabello:</strong> {character.hair_color}</p>
                            <p><strong>Color de piel:</strong> {character.skin_color}</p>
                            <p><strong>Color de ojos:</strong> {character.eye_color}</p>
                            <p><strong>Año de nacimiento:</strong> {character.birth_year}</p>
                            <p><strong>Género:</strong> {character.gender}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
