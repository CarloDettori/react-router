import React from 'react';

import ButtonDeleteComponent from "./ButtonDeleteComponent";
import ButtonInfoComponent from "./ButtonInfoComponent";


function CardComponent({ el, onDelete, showPost }) {

    // let template = [];
    // props.posts.map((element, index) => {
    //     // let postTags = [];

    //     //console.log(postTags)
    //     // template.push()
    // })
    //console.log(template)

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
                <ButtonInfoComponent showPost={() => showPost(el.id)} />
                <ButtonDeleteComponent onDelete={() => onDelete(el.id)} />
            </div>
        </div>
    )
}

export default CardComponent;