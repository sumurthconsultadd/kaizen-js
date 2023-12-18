import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import ResetModal from "./ResetModal";
import "../CSS/counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleCounter = (type) => {
    type === "+" ? setCount(count + 1) : setCount(count - 1);
  };

  useEffect(() => {
    count > 5 || count < -5 ? setShowModal(true) : setShowModal(false);
  }, [count]);

  return (
    <div className="f jc-c ai-c">
      <div className="f jc-c ai-c fd-c">
        <h1>Value of Counter: {count}</h1>
        <div className="f jc-c ai-c fd-r">
          <Button disabled={showModal} onClick={() => handleCounter("+")}>
            Increase
          </Button>
          <Button disabled={showModal} onClick={() => handleCounter("-")}>
            Decrease
          </Button>
        </div>

        <Modal
          title="Reset"
          footer={null}
          open={showModal}
          maskClosable={false}
          onCancel={() => setShowModal(false)}
        >
          <ResetModal setCount={setCount} />
        </Modal>
      </div>
    </div>
  );
};

export default Counter;
