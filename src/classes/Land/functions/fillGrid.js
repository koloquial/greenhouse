import Clearing from "../../Resource/Clearing";
import createClass from "../../../functions/createClass";

const fillGrid = (size, subType) =>{
    let array = [];
    for(let i = 0; i < size; i++){
        let row = [];
        for(let j = 0; j < size; j++){
            if(Math.floor(Math.random() * 6) % 2 > 0){
                 //push clearing
                row.push(new Clearing(subType));
            }else{
                //push resource
                row.push(createClass(subType));
            }
        }
        array.push(row);
    }
    return array;
}

export default fillGrid;