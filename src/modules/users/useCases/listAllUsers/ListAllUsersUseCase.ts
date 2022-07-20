import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    const users = this.usersRepository.list();

    if (user.admin) {
      if (users) {
        return users;
      }
      throw new Error("Lista de usuários inexistente");
    }
    throw new Error("Usuário não possui permissão para essa operação");
  }
}

export { ListAllUsersUseCase };
