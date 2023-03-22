import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber"

export class CustomWorld extends World {
    input1 = 0;
    input2 = 0;

    constructor(options: IWorldOptions) {
      super(options)
    }
  }
  
setWorldConstructor(CustomWorld);
