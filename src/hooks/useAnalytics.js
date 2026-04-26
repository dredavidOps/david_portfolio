import { useEffect } from 'react'
import { ENV } from '../config/env'

/**
 * Initialize analytics tracking in production.
 *
 * Usage: Call useAnalytics() once in your App component.
 *
 * Supports:
 *   - Google Analytics 4 (VITE_ANALYTICS_ID starting with G-)
 *   - Plausible (VITE_ANALYTICS_ID starting with plausible:)
 *
 * To enable, add to your .env file:
 *   VITE_ANALYTICS_ID=G-XXXXXXXXXX
 */
export function useAnalytics() {
  useEffect(() => {
    if (!ENV.PROD || !ENV.ANALYTICS_ID) return

    // Google Analytics 4
    if (ENV.ANALYTICS_ID.startsWith('G-')) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ENV.ANALYTICS_ID}`
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      window.gtag = function () {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', ENV.ANALYTICS_ID)
    }

    // Plausible Analytics
    if (ENV.ANALYTICS_ID.startsWith('plausible:')) {
      const domain = ENV.ANALYTICS_ID.replace('plausible:', '')
      const script = document.createElement('script')
      script.defer = true
      script.datasetDomain = domain
      script.src = 'https://plausible.io/js/script.js'
      document.head.appendChild(script)
    }
  }, [])
}
