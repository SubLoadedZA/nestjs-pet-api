import { Injectable } from '@nestjs/common';
import { Pet } from './pet';

@Injectable()
export class PetService {
  private pets: Pet[] = [];

  async findAll(): Promise<Pet[]> {
    return this.pets;
    }
    
    async findOne(id: string): Promise<Pet> {
    return this.pets.find(pet => pet.id === id);
    }
    
    async create(pet: Pet): Promise<Pet> {
    this.pets.push(pet);
    return pet;
    }
    
    async update(id: string, pet: Pet): Promise<Pet> {
    const index = this.pets.findIndex(pet => pet.id === id);
    if (index !== -1) {
    this.pets[index] = pet;
    }
    return pet;
    }
    
    async delete(id: string): Promise<void> {
    this.pets = this.pets.filter(pet => pet.id !== id);
    }
    }
