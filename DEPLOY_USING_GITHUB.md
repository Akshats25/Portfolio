# How to Deploy Using GitHub

Since this is a Next.js project, there are two primary ways to deploy your portfolio using GitHub: deploying to Vercel (recommended) or deploying to GitHub Pages.

## Option 1: Deploy to Vercel via GitHub Integration (Recommended)

Vercel is the company behind Next.js. Deploying your GitHub repository to Vercel is the easiest and most optimized way to host a Next.js application.

### Steps:

1. **Push your code to GitHub:**
   Make sure all your latest changes are committed and pushed to a repository on your GitHub account.

2. **Log in to Vercel:**
   Go to [vercel.com](https://vercel.com/) and log in. It is highly recommended to "Continue with GitHub" so Vercel can access your repositories.

3. **Add a New Project:**
   - On your Vercel dashboard, click the **"Add New..."** button and select **"Project"**.
   - You will see a list of your GitHub repositories under "Import Git Repository".
   - Find your portfolio repository and click **"Import"**.

4. **Configure the Deployment:**
   - **Framework Preset:** Vercel will automatically detect that this is a Next.js project.
   - **Root Directory:** If your Next.js code is in the root of the repository, leave this as `./`.
   - **Environment Variables:** If your project uses any environment variables (e.g., API keys), expand the "Environment Variables" section and add them here.

5. **Deploy:**
   - Click the **"Deploy"** button.
   - Vercel will build your app and deploy it. Once finished, you will be given live URLs (e.g., `your-repo-name.vercel.app`).

**Continuous Deployment:** From now on, whenever you push changes to your `main` branch on GitHub, Vercel will automatically rebuild and update your live website.

---

## Option 2: Deploy to GitHub Pages

If you want to host your site directly on `username.github.io`, you can use GitHub Pages. This requires exporting your Next.js app as static HTML.

### Step 1: Update `next.config.js`

To deploy to GitHub Pages, Next.js needs to output static files. Open your `next.config.js` and add `output: 'export'`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
  
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
  
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig
```
*Note: Using `output: 'export'` means you cannot use Next.js server-side features like `getServerSideProps` or API Routes.*

### Step 2: Configure GitHub Repository Actions

1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. On the left sidebar, click on **Pages**.
4. Under "Build and deployment", set the **Source** to **GitHub Actions**.

### Step 3: Add the Deployment Workflow

1. In your GitHub repository, click on the **Actions** tab.
2. GitHub might recommend a **Next.js** workflow. If it does, click "Configure".
3. If not, click **"set up a workflow yourself"** and configure a file at `.github/workflows/nextjs.yml` with the official Next.js deployment script:

```yaml
# Sample workflow for building and deploying a Next.js site to GitHub Pages
#
# To get started with Next.js see: https://nextjs.org/docs/getting-started
#
name: Deploy Next.js site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          # Automatically inject basePath in your Next.js configuration file and disable
          # server side image optimization (https://nextjs.org/docs/api-reference/next/image#unoptimized).
          #
          # You may remove this line if you want to manage the configuration yourself.
          static_site_generator: next
      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          # Generate a new cache whenever packages or source files change.
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          # If source files changed but packages didn't, rebuild from a prior cache.
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Commit this file. GitHub Actions will automatically start building and deploying your project to GitHub Pages.
