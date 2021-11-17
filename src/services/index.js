import { login } from './login';
import { logout } from './logout';
import { register } from './register';
import { updateUser } from './updateUser';
import { getAllPlants } from './getAllPlants';
import { getPlantById } from './getPlantById';
import { createPlant } from './createPlant';
import { editPlant } from './editPlant';
import { deletePlant } from './deletePlant';

export const services = {
  login,
  logout,
  register,
  updateUser,
  getAllPlants,
  getPlantById,
  editPlant,
  createPlant,
  deletePlant,
};
