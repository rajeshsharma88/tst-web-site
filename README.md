
# TST Technologies - Corporate Website & Deployment Guide

This repository contains the source code for the TST Technologies corporate website, a modern, professional, and SEO-optimized dynamic site built with React and TypeScript.

This README serves as a comprehensive guide for deployment, maintenance, and performance testing.

## Table of Contents

1.  [Project Overview](#project-overview)
2.  [Folder Structure](#folder-structure)
3.  [Local Development](#local-development)
4.  [Deployment Checklist](#deployment-checklist)
5.  [Deploying to Netlify (Recommended)](#deploying-to-netlify-recommended)
6.  [Deploying to GitHub Pages](#deploying-to-github-pages)
7.  [Connecting a Custom Domain](#connecting-a-custom-domain)
8.  [SEO & Performance Testing](#seo--performance-testing)
9.  [Website Maintenance](#website-maintenance)

---

## 1. Project Overview

-   **Framework:** React, TypeScript
-   **Styling:** Tailwind CSS
-   **Routing:** React Router (`HashRouter` for compatibility)
-   **Features:**
    -   Fully responsive design
    -   Dynamic content loaded from centralized data files (`.ts` files acting as JSON)
    -   Dynamic product catalog
    -   On-scroll animations via IntersectionObserver
    -   Dynamic SEO tags and JSON-LD schema generation
    -   Interactive contact forms and quote request modal

---

## 2. Folder Structure

The project is organized with a clear and scalable structure.

```
/
├── index.html                # Main HTML entry point with styles and config
├── App.tsx                   # Main application component with routing setup
├── index.tsx                 # React application entry point
├── types.ts                  # Shared TypeScript type definitions
├── components/               # Reusable UI components (Header, Footer, etc.)
│   ├── AnimatedSection.tsx
│   ├── ContactModal.tsx
│   ├── FeatureCard.tsx         # Modular template for feature sections
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── ProductCard.tsx
│   ├── ScrollToTopButton.tsx
│   └── TimelineItem.tsx      # Modular template for timeline
├── data/
│   ├── products.ts           # Central data source for all product information
│   └── content.ts            # Central data source for all page text content
├── hooks/
│   ├── ScrollToTop.ts
│   ├── useIntersectionObserver.ts
│   └── useSeo.ts
└── pages/                    # Components representing full pages
    ├── AboutPage.tsx
    ├── ContactPage.tsx
    ├── HomePage.tsx
    ├── ProductDetailPage.tsx
    └── ProductsPage.tsx
```

---

## 3. Local Development

Before deploying, ensure the site runs correctly on your local machine.

1.  **Install Dependencies:** If you have a `package.json`, run `npm install`.
2.  **Start the Server:** Run `npm run dev` or the equivalent command for your setup (e.g., Vite).
3.  **Verify:** Open the provided local URL (e.g., `http://localhost:5173`) in your browser and test all pages and functionality.

---

## 4. Deployment Checklist

-   [ ] **Favicon:** The `favicon.svg` in `index.html` has been replaced with the official company logo.
-   [ ] **Contact Info:** The `data/content.ts` file has been updated with the correct phone numbers, emails, and address.
-   [ ] **Social Links:** Social media URLs in `Footer.tsx` point to the company's official profiles.
-   [ ] **SEO Metadata:** Default titles and descriptions in the `useSeo` hook on each page component are finalized.
-   [ ] **Product & Page Content:** The `data/products.ts` and `data/content.ts` files contain accurate and complete information. All placeholder images (`picsum.photos`) have been replaced with actual photos.
-   [ ] **Final Audit:** Run a final performance and SEO audit locally using Lighthouse.

---

## 5. Deploying to Netlify (Recommended)

Netlify is ideal for deploying React-based static sites due to its simplicity and robust feature set.

**Step 1: Connect Your Repository**
1.  Sign up for a Netlify account and log in.
2.  Click "Add new site" -> "Import an existing project".
3.  Connect to your Git provider (GitHub, GitLab, etc.) and select the TST Technologies repository.

**Step 2: Configure Build Settings**
Netlify will likely auto-detect the settings. If not, configure them as follows:
-   **Build command:** `npm run build` (or `vite build`)
-   **Publish directory:** `dist` (or `build`, depending on your build tool's output folder)

**Step 3: Deploy**
1.  Click "Deploy site". Netlify will pull your code, build the project, and deploy the static files to its global CDN.
2.  Once complete, your site will be live at a generated Netlify URL (e.g., `tst-tech.netlify.app`).

---

## 6. Deploying to GitHub Pages

GitHub Pages is a free hosting option directly from your repository.

**Step 1: Configure Your Project**
1.  **Router:** This project uses `HashRouter`, which is ideal for GitHub Pages as it uses the URL hash (`#`) to manage routes without requiring server-side configuration. No changes are needed.
2.  **`package.json`:** Add a `homepage` property to your `package.json`:
    ```json
    "homepage": "https://<your-username>.github.io/<your-repo-name>",
    ```

**Step 2: Build the Project**
-   Run your build command: `npm run build`. This will create a `dist` or `build` folder with the static files.

**Step 3: Deploy**
-   The easiest method is to use the `gh-pages` package:
    1.  Install the package: `npm install gh-pages --save-dev`
    2.  Add a deploy script to your `package.json`:
        ```json
        "scripts": {
          "predeploy": "npm run build",
          "deploy": "gh-pages -d dist"
        }
        ```
    3.  Run the script: `npm run deploy`. This will push the contents of the `dist` folder to a special `gh-pages` branch on your repository.

**Step 4: Configure GitHub Repository**
1.  Go to your repository's "Settings" > "Pages".
2.  Under "Source," select the `gh-pages` branch.
3.  Your site will be available at the URL specified in your `homepage` field after a few minutes.

---

## 7. Connecting a Custom Domain

**On Netlify:**
1.  Go to your site's "Domain settings".
2.  Click "Add a domain" and follow the instructions to add your custom domain.
3.  Netlify will provide you with DNS records (usually A or CNAME records) to add to your domain registrar's settings.

**On GitHub Pages:**
1.  Go to your repository's "Settings" > "Pages".
2.  Under "Custom domain," enter your domain name (e.g., `www.tst-technologies.com`) and click "Save".
3.  Go to your domain registrar and configure your DNS records (A, CNAME) to point to GitHub's servers as instructed in the GitHub documentation.

---

## 8. SEO & Performance Testing

After deployment, it's crucial to test the live site.

-   **Google PageSpeed Insights:**
    -   Visit [PageSpeed Insights](https://pagespeed.web.dev/).
    -   Enter your live URL to get a detailed report on performance, accessibility, best practices, and SEO for both mobile and desktop.
    -   Aim for scores above 90 in all categories.

-   **Google Lighthouse (in Chrome DevTools):**
    1.  Open your live site in Chrome.
    2.  Open DevTools (`F12` or `Ctrl+Shift+I`).
    3.  Go to the "Lighthouse" tab.
    4.  Select the categories you want to test and click "Analyze page load".
    5.  This provides actionable feedback to fix performance bottlenecks, accessibility issues, and SEO mistakes.

---

## 9. Website Maintenance

The website is designed to be easily updated by modifying central data files, with no need to change the component code.

### Updating Page Content

-   **To change text** on the Home, About, or Contact pages (e.g., headlines, mission statement, testimonials, contact info), edit the corresponding sections in `src/data/content.ts`.

### Adding or Updating a Product

-   **To add, remove, or modify products**, edit the `PRODUCTS` array in `src/data/products.ts`. Follow the `Product` interface defined in `src/types.ts`.

**Product Object Structure:**

```typescript
{
  id: 'unique-product-id', // A unique string, used for the URL
  name: 'New Product Name',
  category: 'Biometric', // Must be one of: 'Biometric', 'Access Control', 'Turnstile', 'Inspection'
  short: 'A brief, one-sentence description for product cards.',
  description: `
    <p>A detailed HTML description for the product page.</p>
    <ul class="list-disc list-inside mt-4">
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
  `,
  images: [
    'path/to/image1.jpg', // First image is the primary one
    'path/to/image2.jpg'
  ],
  specs: {
    'Specification Name 1': 'Value 1',
    'Specification Name 2': 'Value 2'
  },
  price: 'Contact for quote' // Optional price field
}
```

After making any changes to these files, commit and push them to your repository. The live site will be updated automatically by your deployment service (Netlify or GitHub Pages).
