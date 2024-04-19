import { useGetListPost } from "./usePostQuery";
import { useState } from "react";
import { useParams } from "react-router-dom";

const usePosts = () => {
  let { userId } = useParams();
  const [activeModalName, setActiveModalName] = useState("");
  const [selected, setSelected] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { posts, createPost, updatePost, deletePost } = useGetListPost();

  const onSetSelected = (p) => {
    setSelected(p);
    setTitle(p.title);
    setBody(p.body);
  };

  const onDeletePost = () => {
    deletePost(selected?.id);
    handleOkPost();
  };

  const onSubmit = () => {
    const isEdit = selected.id ? true : false;
    if (!isEdit) {
      createPost({
        title,
        body,
        userId: Number(userId),
      });
    } else {
      updatePost({
        id: selected?.id,
        title,
        body,
        userId: Number(userId),
      });
    }
    setActiveModalName("");
    setSelected({});
    setTitle("");
    setBody("");
  };

  const onOpenDetail = (item) => {
    setActiveModalName("detail-post");
    onSetSelected(item);
  };

  const onOpenAddPost = () => {
    setActiveModalName("add-post");
  };

  const handleOkPost = () => {
    setActiveModalName("");
    setSelected({});
    setTitle("");
    setBody("");
  };

  return {
    onDeletePost,
    onOpenDetail,
    onOpenAddPost,
    activeModalName,
    handleOkPost,
    setActiveModalName,
    posts,
    selected,
    onSubmit,
    onSetSelected,
    field: {
      title,
      body,
      handleChangeTitle: (e) => setTitle(e.target.value),
      handleChangeBody: (e) => setBody(e.target.value),
      id: selected.id,
    },
  };
};

export default usePosts;
