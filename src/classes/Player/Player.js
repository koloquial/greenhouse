class Player{
    constructor(name){
        this.type = 'Player';
        this.name = name;

        this.gold = 0;
        this.wood = 0;
        this.iron = 0;
        this.shelter = 0;
        this.food = 0;

        this.structures = [];
        this.units = [];
        this.getStructures = this.getStructures.bind(this);
    }

    getStructures(world){
        for(let i = 0; i < world.grid.length; i++){
            for(let j = 0; j < world.grid.length; j++){
                
                for(let k = 0; k < world.grid[i][j].grid.length; k++){
                    for(let l = 0; l < world.grid[i][j].grid.length; l++){

                        if(world.grid[i][j].grid[k][l].type === 'Structure'){
                            switch(world.grid[i][j].grid[k][l].subType){
                                case 'Campfire':
                                    break;
                                case 'Garden':
                                    this.food = this.food + world.grid[i][j].grid[k][l].food;
                                    break;
                                case 'Tent':
                                    this.shelter = this.shelter + world.grid[i][j].grid[k][l].shelter;
                                    break;
                                default:
                                    break;
                            }
                            this.structures.push(world.grid[i][j].grid[k][l]);

                        }else if(world.grid[i][j].grid[k][l].type === 'Unit'){
                            this.food = this.food - world.grid[i][j].grid[k][l].food;
                            this.shelter = this.shelter - world.grid[i][j].grid[k][l].shelter;
                            this.units.push(world.grid[i][j].grid[k][l]);
                        }
                        
                    }
                }
            }
        }
    }
}

export default Player;