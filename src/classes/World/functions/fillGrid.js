import createClass from "../../../functions/createClass";
import setInitCamp from "./setInitCamp";

const fillGrid = (size) => {
    let array = [];

    for(let i = 0; i < size; i++){
        let row = [];
        for(let j = 0; j < size; j++){
            row.push(createClass('Land', [i, j]));
        }
        array.push(row);
    }

    const result = setInitCamp(array);
    return result;
}

export default fillGrid;