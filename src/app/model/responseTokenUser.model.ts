import { UserPeople } from "./userPeople.model";

export class ResponseTokenUser {
  token!: string;
  person!: UserPeople;
  exist: boolean = false;
}
