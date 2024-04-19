import { useGetListComments } from "./useCommentsQuery";
import { useState } from "react";
import { useParams } from "react-router-dom";

const useComments = () => {
  let { postId } = useParams();
  const [activeModalName, setActiveModalName] = useState("");

  const [selected, setSelected] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const { comments, createComment, updateComment, deleteComment } =
    useGetListComments();

  const onSetSelected = (p) => {
    setSelected(p);
    setName(p.name);
    setBody(p.body);
    setEmail(p.email);
  };

  const onDeleteComment = () => {
    deleteComment(selected?.id);
    handleOkComment();
  };

  const onSubmit = () => {
    const isEdit = selected.id ? true : false;
    if (!isEdit) {
      createComment({
        name,
        body,
        email,
        postId: Number(postId),
      });
    } else {
      updateComment({
        id: selected?.id,
        name,
        body,
        email,
        postId: Number(postId),
      });
    }
    setActiveModalName("");
    setSelected({});
    setName("");
    setBody("");
    setEmail("");
  };

  const onOpenAddComments = () => {
    setActiveModalName("add-comments");
  };

  const handleOkComment = () => {
    setActiveModalName("");
    setSelected({});
    setName("");
    setBody("");
    setEmail("");
  };

  return {
    onDeleteComment,
    onOpenAddComments,
    activeModalName,
    handleOkComment,
    setActiveModalName,
    comments,
    selected,
    onSubmit,
    onSetSelected,
    field: {
      name,
      body,
      email,
      handleChangeName: (e) => setName(e.target.value),
      handleChangeBody: (e) => setBody(e.target.value),
      handleChangeEmail: (e) => setEmail(e.target.value),
      id: selected.id,
    },
  };
};

export default useComments;
