const{test,expert, expect} = require('@playwright/test')

test('Scenario2', async({page}) => {
    
    
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    await page.click("//a[text()='Drag & Drop Sliders']")
    
    //await page.locator("//output[@id='rangeSuccess' and text()=95]")
   // await page.click("//button[text()='Get Checked Value']")
    //await page.check("//p[@id='message']")
    const sourceSelector = "//output[@id='rangeSuccess' and text()=15]"; 
   const destinationSelector = "//output[@id='rangeSuccess' and text()=95]"; // Replace with the actual selector for the ending element (e.g., the element with 95)

  // Get the source and destination elements
  const sourceElement = await page.$(sourceSelector);
  const destinationElement = await page.$(destinationSelector);

  // Drag and drop from source to destination
  await sourceElement.hover(destinationElement)



    await page.waitForTimeout(10000)

})