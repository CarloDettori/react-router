function ButtonInfoComponent({ showPost }) {
    return (<>
        <button id="button-info" type="button" className="btn btn-warning" onClick={() => showPost()}>Leggi di piu</button>
    </>
    )
}

export default ButtonInfoComponent;