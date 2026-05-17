import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo 500
        secondary: "#06b6d4", // Cyan 500
        accent: "#8b5cf6", // Violet 500
        darkAccent: "#020617", // Slate 950 (Deep Background)
        background: "var(--background, #09090b)", // zinc-950 (Main Background)
        glass: "rgba(15, 23, 42, 0.7)", // Slate 900 translucent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["dark"], // Switch DaisyUI to dark theme
  }
}
