
// UNIT 5 — TYPOGRAPHY TEACHING DEMO

// PARTS 1, 2, AND 3

const ratioSlider = document.querySelector("#ratio-slider");
const ratioDisplay = document.querySelector("#ratio-display");
const tableRatio = document.querySelector("#table-ratio");
const scaleTable = document.querySelector("#scale-table");
const resetButton = document.querySelector("#reset-ratio");
const unrounded = document.querySelector("#unrounded");
const rounded = document.querySelector("#rounded");

const baseSize = 16;

const scaleSteps = [
  { name: "Extra Small", exponent: -2 },
  { name: "Small", exponent: -1 },
  { name: "Medium (Base)", exponent: 0 },
  { name: "Large", exponent: 1 },
  { name: "Extra Large", exponent: 2 },
  { name: "2XL", exponent: 3 },
  { name: "3XL", exponent: 4 }
];

function updateScaleTable(ratio) {
  scaleTable.innerHTML = "";

  scaleSteps.forEach((step) => {
    const size =
      baseSize * Math.pow(ratio, step.exponent);

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = step.name;

    const exponentCell = document.createElement("td");
    exponentCell.textContent = step.exponent;

    const sizeCell = document.createElement("td");
    sizeCell.textContent = `${size.toFixed(2)}px`;

    const previewCell = document.createElement("td");
    const preview = document.createElement("span");

    preview.className = "scale-sample";
    preview.textContent = "Aa";
    preview.style.fontSize = `${size}px`;

    previewCell.appendChild(preview);

    row.append(
      nameCell,
      exponentCell,
      sizeCell,
      previewCell
    );

    scaleTable.appendChild(row);
  });
}

function updateRounding(ratio) {
  const calculated =
    baseSize * Math.pow(ratio, 3);

  unrounded.textContent =
    `${calculated.toFixed(2)}px`;

  rounded.textContent =
    `${Math.round(calculated)}px`;
}

function updateRatioDemo() {
  const ratio = Number(ratioSlider.value);

  // Update the CSS variable
  document.documentElement.style.setProperty(
    "--ratio",
    ratio
  );

  // Update the displayed values
  ratioDisplay.textContent = ratio.toFixed(3);
  tableRatio.textContent = ratio.toFixed(3);

  // Update the table and rounding example
  updateScaleTable(ratio);
  updateRounding(ratio);
}

ratioSlider.addEventListener(
  "input",
  updateRatioDemo
);

resetButton.addEventListener("click", () => {
  ratioSlider.value = "1.25";
  updateRatioDemo();
});

// PART 4 — RESPONSIVE PREVIEW

const widthSlider = document.querySelector("#width-slider");

const resizablePreview =
  document.querySelector("#resizable-preview");

const previewWidthLabel =
  document.querySelector("#preview-width-label");

function updateResponsivePreview() {
  const width = Number(widthSlider.value);

  // Change the preview container width
  resizablePreview.style.width = `${width}px`;

  // Update the width label
  previewWidthLabel.textContent = `${width}px`;
}

widthSlider.addEventListener(
  "input",
  updateResponsivePreview
);

// INITIALIZE BOTH DEMONSTRATIONS

updateRatioDemo();
updateResponsivePreview();
