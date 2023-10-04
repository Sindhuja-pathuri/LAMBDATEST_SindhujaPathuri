const{test,expert, expect} = require('@playwright/test')

test('Scenario1', async({page}) => {
    
    
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    await page.click("//a[text()='Simple Form Demo']")
    const url = await expect(page).toHaveURL('https://www.lambdatest.com/selenium-playground/simple-form-demo');
    console.log(url)
    const msg = await page.locator("//input[@id='user-message']").fill('Welcome to Sindhuja Pathuri for Lambda Test')
    await page.click("//button[text()='Get Checked Value']")
    await expect(await page.locator("//p[@id='message']")).toHaveText('Welcome to Sindhuja Pathuri for Lambda Test')
   //console.log(msg)



    await page.waitForTimeout(10000)

})