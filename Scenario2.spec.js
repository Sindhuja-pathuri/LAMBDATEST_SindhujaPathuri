const{test,expert, expect} = require('@playwright/test')

test('Scenario2', async({page}) => {
    
    
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    await page.click("//a[text()='Drag & Drop Sliders']") 
    
    const slide = await page.locator("//input[@type='range' and @value='15']")
    let temp = 15
    while(temp!=95){
          let expected = await page.locator("//output[@id='rangeSuccess']").getByText()
          await slide.press('ArrowRight')
          temp++

   }
    await page.waitForTimeout(5000)

})
