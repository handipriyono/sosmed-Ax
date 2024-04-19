/* eslint-disable react/prop-types */
import { Modal } from "antd";

const ModalAddPost = ({ isModalOpen, handleOk, data, onCancel }) => {
  return (
    <>
      <Modal
        title={data?.id ? "Edit Post" : "Add New"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={onCancel}
        okText="Submit"
      >
        <div>
          <label htmlFor="title" className="section-title">
            Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="title"
              id="title"
              onChange={data?.handleChangeTitle}
              value={data?.title}
              className="text-input"
              placeholder="title of your post..."
            />
          </div>
        </div>

        <div className="mt-2">
          <label className="section-title">Post Body</label>
          <div>
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
export default ModalAddPost;
