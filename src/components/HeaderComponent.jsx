"use strict"

import { NavLink } from "react-router-dom";

function HeaderComponent() {
    return (<>
        <header id="header">
            <h1>Il mio blog</h1>
            <ul className="d-flex">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Tutti i Post</NavLink>
                </li>
                <li>
                    <NavLink to="/us">Chi Siamo</NavLink>
                </li>
                <li>
                    <NavLink to="/form">Crea un post</NavLink>
                </li>
            </ul>
        </header>
    </>
    )
}

export default HeaderComponent;