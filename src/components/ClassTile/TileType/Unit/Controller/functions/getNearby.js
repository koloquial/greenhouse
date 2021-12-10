import checkOutOfBounds from "./checkOutOfBounds";

const getNearby = (world, view, tile,) => {
    let north, south, east, west;

    try{
        console.log('-------------------------')
        console.log('TILE CHECKING', tile)
        console.log('CURRENT VIEW', view)
        console.log('CHECK NORTH:', view.grid[tile.location[0] - 1][tile.location[1]])
        north = view.grid[tile.location[0] - 1][tile.location[1]];
        console.log('-------------------------')
        if(north === undefined){
            north = checkOutOfBounds('North', world, view, tile);
        }
    }catch(e){
        north = checkOutOfBounds('North', world, view, tile);
    }

    try{
        console.log('-------------------------')
        console.log('TILE CHECKING', tile)
        console.log('CURRENT VIEW', view)
        console.log('CHECK LOCATION SOUTH', view.grid[tile.location[0] + 1][tile.location[1]])
        console.log('-------------------------')
        south = view.grid[tile.location[0] + 1][tile.location[1]];
        if(south === undefined){
            south = checkOutOfBounds('South', world, view, tile);
        }
    }catch(e){
        // console.log('check out of bounds VIEW', view)
        console.log('CHECKING OOB SOUTH');
        console.log('TEST', world.grid[view.location[0] - 1][view.location[1]])
        console.log("VIEW", view)
        console.log('CHECKING TILE', tile)        
        south = checkOutOfBounds('South', world, world.grid[view.location[0] - 1][view.location[1]], tile);
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