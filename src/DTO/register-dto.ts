import { UserDTO } from "./user-DTO";

export interface RegisterDTO {
  user: UserDTO;
  token: string;
}
