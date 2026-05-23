import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] ${msg.type()}: ${msg.text()}`);
  });
  
  page.on('pageerror', err => {
    console.log(`[BROWSER ERROR] ${err.toString()}`);
  });

  console.log("Navigating to http://localhost:4000/docs/components/sonner ...");
  await page.goto('http://localhost:4000/docs/components/sonner');
  
  await page.waitForTimeout(2000);
  
  console.log("Looking for 'Show Toast' buttons...");
  const buttons = await page.getByRole('button', { name: 'Show Toast' }).all();
  console.log(`Found ${buttons.length} 'Show Toast' buttons.`);
  
  if (buttons.length > 0) {
    console.log("Clicking the first 'Show Toast' button...");
    await buttons[0].click();
    await page.waitForTimeout(1000);
    
    // Check if toast element is in DOM
    const toastExists = await page.locator('[data-sonner-toast]').count();
    console.log(`Toast elements in DOM: ${toastExists}`);
    
    if (toastExists > 0) {
      const toastHtml = await page.locator('[data-sonner-toast]').first().innerHTML();
      console.log("Toast inner HTML:", toastHtml);
      
      const className = await page.locator('[data-sonner-toast]').first().getAttribute('class');
      console.log("Toast class attribute:", className);
    }
  }
  
  await browser.close();
})();
