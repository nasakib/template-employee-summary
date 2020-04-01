// TODO: Write code to define and export the Employee class
let Employee = class {
constructor(name,id,email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
getName() {
    return this.name;
}



setName(newName) {
    this.name = newName;
}

setId(newId){
    this.id = newId;
}

setEmail(newEmail){
    this.email = newEmail;
}
}

module.exports = Employee;