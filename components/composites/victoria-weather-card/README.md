# Weather Card – Composite Component

A weather card that shows the current weather in Trondheim using live data from an external API.

Made by Victoria as part of the composite component assignment.

## Features

- Shows the city name and today's date in English
- Fetches the current temperature live from the Open-Meteo API
- Shows a weather icon and a short weather description
- Displays an error message if the weather data cannot be loaded
- Responsive card layout, centered on the page

## Files

- `index.html` – the structure of the card
- `style.css` – styling, using CSS variables for colors, fonts and border radius
- `script.js` – fetches the weather data and updates the card
- `README.md` – this file

## How it works

The script uses `fetch` with `async/await` to get weather data from the [Open-Meteo API](https://open-meteo.com/), which is free and does not require an API key. The temperature is read from the response and inserted into the card with a template literal. The date is formatted with `toLocaleDateString("en-GB")`. If anything goes wrong, the `catch` block shows an error message on the card instead.

## How to run

Open `index.html` with Live Server in VS Code.

## Use of AI and earlier work

I used Claude (AI by Anthropic) as a learning aid during this task, mainly for explanations, guidance on where code should be placed, and suggested code that I then adapted and tested. Claude also helped me understand the Git workflow (branches, stash and checkout).

The card reuses some of the styling approach from my profile card composite in week 2, such as the CSS variables in `:root`, the centered card layout and the font setup.
