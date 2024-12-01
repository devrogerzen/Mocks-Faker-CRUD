import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import User from '../models/userModel.js';
import Pet from '../models/petModel.js';

export async function generateUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = new User({
      username: faker.person.fullName(),
      email: faker.internet.email(),
      password: bcrypt.hashSync('coder123', 10),
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: []
    });
    await user.save();
    users.push(user);
  }
  return users;
}

export async function generatePets(count) {
  const pets = [];
  for (let i = 0; i < count; i++) {
    const pet = new Pet({
      name: faker.animal.petName(),
      type: faker.helpers.arrayElement(['dog', 'cat', 'bird']),
      age: faker.number.int({ min: 1, max: 15 })
    });
    await pet.save();
    pets.push(pet);
  }
  return pets;
}