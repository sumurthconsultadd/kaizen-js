/* eslint-disable react/prop-types */
import { Button } from "antd";
const ResetModal = ({ setCount }) => {
  return (
    <>
      <div>
        <h3>Click here to reset counter</h3>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </div>
    </>
  );
};

export default ResetModal;
