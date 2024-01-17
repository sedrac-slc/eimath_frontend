import { UserPeople } from "./userPeople.model";
import { Group } from "./grupo.model";

export class Message{
  id!: string;
  group!: Group;
  userPeople!: UserPeople;
  text!: string;
}
