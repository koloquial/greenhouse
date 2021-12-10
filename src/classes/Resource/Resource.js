class Resource{
    constructor(parentType, location){
        this.type = 'Resource';
        this.parentType = parentType;
        this.location = location;
        this.status = 'idle';
        this.timer = null;
        this.peasant = null;
        this.callback = null;

        this.execute = this.execute.bind(this);
        this.countdown = this.countdown.bind(this);
    }

    countdown(){
        console.log('timer', this.timer)
        if(this.timer > 0){
            this.timer = this.timer - 1;
            setTimeout(() => this.countdown(), 1000)
        }else{
            if(this.status !== 'idle'){
                let reward;
                for(let key in this.actions){
                    if(this.actions[key] === this.status){
                        reward = this.resource[key];
                        this.resource[key] = 0;
                    }
                }
                this.callback(reward);
            }
        }
    }

    execute(action, peasant, callback){
        switch(action){
            case 'Fell':
                this.status = 'Fell';
                this.timer = 10;
                this.peasant = peasant;
                this.callback = () => callback;
                break;
            default: break;
        }
        this.countdown();
    }
}

export default Resource;