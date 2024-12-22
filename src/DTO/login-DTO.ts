import { UserDTO } from "./user-DTO";

export interface LoginDTO {
  user: UserDTO;
  token: string;
}
