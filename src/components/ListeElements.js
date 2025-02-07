import React from 'react';

const ListeElements = () => {
    //Données
    const data = [
        "Liste des pays",
        "Fidji",
        "Finlande",
        "France",
        "Gabon",
    ]
        return (
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
        );
}  

export default ListeElements;