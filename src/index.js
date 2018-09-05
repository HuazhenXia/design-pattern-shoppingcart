class Product{
    constructor(name){
        this.name = name;
    }

    init(){
        alert("init")
        alert(this.name)
    }
}

class Creator{
    static create(name){
        return new Product(name)
    }
}

let p = Creator.create("Lily")
p.init()
