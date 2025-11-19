# Cypress E2E Test Automation

Automated end-to-end test suite for Sauce Demo e-commerce website using Cypress with Page Object Model pattern.

## Prerequisites

- Node.js 18+
- npm
- Git

## Setup

```bash
git clone <repository-url>
cd friendly-umbrella
npm install
npx cypress install
cp cypress.env.example.json cypress.env.json
```

The `cypress.env.json` file contains test credentials and is gitignored. Copy the example file to create your local credentials file.

## Running Tests

### Interactive Mode

```bash
npm run test:open
```

### Headless Mode (Chrome)

```bash
npm test
```

### Specific Browser

```bash
npm run test:chrome
npm run test:firefox
```

### Single Test File

```bash
npx cypress run --browser chrome --spec "cypress/e2e/TS_005_TC_007.cy.js"
```

## Test Results

### Output

- ✓ = Passed test
- ✗ = Failed test
- Time shown in milliseconds

### Artifacts

- **Screenshots**: `cypress/screenshots/` (failures only)
- **Videos**: `cypress/videos/` (all runs)

### Test Coverage

- TS_005: Cart functionality
- TS_006: Remove items from cart
- TS_007: Remove items during checkout
- TS_008: Checkout button functionality
- TS_009: Checkout form validation
- TS_010: Order placement and cancellation

## Project Structure

```
cypress/
├── e2e/              # Test files
├── page-object/      # Page Object Model classes
├── support/          # Custom commands and test data
├── screenshots/     # Failure screenshots
└── videos/          # Test execution videos
```

Test data is centralized in `cypress/support/testData.js` for easy maintenance and updates.

## CI/CD

Tests run automatically on PRs and pushes to `main`, `master`, or `develop` branches via GitHub Actions.

View results in the **Actions** tab. Download artifacts (screenshots/videos) if tests fail.

## Troubleshooting

**Cypress not found:**
```bash
npx cypress install
```

**Dependencies issue:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tests timeout:**
- Verify base URL is accessible: `https://www.saucedemo.com/`
- Check network connectivity
