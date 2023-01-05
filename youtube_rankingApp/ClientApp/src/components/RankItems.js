import React, { useState, useEffect } from 'react';

const RankItems = () => {
    
    const [items, setItmes] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return resuls.json();
            })
            .then(data => {
                setItems(data);
            })
    }, []);

    return (
        ¨<main>
            {
                (items != null) ? items.map(() => <h3>{ item.title }</h3>) : <div>Loading...</div>
             }
        </main>
        )
}

export default RankItems;