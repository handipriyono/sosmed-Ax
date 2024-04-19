/* eslint-disable react/prop-types */

import { Modal } from "antd";

const ModalAddComments = ({ isModalOpen, handleOk, data, onCancel }) => {
  return (
    <>
      <Modal
        title={data?.id ? "Edit Comments" : "Add Comments"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={onCancel}
        okText="Submit"
      >
        <div className="mt-2">
          <label htmlFor="title" className="section-title">
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              value={data?.name}
              onChange={data?.handleChangeName}
              className="text-input"
              placeholder="your name..."
            />
          </div>
        </div>

        <div className="mt-2">
          <label htmlFor="title" className="section-title">
            Email
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="email"
              id="email"
              onChange={data?.handleChangeEmail}
              value={data?.email}
              className="text-input"
              placeholder="your email..."
            />
          </div>
        </div>

        <div className="mt-2">
          <label htmlFor="comment" className="section-title">
            Body
          </label>
          <div className="mt-2">
            <textarea
              rows={4}
              name="body"
              id="body"
              onChange={data?.handleChangeBody}
              value={data?.body}
              className="text-input"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalAddComments;
