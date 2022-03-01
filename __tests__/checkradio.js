const { firefox } = require('playwright');

( async() => {
    // Function code

    // Launching browser
    const browser = await firefox.launch({headless:false, slowMo: 400});
    
    // Creating a page inside browser
    const page = await browser.newPage();
    
    // Navigating to site
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    
    // Check the second checkbox 
    const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    await checks[1].check();
    await checks[0].uncheck();

    // Select the second radio button
    const radios = await page.$$('#main div :nth-child(1) input[type="radio"]');    
    await radios[1].check();

    // Closing browser
    await browser.close();
})();