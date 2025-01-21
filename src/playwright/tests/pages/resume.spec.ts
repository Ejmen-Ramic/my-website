import test, { expect } from "@playwright/test"
import { CommonTest } from "../models/commonTest"

test.describe('Resume Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/resume')
    })

    test('go to resume', async ({ page }) => {
      await expect(page).toHaveURL('http://localhost:3000/resume')
    })

    test('test if all components are visible', async ({ page }) => {
      const commonTestElements = new CommonTest(page);
      await commonTestElements.checkAllElements();

      const resume = page.locator('[data-testid="resume-component"]')
      await expect(resume).toBeVisible()
  
      const languageSwitcherResume = page.locator('[data-testid="language-switcher-resume"]')
      await expect(languageSwitcherResume).toBeVisible()
  
      const sourceCode = page.locator('[data-testid="source-code"]')
      await expect(sourceCode).toBeVisible()
  
      const pdfFetcher = page.locator('[data-testid="pdfFetcher"]')
      await expect(pdfFetcher).toBeVisible()
    })

    test('language switcher resume', async ({ page }) => {
      const languageSwitcherResume = page.locator('[data-testid="language-switcher-resume"]')
      await expect(languageSwitcherResume).toBeVisible()

      // Test Bosnian
      await page.locator('[data-testid="language-switcher-resume"]').click()
      const heroTextBosnian = page.locator('[data-testid="education-text"]')
      await expect(heroTextBosnian).toBeVisible()
      await expect(heroTextBosnian).toHaveText('Edukacija')

      // Test English
      await page.locator('[data-testid="language-switcher-resume"]').click()
      const heroTextEnglish = page.locator('[data-testid="education-text"]')
      await expect(heroTextEnglish).toBeVisible()
      await expect(heroTextEnglish).toHaveText('Education')
    })

    test('renders PDFFetcher button', async ({ page }) => {
      const button = await page.getByTestId('pdfFetcher');
      await expect(button).toBeVisible();
    });
  
    test('opens menu on click', async ({ page }) => {
      await page.getByTestId('pdfFetcher').click();
      
      const englishMenuItem = await page.getByText('English Version');
      const bosnianMenuItem = await page.getByText('Bosnian Version');
      
      await expect(englishMenuItem).toBeVisible();
      await expect(bosnianMenuItem).toBeVisible();
    });

    // Test English PDF
    test('downloads English PDF when English version is selected', async ({ page }) => {
      const downloadPromise = page.waitForEvent('download');
  
      await page.getByTestId('pdfFetcher').click();
      await page.getByText('English Version').click();
  
      const download = await downloadPromise;
      
      expect(download.suggestedFilename()).toBe('ejmen-ramic-resume-en.pdf');
    });
  

    // Test Bosnian PDF
    test('downloads Bosnian PDF when Bosnian version is selected', async ({ page }) => {
      const downloadPromise = page.waitForEvent('download');
  
      await page.getByTestId('pdfFetcher').click();
      await page.getByText('Bosnian Version').click();
  
      const download = await downloadPromise;
      
      expect(download.suggestedFilename()).toBe('ejmen-ramic-resume-bs.pdf');
    });
  
    test('shows error toast when download fails', async ({ page }) => {
      // Mock failed network request
      await page.route('**/Website/Resume/PDF/**', route => 
        route.fulfill({ status: 500 })
      );
  
    await page.getByTestId('pdfFetcher').click();
    await page.getByText('English Version').click();

    
    const errorToast = await page.locator('#toast-1').nth(1).filter({ 
      hasText: 'Error fetching PDF' 
    }).first();
    
    await expect(errorToast).toBeVisible();

    const errorDescription = await page.locator('#toast-1').nth(1).filter({ 
      hasText: 'There was an error downloading the PDF. Please try again.' 
    }).first();
    
    await expect(errorDescription).toBeVisible();
    });
  })