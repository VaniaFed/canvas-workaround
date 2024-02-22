const rand = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min) + min);

export const randColor = () => {
  const r = rand(0, 255);
  const g = rand(0, 255);
  const b = rand(0, 255);
  return `rgb(${r} ${g} ${b})`;
};
