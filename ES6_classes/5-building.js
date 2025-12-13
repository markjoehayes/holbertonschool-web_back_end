export default class Building {
    constructor(sqft){
        // Validate and set sqft
        if (typeof sqft !== 'number'){
            throw new TypeError('sqft must be a number');
        }
        this._sqft = sqft;
        
        // Check if this is being instantiated directly (not a subclass)
        // Or if a subclass hasn't overridden the required method
        if (this.constructor !== Building &&
            typeof this.evacuationWarningMessage !== 'function'){
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }
    // Getter for sqft
    get sqft() {
        return this._sqft;
    }
}

