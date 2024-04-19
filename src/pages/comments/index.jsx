import MenuAction from "../../commons/components/actions";
import ModalAddComments from "./components/modal-add-comments";
import ModalConfirm from "../../commons/components/modal-confirm";
import useComments from "./hooks/useComments";

export default function Comments() {
  const {
    comments,
    onDeleteComment,
    onOpenAddComments,
    activeModalName,
    handleOkComment,
    setActiveModalName,
    onSubmit,
    onSetSelected,
    field,
  } = useComments();

  const listMenu = (d) => {
    return [
      {
        title: "Edit",
        handleClick: () => {
          setActiveModalName("edit-comments");
          onSetSelected(d);
        },
      },
      {
        title: "Delete",
        handleClick: () => {
          onSetSelected(d);
          setActiveModalName("delete-comments");
        },
      },
    ];
  };

  return (
    <div className="content-wrapper">
      <div className="sub-wrapper">
        <div className="sm:flex-auto">
          <h1 className="title-section">Comments Lists</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all comments below.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" onClick={onOpenAddComments} className="btn-act">
            Add Comments
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="table-inner">
          <thead>
            <tr>
              <th scope="col" className="column-first">
                ID
              </th>
              <th scope="col" className="hidden column-general">
                Name
              </th>
              <th scope="col" className="hidden column-general">
                Email
              </th>
              <th scope="col" className="column-general">
                Body
              </th>
              <th scope="col" className="hidden column-general">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {comments?.map((comment) => (
              <tr key={comment?.id}>
                <td className="td-cell">{comment?.id}</td>
                <td className="hidden td-cell">{comment?.name}</td>
                <td className="hidden td-cell">{comment?.email}</td>
                <td className="td-cell">{comment?.body}</td>
                <td className="td-cell">
                  <MenuAction listMenu={listMenu(comment)} item={comment} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalAddComments
          isModalOpen={
            activeModalName === "add-comments" ||
            activeModalName === "edit-comments"
          }
          onCancel={handleOkComment}
          handleOk={onSubmit}
          data={field}
        />
        <ModalConfirm
          isModalOpen={activeModalName === "delete-comments"}
          title="Confirm"
          handleCancel={handleOkComment}
          handleOk={onDeleteComment}
          okTitle={"Yes, Delete"}
          text="Are you sure want to delete this comments? the selected comments will be deleted from system!"
        />
      </div>
    </div>
  );
}
