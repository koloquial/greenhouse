import fillGrid from "./functions/fillGrid";

class World{
    constructor(){
        this.size = 12;
        this.grid = fillGrid(this.size);
    }
}

export default World;