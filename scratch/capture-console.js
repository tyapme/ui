import { chromium } from "playwright"

async function main() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  page.on("console", (msg) => {
    if (msg.type() === "error" || msg.type() === "warning") {
      console.log(`[BROWSER CONSOLE ${msg.type().toUpperCase()}] ${msg.text()}`)
    }
  })

  page.on("pageerror", (err) => {
    console.log(`[BROWSER UNCAUGHT EXCEPTION] ${err.stack || err.message}`)
  })

  console.log("Navigating to docs...")
  try {
    await page.goto("http://localhost:4000/docs/components/accordion", {
      waitUntil: "networkidle",
      timeout: 30000,
    })
    console.log("Navigation complete. Waiting 5s for any delayed errors...")
    await page.waitForTimeout(5000)
  } catch (error) {
    console.error("Navigation error:", error)
  } finally {
    await browser.close()
  }
}

main().catch(console.error)
