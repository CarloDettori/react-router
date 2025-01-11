function showPostComponent() {

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
        </div>
    )

}

export default showPostComponent;