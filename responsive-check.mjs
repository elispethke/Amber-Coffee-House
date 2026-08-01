import { chromium } from '@playwright/test'

const breakpoints = [
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 900 },
  { name: '1280', width: 1280, height: 900 },
  { name: '1920', width: 1920, height: 1080 },
]

const browser = await chromium.launch()

for (const bp of breakpoints) {
  const page = await browser.newPage({ viewport: { width: bp.width, height: bp.height } })
  await page.goto('http://localhost:5173')
  await page.waitForTimeout(300)
  await page.screenshot({
    path: `/private/tmp/claude-501/-Users-elispethke-caferetia/f7821772-e0e3-41cc-a818-b5df1c745a07/scratchpad/bp-${bp.name}-hero.png`,
  })

  await page.locator('#menu').scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  await page.screenshot({
    path: `/private/tmp/claude-501/-Users-elispethke-caferetia/f7821772-e0e3-41cc-a818-b5df1c745a07/scratchpad/bp-${bp.name}-menu.png`,
  })

  await page.locator('footer').scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  await page.screenshot({
    path: `/private/tmp/claude-501/-Users-elispethke-caferetia/f7821772-e0e3-41cc-a818-b5df1c745a07/scratchpad/bp-${bp.name}-footer.png`,
  })

  await page.close()
}

await browser.close()
console.log('done')
