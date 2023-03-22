import { After, Before } from "@cucumber/cucumber";

Before({tags: "@test"}, function () {
    console.log('BEFORE HOOK');    
});

After({tags: "@test"}, function () {
    console.log('After HOOK');    
});