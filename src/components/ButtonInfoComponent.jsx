import { Link } from "react-router-dom";
import React from 'react';

function ButtonInfoComponent({ showPost, post }) {
    return (<>
        <Link id="button-info" type="button" className="btn btn-warning" onClick={() => showPost(post)}>Leggi di piu</Link>
    </>
    )
}

export default ButtonInfoComponent;