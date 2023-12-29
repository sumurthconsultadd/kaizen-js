import { Select } from "antd";

const optionsList = [];
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

export const selectUtil = (type, rows, cols, handleResizeGrid) => {
  return (
    <div>
      {type}:{" "}
      <span>
        <Select
          options={optionsList}
          defaultValue={5}
          onChange={(value) =>
            type === "Rows"
              ? handleResizeGrid(value, cols)
              : handleResizeGrid(rows, value)
          }
        />
      </span>
    </div>
  );
};
