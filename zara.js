let alt = [];
const playwright = require('playwright');
const browserType = 'firefox'; // chrome
require('dotenv').config() //including the dotenv package files to handle all the bootstrap for us
var count = 0;

const scrapNode = () => {
  const {request} = require('scrape');
  const url = 'https://www.zara.com/ma/fr/homme-vetements-d-exterieur-l715.html?v1=2139893yar';
 
  request(url, function (err, $) {
      if (err) return console.error(err);
      $('img .media-image__image .media__wrapper--media').each(function (div, index) {
        // alt.push(div.attribs.alt.substr(11, div.attribs.alt.length-1 - 18));
        alt.push(div.attribs.alt);
        // header__close-icon
      });
  });
};
scrapNode();

const main = async () => {
    count++;
    if (count === 1) {
      clearInterval(stop);
    }
    try {
      await scrapNode();
      console.log(alt[count]);
      // if (alt[count] === undefined)
      //   return;
      const browser = await playwright[browserType].launch({ headless: false });
      const context = await browser.newContext();
      const page = await context.newPage();
      
      await page.goto('https://www.zara.com/ma/');
      // Click text=SE CONNECTER
      await page.waitForTimeout(100);
      await page.locator('text=SE CONNECTER').click();
      await page.locator('input[name="logonId"]').click();
      await page.locator('text=E-mailIntroduisez votre adresse de courrier électronique >> [placeholder=" "]').fill('hassanseffiani@gmail.com');
      await page.locator('text=E-mailIntroduisez votre adresse de courrier électronique >> [placeholder=" "]').press('Tab');
      await page.locator('input[name="password"]').fill('Hsfhsf@2');
      await page.locator('input[name="password"]').press('Enter');

      // panier
      await page.waitForTimeout(120);
      await page.locator('.layout-header-links__cart-items-count').click();

      // done
      // await page.waitForTimeout(120);
      // await page.locator('[aria-label="Afficher le menu"]').click();
      // await page.waitForTimeout(120);
      // await page.locator('[aria-label="Afficher le menu"]').click();
      // await page.waitForTimeout(200);
      // await page.locator('[aria-label="HOMME\\, Afficher les catégories auxiliaires"] >> text=HOMME').click();
      // await page.waitForTimeout(400);
      // await page.locator('text=SOLDESBLOUSONS | BLAZERSCHAUSSURESSACS | SACS À DOSACCESSOIRESHAUTSBAS >> span').click();
      // await page.waitForTimeout(300);
      // await page.locator('text=BLOUSONS | BLAZERS').click();
      // await page.waitForTimeout(300);
      // await page.locator(`img[alt="${alt[count]}"]`).click();
      // const percent = await page.locator('text=-70%');
      // if (percent) {
      //   console.log("yes");
      //   await page.locator('li[role="option"]:has-text("S")').click();
      //   await page.locator(`[aria-label="Ajouter au panier ${alt[count].substr(11, alt[count].length-1 - 18)}"]`).click();
      //   await page.waitForTimeout(100);
      //   await page.locator('.header__close-icon').click();
      //   await page.waitForTimeout(100);
      // }
      // return ;
      //  done

      // await page.locator('text=Aller au panier').click();
      // await page.waitForTimeout(500);
      // await page.locator('text=CONTINUER').click();
      // await page.waitForTimeout(500);
      // await page.locator('text=HOME').click();
      // await page.locator('text=CONTINUER').click();
      // await page.waitForTimeout(500);
      // await page.locator('text=Pay on Delivery').click();
      // await page.locator('text=CONTINUER').click();
      // await page.waitForTimeout(500);
  
      // await page.locator('.form-input-checkbox__input').click();
      // await page.locator('text=AUTORISER LE PAIEMENT').click();
      // await page.waitForTimeout(500);
      // await page.locator('text=FERMER').click();
      // await page.waitForTimeout(500);
    } catch (error) {
      console.log(error);
    }

}

const stop = setInterval(main, 5000);