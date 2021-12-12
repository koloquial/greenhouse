import { getDefaultNormalizer } from "@testing-library/react";

class Player{
    constructor(name){
        this.type = 'Player';
        this.name = name;

        this.gold = 0;
        this.iron = 0;
        this.shelter = 0;
        this.food = 0;

        this.wood = 0;
        this.woodLocation = [];

        this.seeds = 0;
        this.seedsLocation = [];

        this.units = [];
        this.getUnits = this.getUnits.bind(this);

        this.structures = [];
        this.getStructures = this.getStructures.bind(this);

        this.fillPlayer = this.fillPlayer.bind(this);
        this.addToInventory = this.addToInventory.bind(this);
    }

    addToInventory(item, peasant){
        console.log('ADD THIS ITEM', item)
        Object.keys(item).forEach(key => {
            switch(key){
                //NEED TO CHANGE FROM NUMBER TO CLASS OBJ eg. WOOD
                case 'wood':
                    this.wood = this.wood + item[key];
                    this.woodLocation.push(peasant);
                    break;
                case 'seeds':
                    this.seeds = this.seeds + item[key];
                    this.seedsLocation.push(peasant);
                    break;
                default:
                    break;
            }
        })
    }

    getUnits(item){
        this.food = this.food - item.food;
        this.shelter = this.shelter - item.shelter;

        this.units.push(item);

        if(item.inventory > 0){
            for(let i = 0; i < item.inventory.length; i++){
                switch(item.inventory[i].subType){
                    case 'Wood':
                        this.wood = this.wood + item.inventory[i].quantity;
                        this.woodLocations.push(item);
                        break;
                    case 'Elm Seed':
                        this.seeds = this.seeds + item.inventory[i].quantity;
                        this.seedsLocations.push(item);
                        break;
                    default: break;
                }
            }
        }

    }

    getStructures(item){
            switch(item.subType){
                case 'Campfire':
                    break;
                case 'Garden':
                    this.food = this.food + item.food;
                    break;
                case 'Tent':
                    this.shelter = this.shelter + item.shelter;
                    break;
                default:
                    break;
            }
            this.structures.push(item);
    }

    fillPlayer(world){
        for(let i = 0; i < world.grid.length; i++){
            for(let j = 0; j < world.grid.length; j++){
                
                for(let k = 0; k < world.grid[i][j].grid.length; k++){
                    for(let l = 0; l < world.grid[i][j].grid.length; l++){

                        if(world.grid[i][j].grid[k][l].type === 'Structure'){
                            this.getStructures(world.grid[i][j].grid[k][l]);
                        }else if(world.grid[i][j].grid[k][l].type === 'Unit'){
                            this.getUnits(world.grid[i][j].grid[k][l])
                        }
                        
                    }
                }
            }
        }
    }
}

export default Player;