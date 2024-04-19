/* eslint-disable react/prop-types */
import { Modal } from "antd";

const ModalDetailPost = ({ isModalOpen, data, handleOk }) => {
  return (
    <>
      <Modal
        title="Post Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <div>
          <div className="modal-outer">
            <dl className="divide-y divide-gray-100">
              <div className="section-wrapper">
                <dt className="section-title">ID</dt>
                <dd className="section-value">{data?.id}</dd>
              </div>
              <div className="section-wrapper">
                <dt className="section-title">User ID</dt>
                <dd className="section-value">{data?.userId}</dd>
              </div>
              <div className="section-wrapper">
                <dt className="section-title">Title</dt>
                <dd className="section-value">{data?.title}</dd>
              </div>
              <div className="section-wrapper">
                <dt className="section-title">Body</dt>
                <dd className="section-value">{data?.body}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalDetailPost;
