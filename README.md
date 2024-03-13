# TypeScript Web Scraping

This project demonstrates web scraping techniques using TypeScript, focusing on extracting data from websites programmatically. It utilizes libraries like Cheerio and Axios to fetch and parse HTML content, enabling automation of tasks such as data extraction, content aggregation, and more.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/web-scraping-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd web-scraping-project
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

## Usage

### 1. Scraping with Cheerio

To scrape data from a website using Cheerio, follow these steps:

1. Open the `scrape-cheerio.ts` file.
2. Update the `url` variable with the target website's URL.
3. Run the TypeScript file using ts-node:

   ```bash
   npx ts-node scrape-cheerio.ts
   ```

4. The scraped data will be logged to the console.

### 2. Scraping with Puppeteer

To scrape dynamic content and perform automation tasks using Puppeteer, follow these steps:

1. Open the `scrape-puppeteer.ts` file.
2. Update the `url` variable with the target website's URL.
3. Run the TypeScript file using ts-node:

   ```bash
   ts-node scrape-puppeteer.ts
   ```

4. The scraped data will be logged to the console.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for Node.js.
- [cheerio](https://www.npmjs.com/package/cheerio): Fast, flexible, and lean implementation of jQuery for the server.
- [puppeteer](https://www.npmjs.com/package/puppeteer): Headless Chrome Node.js API for browser automation.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

Thank you for reading! Your time and interest are appreciated. Have any feedback or questions? Feel free to share in the comments. Stay connected for future updates and discussions. Happy coding!
