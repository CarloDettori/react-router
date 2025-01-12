import { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import axios from "axios"


const postsUrl = "http://localhost:3000"
function MainComponent() {
    let [publishedPosts, setPublishedPosts] = useState([])
    useEffect(() => {
        getData()
    }, []);
    //console.log(publishedPosts)

    function getData() {
        axios
            .get(postsUrl + "/posts/")
            .then((res) => {
                //console.log(res.data)
                setPublishedPosts(res.data.filter((post) => {
                    if (post.published == true) {
                        return post;
                    }
                }))
            })
            .catch((error) => {
                console.log("error")
            })
            .finally(() => {

            })
    }
    //console.log(publishedPosts)
    function deleteItem(id) {
        setPublishedPosts(publishedPosts.filter((el) => el.id !== id));
    }
    function showPost(id) {
        let focusPost = publishedPosts.filter((el) => el.id === id)
        //console.log(focusPost)
    }


    return (
        <>
            <main>
                <div className="d-flex flex-wrap">
                    {publishedPosts.map((post) => (
                        <CardComponent key={`card-${post.id}`} el={post} onDelete={deleteItem} showPost={showPost} />
                    ))}

                </div>
            </main>
        </>
    )
}

export default MainComponent;