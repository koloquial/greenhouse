import checkOutOfBounds from "./checkOutOfBounds";

const getNearby = (world, view, tile) => {
    let north, south, east, west;

    try{
        north = view.grid[tile.location[0] - 1][tile.location[1]];
        if(north === undefined){
            north = checkOutOfBounds('North', world, view, tile);
        }
    }catch(e){
        north = checkOutOfBounds('North', world, view, tile);
    }

    try{
        south = view.grid[tile.location[0] + 1][tile.location[1]];
        if(south === undefined){
            south = checkOutOfBounds('South', world, view, tile);
        }
    }catch(e){
        south = checkOutOfBounds('South', world, view, tile);
    }

    try{
        east = view.grid[tile.location[0]][tile.location[1] + 1];
        if(east === undefined){
            east = checkOutOfBounds('East', world, view, tile);
        }
    }catch(e){
        east = checkOutOfBounds('East', world, view, tile);
    }

    try{
        west = view.grid[tile.location[0]][tile.location[1] - 1];
        if(west === undefined){
            west = checkOutOfBounds('West', world, view, tile);
        }
    }catch(e){
        west = checkOutOfBounds('West', world, view, tile);
    }

    return {north, south, east, west}
}
export default getNearby;