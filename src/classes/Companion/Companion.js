

class Companion{
    constructor(parentType, location, worldLocation ){
        this.type = 'Companion';
        this.parentType = parentType;
        this.location = location;
        this.worldLocation = worldLocation;
        this.status = 'idle';
        this.friendly = false;

    }
}

export default Companion;