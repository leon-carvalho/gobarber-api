import User from '../infra/typeorm/entities/User';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepositorie {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(save: User): Promise<User>;
}
