function User(){
    console.log("I am a constructor function");
}

const user = new User();
console.log(typeof(user));
console.log(user);

function UserDetails(Name,age){
(this.Name = Name),(this.age = age);
}

const user1 = new UserDetails("Amrut",21);
const user2 = new UserDetails("Naregal",22);
const user3 = new UserDetails("Sekiro",23);
const user4 = new UserDetails("Diluc",24);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
