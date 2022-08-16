const playwright = require('playwright');

const browserType = 'chromium'; // chrome
require('dotenv').config() //including the dotenv package files to handle all the bootstrap for us

async function main() {
    //passing in the login credentials by Environment Variables
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    
    // const CompletMsg = process.env.MSG;
    // const listUsers = process.env.USERS.split(',');
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    
    await page.goto('https://www.zara.com/ma/');// Opening Instagram page
    await page.waitForLoadState('load');

    // wait until the page is loaded because Instagram is a single page application

    await page.waitForTimeout(4000);
    const connect = await page.$('"SE CONNECTER"');
    console.log(connect);

    // const inputEmail = await page.$('[name="username"]'); //unique element of the input field
    // await inputEmail.type(email, 2000);
    // const inputPassword = await page.$('[name="password"]');
    // await inputPassword.type(password, 2000);
    // await inputPassword.press('Enter');//in order to submit our login credentials
    // await page.waitForTimeout(7000);

    // closes the modal by clicking on Not Now

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