class User {
  constructor(_firstName, _lastName, _age, _location = " No location") {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  showUser() {
    return `My name is ${this.firstName} ${this.lastName} I'm ${this.age} years old and i live in ${this.location}`;
  }
}

const Tizio = new User("Tizio", "Rossi", 35, "Roma");

const Caio = new User("Caio", "Bianchi", 20, "Brescia");

function compareAge(userA, userB) {
  if (userA.age > userB.age) {
    console.log(
      `${userA.firstName} ${userA.lastName} is older than ${userB.firstName} ${userB.lastName}`
    );
  } else {
    console.log(
      `${userB.firstName} ${userB.lastName} is older than ${userA.firstName} ${userA.lastName}`
    );
  }
}

compareAge(Tizio, Caio);
