import puppeteer from "puppeteer";

async function scrapeDynamicContent(url: string): Promise<void> {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  // Open a new page in the browser
  const page = await browser.newPage();

  try {
    // Navigate to the specified URL
    await page.goto(url);
    // Wait for the specified selector to appear on the page
    await page.waitForSelector(".mh-experience");

    // Extract text content of elements matching the selector
    const data = await page.evaluate(() => {
      // Select all elements matching the specified selector
      const elements = document.querySelectorAll(".mh-experience");
      // Map over the elements and return their text content
      return Array.from(elements).map((element) => element.textContent);
    });

    // Log the extracted data
    console.log(data);
  } catch (error) {
    console.error("Error scraping dynamic content:", error);
  } finally {
    // Close the browser once scraping is done
    await browser.close();
  }
}

// Usage
scrapeDynamicContent("https://muhannad.salkini.me/");
