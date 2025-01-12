function ButtonInfoComponent({ showPost, post }) {
    return (<>
        <button id="button-info" type="button" className="btn btn-warning" onClick={() => showPost(post)}>Leggi di piu</button>
    </>
    )
}

export default ButtonInfoComponent;