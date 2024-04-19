import MenuAction from "../../commons/components/actions";
import ModalDetailPost from "./components/modal-detail-post";
import ModalAddPost from "./components/modal-add-post";
import ModalConfirm from "../../commons/components/modal-confirm";
import usePosts from "./hooks/usePosts";

export default function PostList() {
  const {
    posts,
    field,
    selected,
    onSetSelected,
    activeModalName,
    setActiveModalName,
    onOpenDetail,
    onOpenAddPost,
    handleOkPost,
    onSubmit,
    onDeletePost,
  } = usePosts();

  const listMenu = (d) => {
    return [
      {
        title: "View Detail Post",
        handleClick: (item) => {
          onOpenDetail(item);
        },
      },
      {
        title: "View Detail Comments",
        handleClick: () => {},
        path: `/comments/${d?.id}`,
      },
      {
        title: "Edit",
        handleClick: () => {
          setActiveModalName("edit-post");
          onSetSelected(d);
        },
      },
      {
        title: "Delete",
        handleClick: () => {
          setActiveModalName("delete-post");
          onSetSelected(d);
        },
      },
    ];
  };

  return (
    <div className="content-wrapper">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="title-section font-bold">Posts Lists</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all posts.</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" onClick={onOpenAddPost} className="btn-act">
            Add Post
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="table-inner">
          <thead>
            <tr>
              <th scope="col" className="column-general">
                ID
              </th>
              <th scope="col" className="hidden column-general">
                UserId
              </th>
              <th scope="col" className="column-general">
                Title
              </th>
              <th scope="col" className="hidden column-general">
                Body
              </th>
              <th scope="col" className="hidden column-general">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {posts?.map((post) => (
              <tr key={post?.id}>
                <td className="td-cell">{post?.id}</td>
                <td className="hidden td-cell">{post?.userId}</td>
                <td className="td-cell">{post?.title}</td>
                <td className="hidden td-cell">{post?.body}</td>
                <td className="td-cell">
                  <MenuAction listMenu={listMenu(post)} item={post} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ModalDetailPost
          data={selected}
          isModalOpen={activeModalName === "detail-post"}
          handleOk={handleOkPost}
        />

        <ModalAddPost
          data={field}
          isModalOpen={
            activeModalName === "add-post" || activeModalName === "edit-post"
          }
          onCancel={handleOkPost}
          handleOk={onSubmit}
        />

        <ModalConfirm
          isModalOpen={activeModalName === "delete-post"}
          title="Confirm"
          handleCancel={handleOkPost}
          handleOk={onDeletePost}
          okTitle={"Yes, Delete"}
          text="Are you sure want to delete this post? the selected post will be deleted from system!"
        />
      </div>
    </div>
  );
}
