const{test, expect} = require('@playwright/test')

test('Test with assertions', async({})=>{
    expect(200).toBe(200);
})

test('Test with assertions2', async({})=>{
    expect(true).toBe(true);
})

test('Test with assertions3', async({})=>{
    expect('SG Testing Institute').toContain("SG Test");
})

test('Test with assertion4', async({})=>{
    expect('Good Evening'.includes('Evening')).toBeTruthy()
})

test('Test with assertions5', async({})=>{
    expect(200).toBeGreaterThan(100);
})