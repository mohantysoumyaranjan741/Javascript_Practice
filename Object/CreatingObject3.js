function person(name,age){
    this.name=name,
    this.age=age
}

const person1=new person("soumya",27)
console.log(person1.name)