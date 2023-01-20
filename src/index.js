import "./styles.css";
const box = document.getElementById("draggable-box");
let isDragging = false;
let offset = { x: 0, y: 0 };

box.addEventListener("mousedown", (e) => {
  isDragging = true;

  offset.x = e.clientX - box.offsetLeft;
  offset.y = e.clientY - box.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  box.style.position = "absolute";
  box.style.left = `${e.clientX - offset.x}px`;
  box.style.top = `${e.clientY - offset.y}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
