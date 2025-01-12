function ButtonDeleteComponent({ onDelete, post }) {
    return (<>
        <button id="button-detete" type="button" className="btn btn-warning" onClick={() => onDelete(post)}>Cancella</button>
    </>
    )
}

export default ButtonDeleteComponent;