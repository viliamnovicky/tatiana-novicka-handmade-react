import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary-50: #ecfeff;
  --color-primary-100: #cffafe;
  --color-primary-200: #a5f3fc;
  --color-primary-300: #67e8f9;
  --color-primary-400: #22d3ee;
  --color-primary-500: #06b6d4;
  --color-primary-600: #0891b2;
  --color-primary-700: #0e7490;
  --color-primary-800: #155e75;
  --color-primary-900: #164e63;
  --color-primary-950: #083344;

  --color-secondary-50: #f0fdfa;
  --color-secondary-100: #ccfbf1;
  --color-secondary-200: #99f6e4;
  --color-secondary-300: #5eead4;
  --color-secondary-400: #2dd4bf;
  --color-secondary-500: #14b8a6;
  --color-secondary-600: #0d9488;
  --color-secondary-700: #0f766e;
  --color-secondary-800: #115e59;
  --color-secondary-900: #134e4a;
  --color-secondary-950: #042f2e;

  --color-grey-50: #fafaf9;
  --color-grey-100: #f5f5f4;
  --color-grey-200: #e7e5e4;
  --color-grey-300: #d6d3d1;
  --color-grey-400: #a8a29e;
  --color-grey-500: #78716c;
  --color-grey-600: #57534e;
  --color-grey-700: #44403c;
  --color-grey-800: #292524;
  --color-grey-900: #1c1917;
  --color-grey-950: #0c0a09;

  --color-green-50: #e8fff0;
--color-green-100: #e1ffea;
--color-green-200: #dbffe4;
--color-green-300: #d4ffdd;
--color-green-400: #ceffd7;
--color-green-500: #cafad3;
--color-green-600: #c6f5ce;
--color-green-700: #c2f0ca;
--color-green-800: #beebc6;
--color-green-950: #b9e6c2;

--color-success: #34d399;
--color-danger: #fb923c;
--color-error: #f87171;

--gradient-200: linear-gradient(135deg, var(--color-secondary-200), var(--color-primary-200));
--gradient-400: linear-gradient(165deg, var(--color-primary-400), var(--color-secondary-400));
--gradient-400-fade: linear-gradient(90deg, transparent, var(--color-primary-400), var(--color-secondary-400), transparent);

  --backdrop-color: rgba(103, 232, 249, .1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --font-dancing: "Dancing Script", cursive;
}



*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: all 0.3s, border 0.3s;
  font-family: 'Quicksand', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

.navbar-visible-phone {
  visibility: visible !important;
  opacity: 1 !important;
  width: 100vw;
}

/* SCROLLBAR*/

/* width */
::-webkit-scrollbar {
  width: 1.3rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-primary-300);
  border-radius: 1rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-500);
}

@keyframes rotate-hamburger {
  from {transform: rotate(-45deg)}
  to {transform: rotate(0deg)}
}
`;
export default GlobalStyles;
