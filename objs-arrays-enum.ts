// const person: {
//   name: string;
//   age: number;
// } 
// const person:  {
//   name: string;
//   age: number;
//   hobbies:string[];
//   role: [number, string];
// }= {
//   name: 'yuta',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
enum Role {
  ADMIN, 
  READ_ONLY,
  AUTHOR,
}

const person = {
    name: 'yuta',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
  };


// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if(person.role === Role.ADMIN) {
  console.log('管理者');
}