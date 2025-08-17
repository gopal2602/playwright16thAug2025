const {test, expected} = require('@playwright/test')

test('Navigate the application URL', async({page})=>{
    await page.goto("https://www.w3schools.com/")

    const title = await page.title();
    console.log("The title is: "+ title);

    const url = await page.url();
    console.log("The URL is: " + url);

})