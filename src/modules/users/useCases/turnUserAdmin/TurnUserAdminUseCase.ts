import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    console.log(user);
    if (user) {
      user.admin = true;
      return user;
    }
    throw new Error("Usuário não existe");
  }
}

export { TurnUserAdminUseCase };
