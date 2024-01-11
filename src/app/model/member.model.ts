import { UserPeople } from "./userPeople.model";
import { Group } from "./grupo.model";

export class Member{
  id!: string;
  group!: Group;
  userPeople!: UserPeople;

}
