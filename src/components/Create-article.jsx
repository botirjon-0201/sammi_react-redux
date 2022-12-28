import React, { useState } from "react";
import { Form } from "../ui";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="text-center">
      <h1>Create-article</h1>
      <Form
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
      />
    </div>
  );
}

export default CreateArticle;
