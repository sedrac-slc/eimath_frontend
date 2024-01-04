export class Exemple{
  text: string;
  html: string;
  message: string;

  constructor(text: string, html: string, message: string = ""){
    this.html = html;
    this.text = text;
    this.message = message;
  }

}
