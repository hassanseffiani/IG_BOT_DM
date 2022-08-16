const playwright = require('playwright');
// to save auth.json
// await context.storageState({ path: 'auth.json' });

const browserType = 'firefox'; // chrome
require('dotenv').config() //including the dotenv package files to handle all the bootstrap for us

async function main() {
    //passing in the login credentials by Environment Variables
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext({storageState: 'auth.json'});
    // const context = await browser.newContext({ storageState: 'auth.json' });
    const page = await context.newPage();

    
    // const CompletMsg = process.env.MSG;
    const listUsers = process.env.USERS.split(',');
    console.log(listUsers);
    // const email = process.env.EMAIL;
    // const password = process.env.PASSWORD;
    
    await page.goto('https://www.instagram.com/');
    await page.waitForLoadState('load');
    await page.waitForTimeout(80);
    // await page.locator('[aria-label="Phone number\\, username\\, or email"]').fill('oli_hsf');
    // await page.locator('[aria-label="Password"]').fill('Exact666ringer-&-');
    // await page.locator('button:has-text("Log In")').first().click();
    // await page.waitForTimeout(80);
    // await page.locator('text=Not Now').click();
    // await page.waitForTimeout(80);
    await page.locator('text=Not Now').click();
    await page.waitForTimeout(100);
    for (let index = 0; index < listUsers.length; index++) {
        const l = listUsers[index];
        await page.locator('[placeholder="Search"]').fill(l);
        await page.waitForTimeout(1000);
        // await page.locator('[aria-label="Verified"]').click();
        await page.locator('._abnx > div > .oajrlxb2 > div').first().click();
        await page.waitForTimeout(1500);
        await page.locator('._aagw').first().click();
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.waitForTimeout(300);
        await page.locator('div[role="button"]:has-text("Close")').click();
        await page.waitForTimeout(300);
        await page.locator('div:nth-child(2) > .oajrlxb2 > ._aagu > ._aagw').first().click();
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.locator('div[role="button"]:has-text("Close")').click();
        ///////////////////////////////////////////////////////////////////////////////////////
        await page.waitForTimeout(300);
        await page.locator('div:nth-child(3) > .oajrlxb2 > ._aagu > ._aagw').first().click(); //3
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.locator('div[role="button"]:has-text("Close")').click();
        ///////////////////////////////////////////////////////////////////////////////////////
        await page.waitForTimeout(300);
        await page.locator('div:nth-child(2) > div > .oajrlxb2 > ._aagu > ._aagw').first().click(); //4
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.locator('div[role="button"]:has-text("Close")').click();
        ///////////////////////////////////////////////////////////////////////////////////////
        await page.waitForTimeout(300);
        await page.locator('div:nth-child(2) > div:nth-child(2) > .oajrlxb2 > ._aagu > ._aagw').click(); //5
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.locator('div[role="button"]:has-text("Close")').click();
        ///////////////////////////////////////////////////////////////////////////////////////
        await page.waitForTimeout(300);
        await page.locator('div:nth-child(2) > div:nth-child(3) > .oajrlxb2 > ._aagu > ._aagw').click(); //6
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.locator('div[role="button"]:has-text("Close")').click();
        ///////////////////////////////////////////////////////////////////////////////////////
        await page.waitForTimeout(300);
        await page.locator('div:nth-child(3) > div > .oajrlxb2 > ._aagu > ._aagw').first().click(); //7
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.locator('div[role="button"]:has-text("Close")').click();
        ///////////////////////////////////////////////////////////////////////////////////////
        await page.waitForTimeout(300);
        await page.locator('div:nth-child(3) > div:nth-child(2) > .oajrlxb2 > ._aagu > ._aagw').click(); //8
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.locator('div[role="button"]:has-text("Close")').click();
        ///////////////////////////////////////////////////////////////////////////////////////
        await page.waitForTimeout(300);
        await page.locator('div:nth-child(3) > div:nth-child(3) > .oajrlxb2 > ._aagu > ._aagw').click(); //9
        await page.waitForTimeout(300);
        await page.locator('._aamw > ._abl-').click();
        await page.locator('div[role="button"]:has-text("Close")').click();

        // await page.locator('div:nth-child(3) > .oajrlxb2 > ._aagu > ._aagw').first().click(); //3
        // await page.locator('div:nth-child(2) > div > .oajrlxb2 > ._aagu > ._aagw').first().click(); //4
        // await page.locator('div:nth-child(2) > div:nth-child(2) > .oajrlxb2 > ._aagu > ._aagw').click(); //5
        // await page.locator('div:nth-child(2) > div:nth-child(3) > .oajrlxb2 > ._aagu > ._aagw').click(); //6
        // await page.locator('div:nth-child(3) > div > .oajrlxb2 > ._aagu > ._aagw').first().click(); //7
        // await page.locator('div:nth-child(3) > div:nth-child(2) > .oajrlxb2 > ._aagu > ._aagw').click(); //8
        // await page.locator('div:nth-child(3) > div:nth-child(3) > .oajrlxb2 > ._aagu > ._aagw').click(); //9
    }



    // const notNow = await page.$('"Not Now"');
    // await notNow.click();
    // await page.waitForTimeout(3000);
    // const notNow1 = await page.$('"Not Now"');
    // await notNow1.click();
    // await page.waitForTimeout(3000);
    // const msg = await page.$('[class="xWeGp"]');
    // await msg.click();
    // await page.waitForTimeout(5300);

    // for (let index = 0; index < listUsers.length; index++) {
    //     const l = listUsers[index];
    //     console.log(l)
    //     await page.locator('[aria-label="New Message"]').click();
    //     await page.waitForTimeout(3000);
    //     const usernameTarget = await page.$('[name="queryBox"]');
    //     await usernameTarget.type(l, 2000);
    //     await page.waitForTimeout(3100);
    //     const select = await page.$('[style="cursor: pointer;"]');
    //     await select.click();
    //     await page.waitForTimeout(1000);
    //     const next = await page.$('"Next"');
    //     await next.click();
    //     await page.waitForTimeout(3500);
    //     const msgWrite = await page.$('[placeholder="Message..."]');
    //     await msgWrite.type(CompletMsg, 2000);
    //     await page.waitForTimeout(3000);
    //     const sendmsg1 = await page.$('"Send"');
    //     await sendmsg1.click();
    //     await page.waitForTimeout(2000);
    //     // await new Promise(resolve => setTimeout(resolve, 2000));
    // }
}

main();