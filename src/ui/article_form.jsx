import React from "react";
import { useSelector } from "react-redux";
import { Input, TextArea } from ".";

function ArticleForm(props) {
  const { isLoading } = useSelector((state) => state.article);
  const {
    title,
    setTitle,
    titlePlaceholder,
    description,
    setDescription,
    descriptionPlaceholder,
    body,
    setBody,
    bodyPlaceholder,
    type,
    formSubmit,
  } = props;

  return (
    <form className="w-50 mx-auto my-2" onSubmit={formSubmit}>
      <Input label={titlePlaceholder} state={title} setState={setTitle} />
      <TextArea
        type={type}
        label={descriptionPlaceholder}
        state={description}
        setState={setDescription}
      />
      <TextArea
        label={bodyPlaceholder}
        state={body}
        setState={setBody}
        height="250px"
      />
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
