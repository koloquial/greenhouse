const checkOutOfBounds = (direction, world, view, tile) => {
    switch(direction){
        case 'North':
            try{
                console.log('return', world.grid[view.location[0] - 1][view.location[1]].grid[11][tile.location[1]])
                return world.grid[view.location[0] - 1][view.location[1]].grid[11][tile.location[1]]
            }catch(e){ return {}}
        case 'South':
            try{
                console.log('return', world.grid[view.location[0] + 1][view.location[1]].grid[0][tile.location[1]])
                return world.grid[view.location[0] + 1][view.location[1]].grid[0][tile.location[1]]
            }catch(e){ return {}}
        case 'East':
            try{
                console.log('return', world.grid[view.location[0]][view.location[1] + 1].grid[tile.location[0]][0])
                return world.grid[view.location[0]][view.location[1] + 1].grid[tile.location[0]][0]
            }catch(e){ return {}}
        case 'West':
            try{
                console.log('return', world.grid[view.location[0]][view.location[1] - 1].grid[tile.location[0]][11])
                return world.grid[view.location[0]][view.location[1] - 1].grid[tile.location[0]][11]
            }catch(e){ return {}}
        default: return {}
    }
}

export default checkOutOfBounds;