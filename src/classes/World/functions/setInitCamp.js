import Campfire from "../../Structure/extends/Campfire";
import Garden from "../../Structure/extends/Garden";
import Tent from "../../Structure/extends/Tent";

import Peasant from "../../Unit/Peasant";

//NEED TO ADD CHECKS TO NOT OVERRWRITE OTHER OBJECTS

const setInitCamp = (array) => {;

    //Init Camp
    let x = Math.floor(Math.random() * array.length);
    let y = Math.floor(Math.random() * array.length);
    array[x][y].discovered = true;
    const type = array[x][y].subType;

    //New Campfire
    let x2 = Math.floor(Math.random() * array.length);
    let y2 = Math.floor(Math.random() * array.length);
    array[x][y].grid[x2][y2] = new Campfire(type, [x2, y2], [x, y]);

    //New Garden
    let x3 = Math.floor(Math.random() * array.length);
    let y3 = Math.floor(Math.random() * array.length);
    array[x][y].grid[x3][y3] = new Garden(type, [x3, y3], [x, y]);

    //New Shelter
    let x4 = Math.floor(Math.random() * array.length);
    let y4 = Math.floor(Math.random() * array.length);
    array[x][y].grid[x4][y4] = new Tent(type, [x4, y4], [x, y]);

    //New Peasant
    let x5 = Math.floor(Math.random() * array.length);
    let y5 = Math.floor(Math.random() * array.length);
    array[x][y].grid[x5][y5] = new Peasant(type, [x5, y5], [x, y]);

    return array;
}

export default setInitCamp;