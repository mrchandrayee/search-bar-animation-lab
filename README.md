# Search Bar Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/search-bar-animation-lab/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable HTML/CSS/JavaScript recreation of the supplied 5.43-second screen recording (720 × 1280, 30 fps).

## Run
1. Extract `search-bar-animation-lab.zip`.
2. Open `index.html` in Chrome, Edge, Firefox or Safari.
3. No npm install, build tool or server is required.

Optional local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## What the video shows

- Heading: **Search Bar Animation**
- A bright mint-green rounded demo stage on a near-black page.
- A white pill-shaped search field with a navy circular button.
- The search icon rotates/transforms to an X as the input opens.
- The search panel hinges into view with a 3D rotation.
- The demonstration types `aurora`, clears the text, and closes the search field.
- Credit line: `@_code_and_chill_`
- Three code panels: `index.html`, `app.css`, and `app.js`.

## Readable source details transcribed from the recording

### `index.html`
The video shows a `.scry__seat` wrapper, `.scry__shadow`, `.scry__field`, `.scry__sheen`, an input of `type="search"` with placeholder `Search something...`, and a `.scry__btn` button initially typed as `submit`. The comments explain that the seat keeps the open pill's footprint so the page does not reflow, and that the shadow is cast on the page rather than attached to the rotating panel.

### `app.css`
Visible CSS includes:
```css
--ease-open: cubic-bezier(.55, .08, .4, .95);

.scry__seat {
  perspective: calc(var(--w) * 2.2);
}

.scry__field {
  transform-origin: 50% 50%;
  transition: transform .633s var(--ease-open);
}

[data-state="closed"] .scry__field {
  transform: rotateX(-90deg);
}
```
The code panel comments that the easing was fitted to 19 frames, and that the field is hinged on its own long centre line.

### `app.js`
The visible button logic has three states in order:
1. If closed, call `open()`.
2. If open and text exists, call `clear()`.
3. If open and empty, call `close({ focus: true })`.

The button's accessible name changes between `Search`, `Clear search`, and `Close search`. The panel also explains tracking keyboard modality manually rather than relying on `:focus-visible` for a mouse-focused text field.

The project README and source-preview panels preserve these readable details. The original full repository is not present in the recording, so the runnable source is a reconstruction, not a byte-for-byte recovery.

## Implemented
- 3D hinged open/close animation with the video easing curve and duration.
- Fixed-size seat so opening the panel does not shift surrounding layout.
- Separate soft shadow, glossy sheen and icon-to-close transition.
- One button with open → clear → close behaviour.
- Search input, Enter demo action and Escape close.
- Dynamic accessible label and keyboard/pointer modality tracking.
- Responsive layout and reduced-motion support.

## Demo limitations
The search is frontend-only. Enter displays a demo confirmation; no search API, backend, indexing or results service is connected. Google Fonts are loaded online; system fallback fonts are used if unavailable.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
