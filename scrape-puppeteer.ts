import puppeteer from "puppeteer";

async function scrapeDynamicContent(url: string): Promise<void> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url);
    await page.waitForSelector(".mh-experince");

    const data = await page.evaluate(() => {
      const elements = document.querySelectorAll(".mh-experince");
      return Array.from(elements).map((element) => element.textContent);
    });

    console.log(data);
  } catch (error) {
    console.error("Error scraping dynamic content:", error);
  } finally {
    await browser.close();
  }
}

// Usage
scrapeDynamicContent("https://muhannad.salkini.me/");
