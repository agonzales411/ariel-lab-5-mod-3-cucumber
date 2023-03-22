import { Then, When } from "@cucumber/cucumber";
//import { expect }
import { expect } from 'chai';
import { CustomWorld } from "../../../cucumber.config";

// let input1 = 0;
// let input2 = 0;

// When(/the user sets "([0-9]+)" input 1/, function (input: string) {
//     // Write code here that turns the phrase above into concrete actions
//     input1 = +input;
// });

// When(/the user sets "([0-9]+)" input 2/, function (input: string) {
//     // Write code here that turns the phrase above into concrete actions
//     input2 = +input;
// });

// Then(/I should should see the result "([0-9]+)"/, function (result: string) {
//     // Write code here that turns the phrase above into concrete actions
//     console.log(result);
    
//     expect(+result).eqls(input1 + input2);
// });


When(/the user sets "([0-9]+)" input 1/, function (this: CustomWorld, input: string) {
    // Write code here that turns the phrase above into concrete actions
    this.input1 = +input;
});

When(/the user sets "([0-9]+)" input 2/, function (this: CustomWorld, input: string) {
    // Write code here that turns the phrase above into concrete actions
    this.input2 = +input;
});

Then(/I should should see the result "([0-9]+)"/, function (this: CustomWorld, result: string) {
    // Write code here that turns the phrase above into concrete actions
    //console.log(result);
    console.log(this.parameters);
    
    
    expect(+result).eqls(this.input1 + this.input2);
});