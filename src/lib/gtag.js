// Google Analytics utility functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Check if GA is enabled (only in production or if explicitly enabled)
export const isGAEnabled = GA_TRACKING_ID && typeof window !== 'undefined';

// Log page views
export const pageview = (url) => {
  if (isGAEnabled) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({ action, category, label, value }) => {
  if (isGAEnabled) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

