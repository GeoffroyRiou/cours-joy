import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Viewer = () => {

    // useParams permet de récupérer les paramètre dans l'url
    // Les paramètres sont définis dans les routes du Router sous la form :param 
    const params = useParams();

    const [imageData, setImageData] = useState(null);

    /*
        Use effect appelé au chargement du composant
        Ne sera appelé qu'une seule fois cas le tableau de dépendances est vide
    */
    useEffect(() => {

        // Vérification de l'existence de l'identifiant dans l'url
        // Si pas d'id, on arrête tout
        if (!params.id) return;

        // Appel du serveur pour récupérer les informations de l'image
        fetch(`http://127.0.0.1:8000/api/images/${params.id}`)
            .then((result) => result.json())
            .then((data => {
                if (data.image) {
                    // Mise à jour du state 
                    setImageData(data.image);
                }
            }))
    }, []); // [] -> tableau de dépendances


    return <div>

        <h2>Mes données</h2>
        {/* Si les données sont arrivées, on les affiche sinon, on affiche l'état de chargement */}
        {imageData ? <p>
            x : {imageData.x} y: {imageData.y}
        </p> : <p>Chargement...</p>}
    </div>

}

export default Viewer;