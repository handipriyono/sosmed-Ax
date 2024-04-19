import { Link } from "react-router-dom";
import useAlbums from "./hooks/useAlbum";

export default function AlbumLists() {
  const { albumLists } = useAlbums();

  return (
    <div className="content-wrapper">
      <div className="sub-wrapper">
        <div className="sm:flex-auto">
          <h1 className="title-section">Album Lists</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all albums.</p>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="table-inner">
          <thead>
            <tr>
              <th scope="col" className="column-first">
                id
              </th>
              <th scope="col" className="column-general">
                User Id
              </th>
              <th scope="col" className="column-general">
                Album Title
              </th>
              <th scope="col" className="column-general">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {albumLists?.map((album) => (
              <tr key={album?.id}>
                <td className="px-3 td-cell">{album?.id}</td>
                <td className="hidden td-cell">{album?.userId}</td>
                <td className="td-cell">{album?.title}</td>
                <td className="td-cell">
                  <Link to={`/photos/${album?.id}`}>
                    <button type="button" className="btn-general">
                      <p className="text-black capitalize">View All Photos</p>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
