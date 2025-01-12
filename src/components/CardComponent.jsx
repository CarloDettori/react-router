import React from 'react';

import ButtonDeleteComponent from "./ButtonDeleteComponent";
import ButtonInfoComponent from "./ButtonInfoComponent";


function CardComponent({ el, onDelete, showPost }) {

    return (
        <div className="card" >
            <img src={el.image} alt="600x400img" />
            <div className="info">
                <div className="d-flex">
                    <h3>{el.title}</h3>
                    <ul className="d-flex">
                        {el.tags.map((tag) => {
                            <li className="post-tags" key={`tags-${tag}`}>
                                {tag}
                            </li>
                        })}
                    </ul>
                </div>
                <p>{el.content}</p>
                <ButtonInfoComponent showPost={showPost} id={el.id} />
                <ButtonDeleteComponent onDelete={() => onDelete(el.id)} />
            </div>
        </div>
    )
}

export default CardComponent;