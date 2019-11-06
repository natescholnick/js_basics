export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printInfo() {
    console.log(this.name);
  }
}

// to export the Person class, you must use the keyword export. You can either set as default or non-default. If you are exporting, the script src must be a module type.

export const API_KEY = 'aesghtjur2354yuetynsba';

export default function(num) {
  console.log(num);
};
