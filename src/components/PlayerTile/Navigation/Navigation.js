const Navigation = ({ setActive }) => {

    return (
        <div className='tab'>
            <button onClick={() => setActive('Resources')}><i className="fas fa-gem" title='Resources'></i></button>
            <button onClick={() => setActive('Structures')}><i className="fas fa-campground" title='Structures'></i></button>
            <button onClick={() => setActive('Units')}><i className="fas fa-male" title='Units'></i></button>
        </div>
    )
}

export default Navigation;