class Player{
    constructor(name){
        this.type = 'Player';
        this.name = name;
        this.inventory = [];
        this.gold = 500;
        this.wood = 200;
        this.iron = 100;
        this.shelter = 5;
        this.food = 5;
    }
}

export default Player;