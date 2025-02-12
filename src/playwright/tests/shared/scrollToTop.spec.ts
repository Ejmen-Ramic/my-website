import test, { expect } from "@playwright/test";

test.describe('Scroll to top', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });

    test('button should be hidden initially and visible after scrolling', async ({ page }) => {
        const scrollToTop = page.locator('[data-testid="scroll-to-top-button"]');
        
        await expect(scrollToTop).toBeHidden();

        await page.evaluate(() => {
            window.scrollTo(0, 200);
        });

        await expect(scrollToTop).toBeVisible();

        // Scroll back to top
        await page.evaluate(() => {
            window.scrollTo(0, 0);
        });

        await expect(scrollToTop).toBeHidden();
    });

    test('clicking the button should scroll to top', async ({ page }) => {
        // This will create enough content to scroll
        await page.evaluate(() => {
            const div = document.createElement('div');
            div.style.height = '2000px';
            document.body.appendChild(div);
        });

        // Scroll down to make button visible
        await page.evaluate(() => {
            window.scrollTo(0, 500);
        });

        const scrollToTop = page.locator('[data-testid="scroll-to-top-button"]');
        
        await expect(scrollToTop).toBeVisible();

        await scrollToTop.click();

        await page.waitForTimeout(1000);

        // This will check if page is scrolled to top
        const scrollPosition = await page.evaluate(() => window.pageYOffset);
        expect(scrollPosition).toBe(0);
    });
});