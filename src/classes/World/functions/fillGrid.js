import createClass from "../../../functions/createClass";

const fillGrid = (size) => {
    let array = [];
    for(let i = 0; i < size; i++){
        let row = [];
        for(let j = 0; j < size; j++){
            row.push(createClass('Land'));
        }
        array.push(row);
    }
    return array;
}

export default fillGrid;