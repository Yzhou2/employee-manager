export default class Employee {
  constructor(id, name, phone, title) {
      this.id=id;
      this.name=name;
      this.phone=phone;
      this.title=title;

  }// constructor

  updateName(name) {
    this.name = name;
  }// updateName

  updatePhone(phone) {
    this.phone = phone;
  }// updatePhone

   updateTitle(title) {
     this.title = title;
   }// updateTitle
}
