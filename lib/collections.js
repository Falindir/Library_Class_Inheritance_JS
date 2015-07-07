var Collections = Class.extend({

    init : function() {
       this.collections = [];
       this.size = 0;
    },

    clear : function () {
        this.collections = [];
    },

    get : function (index) {
        return this.collections[index];    
    },

    add : function (value) {
        this.collections.push(value);
        this.size += 1;
    },

    set : function (index, value) {
        this.collections[index] = value;
    },

    remove : function (index) {
        this.collections.splice(index, 1);
        if(this.size > 0)
            this.size -= 1;
    },

    contains : function (value) {
        for (i = 0; i < this.collections.length; i++)
            if(this.collections[i] === value)
                return true;
    
        return false;
    },

    getIndex : function (value) {
        for (i = 0; i < this.collections.length; i++)
            if(this.collections[i] === value)
                return i;            
        
        return -1;
    },

    getAllIndex : function (value) {
        var index = new Collections();

        for (i = 0; i < this.collections.length; i++)
            if(this.collections[i] === value)
                return index.add(i);            
        
        return index;    
    
    }

}); 