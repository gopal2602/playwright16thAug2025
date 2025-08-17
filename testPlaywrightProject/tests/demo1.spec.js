const {test, expect} = require('@playwright/test')

test('First Playwrighr Test', async function display({page}){
    console.log('Hello Running the first test');
})


test('Second Playwright test', async function showName({page}){
    console.log("The name is: Gopalkrishna Gudi");
})


test.skip('Third anonymous Playwright test', async function({page}){
    console.log("Third anonymous test using skip tag");
})

test('Fourth arrow Playwright test', async({})=>{
    console.log("Fourth arrow test")
})

test.only('Fifth arrow Playwright test', async({})=>{
    console.log("Fifth arrow test using only tag")
})

