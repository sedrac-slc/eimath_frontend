export class SelectOption{
  value: string;
  text: string;
  selected: boolean;

  constructor(value: string, text: string, selected: boolean = false){
    this.value = value;
    this.text = text;
    this.selected = selected;
  }

  static of(value: string, text: string, selected: boolean = false) : SelectOption{
    return new SelectOption(value,text,selected);
  }

  static genders() : Array<SelectOption>{
    return [ SelectOption.of("MALE","Masculino",true), SelectOption.of("FEMALE","Femenino") ];
  }


}
