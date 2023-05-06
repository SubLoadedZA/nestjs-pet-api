import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from './pet';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  findAll(): Promise<Pet[]> {
    return this.petService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pet> {
    return this.petService.findOne(id);
  }

  @Post()
  create(@Body() pet: Pet): Promise<Pet> {
    return this.petService.create(pet);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() pet: Pet): Promise<Pet> {
    return this.petService.update(id, pet);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.petService.delete(id);
  }
}
