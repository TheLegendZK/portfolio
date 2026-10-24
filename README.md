# Portfolio Website

This is a static portfolio website built with plain HTML and CSS. It is designed to be hosted directly on GitHub Pages without any build steps.

## How to Deploy to GitHub Pages

1.  **Create a GitHub Repository:**
    *   Log in to GitHub and create a new public repository.
    *   Name it exactly `<yourusername>.github.io` (replace `<yourusername>` with your actual GitHub username). This creates a "User Page" which maps to your root URL.
    *   Alternatively, you can name it `portfolio` (or anything else), but then your URL will be `https://<yourusername>.github.io/portfolio/`.

2.  **Upload Files:**
    *   Push or upload all the files from this project (including the `projects/` folder and `assets/` folder) to the `main` (or `master`) branch of your new repository.

3.  **Enable GitHub Pages:**
    *   Go to your repository on GitHub.
    *   Click on the **Settings** tab.
    *   Scroll down to the **Pages** section in the left sidebar.
    *   Under "Build and deployment", set **Source** to `Deploy from a branch`.
    *   Under **Branch**, select `main` (or `master`) and the `/ (root)` folder.
    *   Click **Save**.
    *   Wait a few minutes. GitHub will provide you with the URL (e.g., `https://<yourusername>.github.io/`). Visit the URL to see your live site.

4.  **Custom Domain (Later):**
    *   In the **Pages** settings, enter your custom domain under the **Custom domain** field (e.g., `www.yourdomain.com`). Click **Save**.
    *   Go to your domain registrar (e.g., Namecheap, GoDaddy) and add the appropriate DNS records (CNAME or A records) as instructed by GitHub. 
    *   Ensure you check **Enforce HTTPS** once the certificate is provisioned.
    *   GitHub will automatically create a `CNAME` file in your repository root. Do not delete it.

5.  **Updating the Site:**
    *   Whenever you want to update text or add a project, simply edit the `.html` files locally, commit the changes, and push to the `main` branch. GitHub Pages will automatically update within a few minutes.

## Before Launch and Ongoing Maintenance

* Replace the example GitHub username and custom-domain values in this guide with the actual hosting details. Add canonical URLs, Open Graph URLs, and a `sitemap.xml` only after the public site URL is known; do not publish placeholder URLs.
* In the repository's **Settings > Pages**, enable **Enforce HTTPS** after GitHub provisions the certificate. Confirm the deployed site and all pages load over HTTPS.
* Before and after significant content changes, check the deployed site on narrow and wide screens, use Lighthouse for performance and accessibility checks, and verify that navigation and project images work.
* This site is static and currently has no forms or analytics. If adding either, choose a provider deliberately, disclose data collection in a privacy notice, and verify its security and accessibility.
* Keep project details, links, and screenshots current. Recheck the GitHub Pages deployment status when a release does not appear.