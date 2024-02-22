import { fillCtxWithRects } from "./libs/canvas";
import "./style.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.clientWidth; // 300
const canvasHeight = canvas.clientHeight; // 300

let count = 10;
// const sizeH = canvasWidth / count;
// const sizeV = canvasHeight / count;

const rangeInput = document.querySelector("#count");
const rangeCount = document.querySelector(".range-count");

rangeInput.addEventListener("input", (e) => {
  count = e.target.value;
  rangeCount.innerHTML = count;

  fillCtxWithRects(ctx, canvasWidth, canvasHeight, count);
});

setInterval(() => {
  fillCtxWithRects(ctx, canvasWidth, canvasHeight, count);
}, 1000);
