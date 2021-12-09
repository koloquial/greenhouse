const Unit = ({ tile }) => {
    

    if(tile.type === 'Unit'){

        return (
            <div className={`${tile.parentType}-resource`}>
               &nbsp;
            </div> 
        )

    }else{
        return (<></>)
    }
}

export default Unit;
