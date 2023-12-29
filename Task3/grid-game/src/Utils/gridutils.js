export const optionsList = [];
for (let i = 2; i <= 8; i++) {
  optionsList.push({
    value: i,
    label: String(i),
  });
}

export const handleInaction = () => {
  alert("CANNOT ESCAPE THE MATRIX - Andrew Tate");
};

export const keyPressUtil = (e, callback) => {
  if (e.key === "ArrowUp") {
    callback("up");
  } else if (e.key === "ArrowDown") {
    callback("down");
  } else if (e.key === "ArrowLeft") {
    callback("left");
  } else if (e.key === "ArrowRight") {
    callback("right");
  }
};
