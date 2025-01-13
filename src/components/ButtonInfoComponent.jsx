import { Link } from "react-router-dom";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonInfoComponent({ showPost, id }) {
    const history = useNavigate();

    const handleClick = () => {
        history.push(`/post/${id}`);
        return (<>
            <Link id="button-info" type="button" className="btn btn-warning" onClick={handleClick}>Leggi di piu</Link>
        </>
        )
    }
}
export default ButtonInfoComponent;