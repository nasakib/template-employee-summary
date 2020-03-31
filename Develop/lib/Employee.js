// TODO: Write code to define and export the Employee class

function Employee (name,id,email)  {
    this.name = name;
    this.id = id;
    this.email = email;
}


Employee.prototype.setName = (name) => {
    this.name = name;
}

Employee.prototype.setId = (id) => {
    this.id = id;
}

Employee.prototype.setEmail = (email) => {
    this.email = email;
}

Employee.getName = () => {
    return Employee.prototype.name;
}

module.exports = Employee;