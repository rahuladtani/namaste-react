import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();
app.use(cors());
app.use(express.json());

let browser = null;
async function getBrowser() {
  if (!browser) {
    browser = await puppeteer.launch({ headless: true });
  }
  return browser;
}

// ----------------------
// Get Swiggy Restaurant List
// ----------------------
app.get("/swiggy", async (req, res) => {
  try {
    const browser = await getBrowser();
    const page = await browser.newPage();

    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    // Set realistic browser headers
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
    );
    await page.setExtraHTTPHeaders({
      "Accept-Language": "en-US,en;q=0.9",
    });

    // Go to URL
    const response = await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    if (!response || response.status() >= 400) {
      throw new Error(
        `Failed to fetch Swiggy list. Status: ${
          response ? response.status() : "no response"
        }`
      );
    }

    // Extract JSON from page content
    const content = await page.evaluate(() => {
      return document.querySelector("body").innerText;
    });

    await page.close();

    // Parse JSON safely
    try {
      const data = JSON.parse(content);
      res.json(data);
    } catch (err) {
      res.status(502).json({
        error: "Failed to parse Swiggy JSON",
        content: content.slice(0, 300),
      });
    }
  } catch (err) {
    console.error("Error fetching restaurant list:", err);
    res.status(500).json({ error: err.message });
  }
});

// ----------------------
// Get Swiggy Menu by Restaurant ID
// ----------------------
app.get("/swiggy/:id", async (req, res) => {
  const { id } = req.params;

  //   try {
  const browser = await getBrowser();
  const page = await browser.newPage();

  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2913247&lng=77.3359114&restaurantId=${id}`;

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
  );
  await page.setExtraHTTPHeaders({
    "Accept-Language": "en-US,en;q=0.9",
  });

  const response = await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 30000,
  });

  //   if (!response || response.status() >= 400) {
  //     throw new Error(
  //       `Failed to fetch menu. Status: ${
  //         response ? response.status() : "no response"
  //       }`
  //     );
  //   }

  const content = await page.evaluate(
    () => document.querySelector("body").innerText
  );

  await page.close();

  console.log(content);

  //   try {
  const data = JSON.parse(content);
  console.log(data);
  res.json(data);
  //   } catch (err) {
  //     res.status(502).json({
  //       error: "Failed to parse menu JSON",
  //       content: content.slice(0, 300),
  //     });
  //   }
  //   } catch (err) {
  //     console.error("Error fetching menu:", err);
  //     res.status(500).json({ error: err.message });
  //   }
});

// ----------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Puppeteer Proxy running on http://localhost:${PORT}`)
);
