import axios from "axios";
import * as cheerio from "cheerio";

async function scrapeWebsite(url: string): Promise<void> {
  try {
    // Fetch HTML content of the specified URL using axios
    const response = await axios.get(url);
    // Load HTML content into Cheerio for manipulation
    const $ = cheerio.load(response.data);

    // Select all elements with class "mh-portfolio" and iterate over them
    $(".mh-portfolio").each((index, element) => {
      // Extract and log the text content of each element
      console.log($(element).text());
    });
  } catch (error) {
    console.error("Error fetching and parsing data:", error);
  }
}

// Usage
scrapeWebsite("https://muhannad.salkini.me/");
