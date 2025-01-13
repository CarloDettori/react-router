import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import CardComponent from "../components/CardComponent.jsx";

const apiUrl = "http://localhost:3000";
export default function PostPage() {
    const { id } = useParams();
    console.log(id);

    const [post, setPost] = useState(null);

    useEffect(getData, [id]);


    function getData() {
        axios
            .get(apiUrl + "/posts/" + id)
            .then((res) => {
                console.log(res);
                setPost(res.data.onePost);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finally");
            });
    }

    return (
        <>

            {post && (
                <article>
                    <h3>{post.title}</h3>
                    <img src={post.image} alt="600x400img" />
                    <p>{post.content}</p>
                </article>
            )}
        </>
    );
}