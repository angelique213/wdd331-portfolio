
const root = document.documentElement;
const form = document.querySelector("#demo-form");
const styleToggle = document.querySelector("#style-toggle");
const accentPicker = document.querySelector("#accent-picker");
const thumbSize = document.querySelector("#thumb-size");
const focusSize = document.querySelector("#focus-size");
const priority = document.querySelector("#priority");
const status = document.querySelector("#form-status");

const defaults = {
  accent: "#2563eb",
  thumb: "20",
  focus: "3"
};

// Update the form colors and slider settings.
function updateSettings() {
  root.style.setProperty("--accent", accentPicker.value);
  root.style.setProperty("--thumb-size", `${thumbSize.value}px`);
  root.style.setProperty("--focus-size", `${focusSize.value}px`);

  document.querySelector("#thumb-output").textContent =
    `${thumbSize.value}px`;

  document.querySelector("#focus-output").textContent =
    `${focusSize.value}px`;
}

// Turn custom styling on or off.
styleToggle.addEventListener("change", () => {
  form.classList.toggle("styled", styleToggle.checked);
});

// Update settings when a control changes.
[accentPicker, thumbSize, focusSize].forEach(control => {
  control.addEventListener("input", updateSettings);
});

// Update the Project Priority number.
priority.addEventListener("input", () => {
  document.querySelector("#priority-output").textContent = priority.value;
});

// Restore the original blue settings.
document.querySelector("#reset-settings").addEventListener("click", () => {
  accentPicker.value = defaults.accent;
  thumbSize.value = defaults.thumb;
  focusSize.value = defaults.focus;

  styleToggle.checked = true;
  form.classList.add("styled");

  updateSettings();
});

// This is only a demo, so nothing gets submitted.
form.addEventListener("submit", event => {
  event.preventDefault();
  status.textContent = "Demo only — no information was sent.";
});

// CSS examples for each teaching topic.
const topics = {
  native: {
    title: "1. Native-first styling",
    description:
      "Start with the browser's built-in controls. accent-color changes the color of checkboxes and native sliders without rebuilding them.",
    code: `:root {
  --accent: #2563eb;
}

input[type="checkbox"] {
  accent-color: var(--accent);
}

/* Native sliders can also use accent-color. */
input[type="range"] {
  accent-color: var(--accent);
}`,
    action:
      'Check "Send me updates." Then change the Accent color picker at the top. The checkbox changes color without losing its native behavior.'
  },

  appearance: {
    title: "2. appearance: none",
    description:
      "appearance: none removes native visual styling so you can replace it. Use it carefully because removing a checkbox's appearance also removes its familiar visual states.",
    code: `/* Remove the default dropdown arrow. */
select {
  appearance: none;
}

/* Be careful with this: */
input[type="checkbox"] {
  appearance: none;
  /* You must recreate the visual states. */
}`,
    action:
      "Turn Custom styling off and on. Compare the Project Type dropdown arrow. We keep the checkbox native for accessibility."
  },

  select: {
    title: "3. Select and file inputs",
    description:
      "You can style the dropdown box and replace its arrow, but the open options menu has browser and operating system limitations. File inputs have a special selector for their button.",
    code: `select {
  appearance: none;
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 42px;
}

input[type="file"]::file-selector-button {
  background: var(--accent);
  color: white;
  padding: 10px 14px;
  border: none;
  border-radius: 7px;
}`,
    action:
      'Open Project Type to show the options. Then point to the blue Choose File button and the "No file chosen" text. You do not need to select a file.'
  },

  caret: {
    title: "4. caret-color",
    description:
      "The caret is the blinking insertion cursor inside a text field. caret-color changes the cursor color without changing the text color.",
    code: `input[type="text"],
input[type="email"],
textarea {
  caret-color: var(--accent);
}`,
    action:
      "Click Name and type a few letters. Pause to show the blue blinking caret. The typed text remains dark."
  },

  focus: {
    title: "5. :focus-visible",
    description:
      "Keyboard users need to see which control has focus. A shared :focus-visible rule makes the focus outline consistent. Never remove an outline without a visible replacement.",
    code: `input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible {
  outline: var(--focus-size) solid var(--accent);
  outline-offset: 3px;
}

input[type="range"]:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

input[type="range"]:focus-visible::-moz-range-thumb {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}`,
    action:
      "Click Name, then press Tab to move to Email and Project Type. Change Focus outline from 3px to 6px, then repeat to see a thicker blue outline."
  },

  range: {
    title: "6. Range slider styling",
    description:
      "The track is the line, and the thumb is the circle. Different browsers use different pseudo-elements. Our custom slider allows changing the thumb size, not just its color.",
    code: `input[type="range"] {
  appearance: none;
  background: transparent;
}

input[type="range"]::-webkit-slider-runnable-track {
  background: #c4c4c4;
  height: 6px;
}

input[type="range"]::-moz-range-track {
  background: #c4c4c4;
  height: 6px;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  background: var(--accent);
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 50%;
  margin-top: calc((6px - var(--thumb-size)) / 2);
}

input[type="range"]::-moz-range-thumb {
  background: var(--accent);
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 50%;
}`,
    action:
      "Move Project Priority to change its number. Then move Slider thumb size from 20px to 36px and watch the blue circle on Project Priority grow."
  },

  sizing: {
    title: "7. field-sizing and textarea",
    description:
      "A textarea can be manually resized with resize: vertical. field-sizing: content is another option that lets supported controls grow with their content.",
    code: `/* Used in this demo */
textarea {
  resize: vertical;
}

/* Alternative: automatic content sizing */
textarea {
  field-sizing: content;
  min-height: 100px;
  max-height: 300px;
}`,
    action:
      "Type in Message and drag its bottom-right corner downward. Explain that this demo uses manual resizing, while field-sizing: content is an alternative."
  },

  access: {
    title: "8. Accessibility",
    description:
      "Keep labels connected to inputs, preserve visible focus rings, and consider Windows High Contrast Mode. Custom controls should be tested in different browsers and forced-colors environments.",
    code: `/* Example HTML:
<label for="name">Name</label>
<input id="name" type="text">
*/

@media (forced-colors: active) {
  select {
    appearance: auto;
    background-image: none;
  }

  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline-color: Highlight;
  }
}`,
    action:
      "Point to the forced-colors fallback and explain why custom controls need high-contrast testing. Use Tab to show that keyboard focus remains visible."
  }
};

// Switch between the eight teaching topics.
const topicButtons = document.querySelectorAll(".topic-button");

function showTopic(key) {
  const topic = topics[key];

  document.querySelector("#topic-title").textContent = topic.title;
  document.querySelector("#topic-description").textContent =
    topic.description;
  document.querySelector("#topic-code").textContent = topic.code;
  document.querySelector("#topic-action").textContent = topic.action;

  topicButtons.forEach(button => {
    const active = button.dataset.topic === key;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

topicButtons.forEach(button => {
  button.addEventListener("click", () => {
    showTopic(button.dataset.topic);
  });
});

// Copy the displayed CSS example.
document.querySelector("#copy-code").addEventListener("click", async () => {
  const code = document.querySelector("#topic-code").textContent;
  const copyButton = document.querySelector("#copy-code");

  try {
    await navigator.clipboard.writeText(code);
    copyButton.textContent = "Copied!";
  } catch {
    copyButton.textContent = "Select code to copy";
  }
});

// Start with the default settings and first topic.
updateSettings();
showTopic("native");
