import { useEffect, useState } from "react";

const isBrowser =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement === "function";

// Default configuration for different screen sizes
let responsiveConfig = {
  xs: 0,
  sm: 576,
  isMobile: 768,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Set to store all subscribers
const subscribers = new Set();

// Information about the current screen size
let info = {};

// Handle window resize events
function handleResize() {
  const oldInfo = { ...info };
  calculate();
  if (JSON.stringify(oldInfo) === JSON.stringify(info)) return;
  for (const subscriber of subscribers) {
    subscriber();
  }
}

// Flag to indicate if we are currently listening for resize events
let listening = false;

// Calculate the current screen size information
function calculate() {
  if (!isBrowser) return;

  const width = window.innerWidth;
  const newInfo = {};
  let shouldUpdate = false;

  for (const key of Object.keys(responsiveConfig)) {
    newInfo[key] = width >= responsiveConfig[key];
    if (newInfo[key] !== info[key]) {
      shouldUpdate = true;
    }
  }

  if (shouldUpdate) {
    info = newInfo;
  }
}

// Update the responsive configuration
export function configResponsive(config) {
  responsiveConfig = config;
  if (info) calculate();
}

// React hook to get the current screen size information
export default function useResponsive() {
  if (isBrowser && !listening) {
    info = {};
    calculate();
    window.addEventListener("resize", handleResize);
    listening = true;
  }

  const [state, setState] = useState(info);

  useEffect(() => {
    if (!isBrowser) return;

    // Handle React 18's StrictMode causing double mount behavior
    if (!listening) {
      window.addEventListener("resize", handleResize);
    }

    const subscriber = () => {
      setState({ ...info });
    };

    subscribers.add(subscriber);

    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        window.removeEventListener("resize", handleResize);
        listening = false;
      }
    };
  }, []);

  return { screenSize: state, isMobile: !state?.lg };
}
