import Clearing from "../../Resource/Clearing";
import createClass from "../../../functions/createClass";

const fillGrid = (size, subType, id) =>{
    let array = [];
    for(let i = 0; i < size; i++){
        let row = [];
        for(let j = 0; j < size; j++){
            if(Math.floor(Math.random() * 50) % (Math.floor(Math.random() * 9) + 4) > 0){
                 //push clearing
                row.push(new Clearing(subType, [i, j]));
            }else{
                //push resource
                row.push(createClass(subType, [i, j], id));
            }
        }
        array.push(row);
    }
    return array;
}

export default fillGrid;