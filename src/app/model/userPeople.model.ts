export class UserPeople {
  id!: string;
  name!: string;
  email!: string;
  phone!: string;
  birthDay!: Date;
  gender!: string;
  username!: string;
  password!: string;
  roles: any[] = [];
  enabled: boolean = false;
  authorities: any[] = [];
  accountNonLocked: boolean = false;
  credentialsNonExpired: boolean = false;
  accountNonExpired: boolean = false;
}
