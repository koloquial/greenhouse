const Structure = ({ tile, setFlip }) => {

    return (
        <div className={`${tile.parentType}-info`}>
            <div style={{float: 'right', display: 'inline-block'}}>
                <button  onClick={() => setFlip(false)}>Back</button>
            </div>

            <div style={{float: 'left', display: 'inline-block'}}>
                <h2>{tile.subType}</h2>
            </div>

            <br /><br />
            <hr />

            content
        </div>
    )

}

export default Structure;