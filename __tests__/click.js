const { chromium } = require('playwright');
const notes = require('./notes');

async function playIntro(page, delay, occurrences) {
    for (let j = 0; j < occurrences; j++){
        for (let i = 0; i < 2; i++) {
            await playIntroPT1(page, delay)
        }
        for (let i = 0; i < 2; i++) {
            await playIntroPT2(page, delay)
        }
        for (let i = 0; i < 2; i++) {
            await playIntroPT3(page, delay)
        }
    }
}

async function playIntroPT1(page, delay) {
    await page.click(notes.D4, { delay }),
    await page.click(notes.D5, { delay }),
    await page.click(notes.A4, { delay }),
    await page.click(notes.G4, { delay }),
    await page.click(notes.G5, { delay }),
    await page.click(notes.A4, { delay }),
    await page.click(notes.F_5, { delay }),
    await page.click(notes.A4, { delay })
}

async function playIntroPT2(page, delay) {
    await page.click(notes.E4, { delay }),
    await page.click(notes.D5, { delay }),
    await page.click(notes.A4, { delay }),
    await page.click(notes.G4, { delay }),
    await page.click(notes.G5, { delay }),
    await page.click(notes.A4, { delay }),
    await page.click(notes.F_5, { delay }),
    await page.click(notes.A4, { delay })
}

async function playIntroPT3(page, delay) {
    await page.click(notes.G4, { delay }),
    await page.click(notes.D5, { delay }),
    await page.click(notes.A4, { delay }),
    await page.click(notes.G4, { delay }),
    await page.click(notes.G5, { delay }),
    await page.click(notes.A4, { delay }),
    await page.click(notes.F_5, { delay }),
    await page.click(notes.A4, { delay })
}

( async () => {
    //function code
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    
    const delay = 200;

    //click on the keynotes
    await playIntro(page, delay, 2)
    await browser.close();
})();

