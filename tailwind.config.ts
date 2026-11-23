import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090F",
        primary: "#7A00FF",
        textPrimary: "#F8FAFC",
        surface: "rgba(255, 255, 255, 0.03)",
        surfaceBorder: "rgba(255, 255, 255, 0.08)",
        success: "#10B981",
      },
      fontFamily: {
        vazir: ["var(--font-vazirmatn)"],
      },
    },
  },
  plugins: [],
};
export default config;