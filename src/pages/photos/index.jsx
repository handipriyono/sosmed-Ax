import { useState } from "react";
import ModalPhotos from "./components/modal-photos";
import usePhoto from "./hooks/usePhoto";

export default function PhotoAlbums() {
  const { photos } = usePhoto();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState({});

  const onOpenDetail = (item) => {
    setIsModalOpen(true);
    setSelected(item);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setSelected({});
  };

  return (
    <div className="content-wrapper">
      <div className="sub-wrapper">
        <div className="sm:flex-auto">
          <h1 className="title-section">Photo Albums lists</h1>
          <p className="mt-2 text-sm text-gray-700">A list of photo albums.</p>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="table-inner">
          <thead>
            <tr>
              <th scope="col" className="column-general">
                Image
              </th>
              <th scope="col" className="column-general">
                ID
              </th>
              <th scope="col" className="hidden column-general">
                Album ID
              </th>
              <th scope="col" className="hidden column-general">
                Title
              </th>

              <th scope="col" className="hidden column-general">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {photos?.map((photo) => (
              <tr key={photo?.id}>
                <td className=" px-3 py-4 text-sm text-gray-500">
                  <img
                    className="rounded"
                    alt={photo?.thumbnailUrl}
                    src={photo?.thumbnailUrl}
                    width={100}
                    height={100}
                  />
                </td>
                <td className="td-cell ">{photo.id}</td>
                <td className="hidden td-cell ">{photo.albumId}</td>
                <td className="hidden td-cell ">{photo.title}</td>

                <td className="td-cell">
                  <button
                    type="button"
                    onClick={() => onOpenDetail(photo)}
                    className="btn-general"
                  >
                    <p className="text-black capitalize">View Detail photo</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalPhotos
          data={selected}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
        />
      </div>
    </div>
  );
}
