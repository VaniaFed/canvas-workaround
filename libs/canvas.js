import { randColor } from "./utils";

export const fillCtxWithRects = (ctx, canvasWidth, canvasHeight, count) => {
  const sizeH = canvasWidth / count;
  const sizeV = canvasHeight / count;

  for (let i = 0; i < canvasWidth; i += sizeH) {
    for (let j = 0; j < canvasHeight; j += sizeV) {
      ctx.fillStyle = randColor();
      ctx.fillRect(i, j, sizeH, sizeV);
    }
  }
};
