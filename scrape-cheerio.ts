import axios from "axios";
import * as cheerio from "cheerio";

async function scrapeWebsite(url: string): Promise<void> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Example: Scraping headlines from a news website
    $(".mh-portfolio").each((index, element) => {
      console.log($(element).text());
    });
  } catch (error) {
    console.error("Error fetching and parsing data:", error);
  }
}

// Usage
scrapeWebsite("https://muhannad.salkini.me/");
