export const GA_TRACKING_ID = 'G-3V9MVCBWMK';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, item_details, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    items: item_details,
    value: value,
  })
}

// window.gtag('event', "add_to_cart", {
//     event_category: 'cart',
//     event_label: "Product: Calm Caps",
//     value: value,
//   })