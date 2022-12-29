import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  editUserFailure,
  editUserStart,
  editUserSuccess,
} from "../redux/reducers/author_slice";
import authorService from "../service/author_service";
import { ArticleForm } from "../ui";

function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const { user } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetail = async () => {
      try {
        setName(user.username);
        setEmail(user.email);
        setBio(user.bio);
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetail();
  }, [user]);

  const formSubmit = async (e) => {
    e.preventDefault();
    dispatch(editUserStart());
    const user = { name, email, bio };
    try {
      await authorService.postUser(user);
      dispatch(editUserSuccess(user));
      navigate("/user");
    } catch (error) {
      dispatch(editUserFailure(error));
    }
  };

  const formProps = {
    title: name,
    setTitle: setName,
    titlePlaceholder: "Name",
    description: email,
    setDescription: setEmail,
    descriptionPlaceholder: "Email",
    body: bio,
    setBody: setBio,
    bodyPlaceholder: "Bio",
    type: "email",
    formSubmit,
  };

  return (
    <div className="text-center">
      <h1>Edit-article</h1>
      <ArticleForm {...formProps} />
    </div>
  );
}

export default EditUser;
