import Clearing from "../../../../../../classes/Resource/Clearing";

const checkOutOfBounds = (action, tile, world, view, setAlertMessage) => {
    let oldX = view.location[0];
    let oldY = view.location[1];
    let newX, newY, newSubX, newSubY;

    switch(action){
        case 'North':
            newX = view.location[0] - 1;
            newY = view.location[1];
            newSubX = 11;
            newSubY = tile.location[1];
            break;
        case 'South':
            newX = view.location[0] + 1;
            newY = view.location[1];
            newSubX = 0;
            newSubY = tile.location[1];
            break;
        case 'West':
            newX = view.location[0];
            newY = view.location[1] - 1;
            newSubX = tile.location[0];
            newSubY = 11;
            break;
        case 'East':
            newX = view.location[0];
            newY = view.location[1] + 1;
            newSubX = tile.location[0];
            newSubY = 0;
            break;
        default: break;
    }

    try{
        if(world.grid[newX][newY].grid[newSubX][newSubY].subType === 'Clearing'){

            world.grid[newX][newY].grid[newSubX][newSubY] = tile;
    
            //set old location to clearing
            world.grid[oldX][oldY].grid[tile.location[0]][tile.location[1]] = new Clearing(world.grid[oldX][oldY].subType, [oldX, oldY]);
                            
            //update tile parent type
            tile.parentType = world.grid[newX][newY].subType;
    
            //discover new area
            world.grid[newX][newY].discovered = true;
    
            //update tile location
            tile.location = [newSubX, newSubY];

            //update world location
            tile.worldLocation = [newX, newY]
    
            //add steps
            tile.steps = tile.steps + 1;
    
            return [newX, newY];
    
        }else{
            //something in the way
            console.log(`${world.grid[newX][newY].grid[newSubX][newSubY].subType} is in the way.`)
            console.log('getAction (alertMessage)', setAlertMessage)
            setAlertMessage(`${world.grid[newX][newY].grid[newSubX][newSubY].subType} is in the way.`)
            return false;
        }
    }catch(e){
        return false;
    }
}

const getAction = (action, tile, world, view, setAlertMessage) => {
    let newX, newY;
    let oldX = tile.location[0];
    let oldY = tile.location[1];

    //get new destination coordinates
    switch(action){
        case 'North':
            newX = tile.location[0] - 1;
            newY = tile.location[1];
            break;
        case 'South':
            newX = tile.location[0] + 1;
            newY = tile.location[1];
            break;
        case 'East':
            newX = tile.location[0];
            newY = tile.location[1] + 1;
            break;
        case 'West':
            newX = tile.location[0];
            newY = tile.location[1] - 1;
            break;
        default:
            break;
    }

    //check valid space
    try{
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
            
            console.log('getAction (alertMessage)', setAlertMessage)
            setAlertMessage(`${view.grid[newX][newY].subType} is in the way.`)
            return false;
        }
    }catch(e){
        //out of bounds
        //check north
        return checkOutOfBounds(action, tile, world, view)
    }
}
export default getAction;