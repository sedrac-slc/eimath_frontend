import { UserPeople } from "./userPeople.model";
import { Group } from "./grupo.model";

export class Convit{
  id!: string;
  email!: string;
  group!: Group;
  userPeople!: UserPeople;

  constructor(email: string, group: Group, person: UserPeople){
    this.email = email;
    this.group = group;
    this.userPeople = person;
  }

}
