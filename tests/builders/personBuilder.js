import BaseBuilder from "./baseBuilder";

class PersonBuilder extends BaseBuilder {
  constructor() {
    super();
    this.name = "Ana";
    this.age = 24;
    this.height = 172;
    this.study = false;
  }
}

export default PersonBuilder;
