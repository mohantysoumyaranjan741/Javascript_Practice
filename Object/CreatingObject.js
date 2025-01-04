const person={
    name:"Soumya",
    Age:27,
    Address:"AEF colony",
    greet:function(){
        console.log(`hello ${this.name}`);
    }
}

person.greet();
console.log(person.name)