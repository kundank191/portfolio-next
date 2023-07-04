/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'

export const content = ["./src/**/*.{html,js}"]
export const theme = {
  extend: {
    fontFamily: {
      mont: ['var(--font-mont)', ...fontFamily.sans]
    }
  },
}
export const plugins = []

