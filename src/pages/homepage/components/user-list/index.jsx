import MenuAction from "../../../../commons/components/actions";
import useUsers from "../../hooks/useUsers";
import Loader from "../../../../commons/components/loader";

export default function UserList() {
  const { users, isLoading } = useUsers();

  const actionMenu = (item) => {
    return [
      {
        title: "View All Posts",
        handleClick: () => {},
        path: `/posts/${item?.id}`,
      },
      {
        title: "View All Albums",
        handleClick: () => {},
        path: `/albums/${item?.id}`,
      },
    ];
  };

  return (
    <div className="content-wrapper">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="title-section font-bold my-4 text-2xl">Users Lists</h1>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="table-inner mb-6">
          <thead className="">
            <tr>
              <th scope="col" className="column-general">
                ID
              </th>
              <th scope="col" className="column-general">
                Name
              </th>
              <th scope="col" className="hidden column-general">
                User Name
              </th>
              <th scope="col" className="hidden column-general">
                Email
              </th>
              <th scope="col" className="hidden column-general">
                Address
              </th>
              <th scope="col" className="hidden column-general">
                Company Name
              </th>
              <th scope="col" className="hidden column-general">
                View More
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {isLoading ? (
              <Loader />
            ) : (
              users?.map((person) => (
                <tr key={person?.email}>
                  <td className="td-cell">{person?.id}</td>
                  <td className="td-cell">{person?.name}</td>
                  <td className="hidden td-cell">{person?.username}</td>
                  <td className="hidden td-cell">{person?.email}</td>
                  <td className="hidden td-cell">
                    {person?.address?.street} {person?.address?.suite}
                    {person?.address?.city} {person?.address?.zipcode}
                  </td>
                  <td className="hidden td-cell">{person?.company?.name}</td>
                  <td className="td-cell">
                    <MenuAction listMenu={actionMenu(person)} item={person} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
