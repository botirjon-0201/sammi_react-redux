import React from "react";
import { Input, TextArea } from "../ui";

function Form({ title, setTitle, description, setDescription, body, setBody }) {
  return (
    <form className="w-50 mx-auto my-2">
      <Input label={"Title"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea label={"Body"} state={body} setState={setBody} height="250px" />
      <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
        Create
      </button>
    </form>
  );
}

export default Form;
