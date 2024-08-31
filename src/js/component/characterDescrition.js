import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDescription = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams(); // Obtiene el `uid` de la URL
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        // Verifica si `store.characters` ya tiene los datos
        const foundCharacter = store.characters.find((char) => char.uid === uid);
        if (foundCharacter) {
            setCharacter(foundCharacter);
        } else {
            // Si el personaje no está en el estado, podrías buscar o manejar el estado aquí
            console.log("Personaje no encontrado en el store.");
        }
    }, [store.characters, uid]);

    if (!character) {
        return <p>Cargando detalles del personaje...</p>;
    }

    return (
        <div>
            <h3>Descripción de personajes</h3>
            <div>
                <p><strong>Nombre:</strong> {character.name}</p>
                <p><strong>Altura:</strong> {character.height}</p>
                <p><strong>Color de cabello:</strong> {character.hair_color}</p>
                <p><strong>Color de piel:</strong> {character.skin_color}</p>
                <p><strong>Color de ojos:</strong> {character.eye_color}</p>
                <p><strong>Año de nacimiento:</strong> {character.birth_year}</p>
                <p><strong>Género:</strong> {character.gender}</p>
            </div>
        </div>
    );
};
