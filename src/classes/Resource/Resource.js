class Resource{
    constructor(parentType, location){
        this.type = 'Resource';
        this.parentType = parentType;
        this.location = location;
        this.status = 'idle';
        this.timer = null;
        this.rewardCallback = null;
        this.timerCallback = null;
        

        this.execute = this.execute.bind(this);
        this.countdown = this.countdown.bind(this);
    }

    countdown(){
        if(this.timer > 1){
            this.timer = this.timer - 1;
            console.log('countdown:', this.timer)
            this.timerCallback(this.timer);
            setTimeout(() => this.countdown(), 1000)
        }else{
            if(this.status !== 'idle'){
                let reward;
                let res;
                for(let key in this.actions){
                    if(this.actions[key] === this.status){
                        reward = this.resource[key];
                        res = key;
                        this.resource[key] = 0;
                        
                    }
                }
                this.rewardCallback(reward, res);
            }
        }
    }

    execute(action, rewardCallback, timerCallback){
        switch(action){
            case 'Fell':
                this.status = 'Fell';
                this.timer = 11;
                this.rewardCallback = rewardCallback;
                this.timerCallback = timerCallback;
                
                break;
            default: break;
        }
        this.countdown();
        return this.timer;
    }
}

export default Resource;