/* eslint-disable react/prop-types */
import { Modal } from "antd";

const ModalConfirm = ({
  title,
  text,
  handleOk,
  handleCancel,
  isModalOpen,
  okTitle,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        okText={okTitle || "Yes"}
        onCancel={handleCancel}
      >
        <p className="py-5 px-2">{text}</p>
      </Modal>
    </>
  );
};
export default ModalConfirm;
