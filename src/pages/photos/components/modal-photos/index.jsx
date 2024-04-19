/* eslint-disable react/prop-types */
import { Modal } from "antd";

const ModalPhotos = ({ isModalOpen, data, handleOk }) => {
  return (
    <>
      <Modal
        title="Photo Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <div>
          <div className="modal-outer">
            <dl className="divide-y divide-gray-100">
              <div className="section-wrapper">
                <dt className="section-title">Album ID</dt>
                <dd className="section-value">{data?.albumId}</dd>
              </div>

              <div className="section-wrapper">
                <dt className="section-title">ID</dt>
                <dd className="section-value">{data?.id}</dd>
              </div>

              <div className="section-wrapper">
                <dt className="section-title">Title</dt>
                <dd className="section-value">{data?.title}</dd>
              </div>

              <div className="section-wrapper">
                <dt className="section-title">Image</dt>
                <dd className="section-value">
                  <img
                    className="rounded"
                    alt={data?.thumbnailUrl}
                    src={data?.thumbnailUrl}
                    width={150}
                    height={150}
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalPhotos;
