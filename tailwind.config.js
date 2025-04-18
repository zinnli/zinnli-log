/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8A27",
        primary_sub: "#FFBE87",
        white: "#fafaf8",
        black: "#1a1a1a",
        gray: "#9B9B9B",
        gray_sub: "#B4B4B4",
      },
      fontSize: {
        14: ["14px"],
        16: ["16px"],
        18: ["18px"],
        20: ["20px"],
        25: ["25px"],
        22: ["22px"], //30 -> 22 변경
        36: ["36px"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontSize: "30px !important" },
            h2: { fontSize: "25px !important" },
            h3: { fontSize: "22px !important" },
            h4: { fontSize: "18px !important" },
            "h2, h3, h4": {
              scrollMarginTop: "2rem",
              margin: "20px 0 !important",
            },
            p: {
              margin: "0.8rem 0 !important",
              fontSize: 15,
            },
            ".callout-contents > p": {
              margin: 0,
            },

            code: {
              counterReset: "line",
            },

            hr: {
              margin: "10px 0 !important",
            },

            ":not(pre) > code": {
              fontWeight: "inherit",
              position: "relative",
              bottom: 1,
              margin: "0 3px",
              color: "#FF8A27",
              backgroundColor: "rgba(255,184,124,0.1)",
              fontFamily: 'D2Coding, "D2 coding", monospace',
              borderRadius: 3,
              padding: "0.2em 0.4em",
              overflowWrap: "break-word",
            },

            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },

            "code[data-line-numbers] > [data-line]::before": {
              counterIncrement: "line",
              content: "counter(line)",

              /* Other styling */
              display: "inline-block",
              width: "1rem",
              marginRight: "1.2rem",
              textAlign: "right",
              color: "lightgrey",
              fontSize: "0.75rem",
            },

            'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
              width: "1rem",
            },

            'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
              width: "2rem",
            },

            pre: {
              paddingRight: 0,
              paddingLeft: 0,
              color: "#1a1a1a",
              backgroundColor: "#fafaf8",
              border: "1px solid #B4B4B4",
            },

            "pre > code > span": {
              paddingLeft: "1.1rem",
              paddingRight: "1rem",
            },

            "pre code span": {
              color: "var(--shiki-light)",
            },

            ".project img": {
              marginTop: "0px !important",
            },

            ".project p,ul,li": {
              margin: "5px 0 !important",
              fontSize: 15,
            },

            u: {
              textUnderlineOffset: "4px",
              textDecorationThickness: 1,
              fontWeight: 600,
            },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [typography],
};
