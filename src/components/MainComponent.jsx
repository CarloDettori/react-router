import { useState, useEffect } from "react";

import showPostComponent from "./ShownPostComponent";
import CardComponent from "./CardComponent";
import axios from "axios"


// const bestPost = {
//     id: 2,
//     title: "Carlo lorem ipsum",
//     image: 'https://picsum.photos/600/400',
//     content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
//     tags: ["js", "css"],
// };

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
    console.log(publishedPosts)
    function deleteItem(id) {
        setPublishedPosts(publishedPosts.filter((el) => el.id !== id))
    }
    function showPost(id) {
        setPublishedPosts(publishedPosts.filter((el) => el.id === id))
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

            {/* <aside>
                <CardComponent key={`best-card-${bestPost.id}`} element={bestPost} />
            </aside> */}
        </>
    )
}

export default MainComponent;