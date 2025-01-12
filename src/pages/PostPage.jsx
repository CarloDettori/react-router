import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import CardComponent from "../components/CardComponent.jsx";

const apiUrl = "http://localhost:3000";
export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(getData, [id]);

    function getData() {
        axios
            .get(apiUrl + "/posts/" + id)
            .then((res) => {
                //console.log(res);
                setPost(res.data.item);
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
                <CardComponent

                    id={post.id}
                    title={post.title}
                    image={post.image}
                    content={post.content}
                    tags={post.tags.join(", ")}
                    published={post.published}

                />
            )}
        </>
    );
}