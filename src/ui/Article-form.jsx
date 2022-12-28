import React from "react";
import { useSelector } from "react-redux";
import { Input, TextArea } from ".";

function ArticleForm(props) {
  const { isLoading } = useSelector((state) => state.article);
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  } = props;

  return (
    <form className="w-50 mx-auto my-2" onSubmit={formSubmit}>
      <Input label={"Title"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea label={"Body"} state={body} setState={setBody} height="250px" />
      <button
        className="w-100 btn btn-lg btn-primary mt-3"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? `loading...` : `Create`}
      </button>
    </form>
  );
}

export default ArticleForm;
