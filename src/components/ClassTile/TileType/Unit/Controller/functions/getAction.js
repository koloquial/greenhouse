import Clearing from "../../../../../../classes/Resource/Clearing";

const checkOutOfBounds = (action, tile, world, view) => {
    
    switch(action){
        case 'North':
            //check if space above exits
            try{
                //check if grid north has clearing

                let newX = view.location[0] - 1;
                let newY = view.location[1];

                let newSubX = 11;
                let newSubY = tile.location[1];

                let oldX = view.location[0];
                let oldY = view.location[1]

                console.log('TRY THIS', world.grid[newX][newY].grid[newSubX][newSubY])
                if(world.grid[newX][newY].grid[newSubX][newSubY].subType === 'Clearing'){
                    //move valid
                    //assign values

                    //set new location to tile
                    world.grid[newX][newY].grid[newSubX][newSubY] = tile;

                    //set old location to clearing
                    world.grid[oldX][oldY].grid[tile.location[0]][newSubY] = new Clearing(world.grid[oldX][oldY].subType, [oldX, oldY]);
                    
                    //update tile parent type
                    tile.parentType = world.grid[newX][newY].subType;

                    //discover new area
                    world.grid[newX][newY].discovered = true;

                    //update tile location
                    tile.location = [newSubX, newSubY];

                    //update world location
                    tile.worldLocation = [tile.worldLocation[0] - 1, tile.worldLocation[1]]

                    //add steps
                    tile.steps = tile.steps + 1;

                    return [newX, newY];

                }else{
                    //something in the way
                    console.log(`${world.grid[newX][newY].grid[newSubX][newSubY].subType} is in the way.`);
                    return false;
                }

            }catch(e){
                //no tile above 
                console.log('End of the world.')
                return false;
            }
    }
}

const getAction = (action, tile, world, view) => {
    let oldX, oldY, newX, newY;

    console.log('Action:', action);

    //get new destination coordinates
    switch(action){
        case 'North':
            oldX = tile.location[0];
            oldY = tile.location[1];
            newX = tile.location[0] - 1;
            newY = tile.location[1];
            break;
        default:
            break;
    }

    //check valid space
    try{
        console.log('getAction: TRY SUBTYPE', view.grid[oldX][oldY])
        if(view.grid[newX][newY].subType === 'Clearing'){
            //valid
            //assign values
            view.grid[newX][newY] = tile;
            view.grid[oldX][oldY] = new Clearing(view.grid[oldX][oldY].parentType, [oldX, oldY])
            tile.location = [newX, newY];
            tile.steps = tile.steps + 1;
            return false;

        }else{
            //something in the way
            console.log(`${view.grid[newX][newY].subType} is in the way.`)
            return false;
        }
    }catch(e){
        //out of bounds
        //check north
        return checkOutOfBounds(action, tile, world, view)
    }
}
export default getAction;