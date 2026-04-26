/**
 * Centralized environment variable access.
 *
 * In Vite, only env vars prefixed with VITE_ are exposed to client-side code.
 * Access them via import.meta.env.VITE_*.
 *
 * Available .env files (loaded in order, last wins):
 *   .env                — loaded in all cases
 *   .env.local          — loaded in all cases, ignored by git
 *   .env.[mode]         — loaded for specific mode (e.g., .env.production)
 *   .env.[mode].local   — loaded for specific mode, ignored by git
 */

export const ENV = {
  /** Current mode: 'development' | 'production' */
  MODE: import.meta.env.MODE,

  /** Whether running in dev mode */
  DEV: import.meta.env.DEV,

  /** Whether running in production mode */
  PROD: import.meta.env.PROD,

  /** Base public URL */
  BASE_URL: import.meta.env.BASE_URL,

  // --- Custom VITE_ variables ---

  /** Public site URL (for SEO, meta tags, sitemap) */
  SITE_URL: import.meta.env.VITE_SITE_URL || window.location.origin,

  /** Contact form submission endpoint */
  CONTACT_FORM_URL: import.meta.env.VITE_CONTACT_FORM_URL,

  /** Analytics tracking ID */
  ANALYTICS_ID: import.meta.env.VITE_ANALYTICS_ID,

  /** LinkedIn profile URL */
  LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/davidyaotse',

  /** GitHub profile URL */
  GITHUB_URL: import.meta.env.VITE_GITHUB_URL || 'https://github.com/dredavidOps',

  /** Contact email address */
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'david.yaotse1@gmail.com',

  /** CV / Resume download URL */
  CV_URL: import.meta.env.VITE_CV_URL || '/cv.pdf',
}
