export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID!;

declare global {
  interface Window {
    fbq: any;
  }
}

export const pageview = () => {
  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

export const event = (name: string, options: Record<string, any> = {}) => {
  if (typeof window.fbq === "function") {
    window.fbq("track", name, options);
  }
};