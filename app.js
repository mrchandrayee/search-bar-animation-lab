(() => {
  const seat = document.querySelector("#searchSeat");
  const input = document.querySelector("#searchInput");
  const btn = document.querySelector("#searchBtn");
  const hint = document.querySelector("#searchHint");
  const KEYS = new Set(["Tab", "Enter", "Escape", "ArrowUp", "ArrowDown"]);
  let kbd = false;

  const isOpen = () => seat.dataset.state === "open";
  const hasText = () => input.value.trim().length > 0;

  const name = () =>
    !isOpen() ? "Search"
      : hasText() ? "Clear search"
      : "Close search";

  function syncControl() {
    btn.setAttribute("aria-label", name());
    btn.title = name();
    seat.dataset.hasText = hasText() ? "true" : "false";
  }

  function open() {
    seat.dataset.state = "open";
    hint.textContent = "Type to search · press Esc to close";
    syncControl();
    window.setTimeout(() => input.focus({ preventScroll: true }), 280);
  }

  function clear() {
    input.value = "";
    hint.textContent = "Search cleared";
    syncControl();
    input.focus({ preventScroll: true });
  }

  function close({ focus = false } = {}) {
    seat.dataset.state = "closed";
    input.value = "";
    hint.textContent = "";
    syncControl();
    if (focus) btn.focus({ preventScroll: true });
  }

  // One button, three jobs: open, clear, close.
  btn.addEventListener("click", () => {
    if (!isOpen()) { open(); return; }
    if (hasText()) { clear(); return; }
    close({ focus: true });
  });

  input.addEventListener("input", () => {
    syncControl();
    hint.textContent = hasText()
      ? `Ready to search for “${input.value.trim()}” · press Enter`
      : "Type to search · press Esc to close";
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close({ focus: true });
    }
    if (event.key === "Enter" && hasText()) {
      event.preventDefault();
      hint.textContent = `Demo search: “${input.value.trim()}”`;
      input.blur();
    }
  });

  // Track keyboard modality explicitly for a useful focus ring.
  window.addEventListener("keydown", (event) => {
    if (KEYS.has(event.key)) {
      kbd = true;
      document.documentElement.dataset.inputMode = "keyboard";
    }
  }, true);
  window.addEventListener("pointerdown", () => {
    kbd = false;
    document.documentElement.dataset.inputMode = "pointer";
  }, true);

  syncControl();
})();