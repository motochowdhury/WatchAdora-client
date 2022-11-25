import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/login img@3x.png";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const createUser = (data) => {
    const { email, pass } = data;
    console.log(email, pass, data);
  };
  return (

};

export default Register;
