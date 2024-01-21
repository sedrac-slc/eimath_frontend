import { UserPeople } from "./userPeople.model";
import { Group } from "./grupo.model";

export class Message{
  id!: string;
  group!: Group;
  userPeople!: UserPeople;
  text!: string;
  createdAt!: Date;

  constructor(text: string, group: Group, person: UserPeople){
    this.text = text;
    this.group = group;
    this.userPeople = person;
    this.createdAt = new Date();
  }

}
