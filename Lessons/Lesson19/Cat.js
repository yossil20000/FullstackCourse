class Cat{
    name;
    age;
    size;
    weight;
    constructor(name,age,size){
        this.age = age;
        this.name = name;
        this.size = size;
        this.weight =1;
    }
    eat(amount){
        this.size += amount;
    }
    SayHello(){
        return "Bark";
    }
}