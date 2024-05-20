import { Browser, chromium } from "playwright"

async function specialFetchTitle(url: string) {
  let browser: Browser | undefined = undefined
  try {
    browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto(url)
    return { title: await page.title() }
  } finally {
    console.log("finally!");
    browser?.close()
  }
}


// const url = "https:google.com";
// const {title} = await specialFetchTitle(url); => OK


const badUrl = "hogehogefoo";
await specialFetchTitle(badUrl);


// finallyに移ってから、エラーがthrowされる。
/*
> try-finally-close-sample@1.0.0 sample
> npx tsx src/index.ts

finally!
node:internal/modules/run_main:129
    triggerUncaughtException(
    ^

page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "hogehogefoo", waiting until "load"

    at specialFetchTitle (/Users/zuoxiangtailang/try-finally-close-sample/src/index.ts:8:16)
    at <anonymous> (/Users/zuoxiangtailang/try-finally-close-sample/src/index.ts:22:1) {
  name: 'Error'
}

Node.js v20.13.1
*/