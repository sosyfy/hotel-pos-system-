
import React, { useState } from "react";
import requestsServiceService from "../../services/requestsService.service";


function Login() {
  const [userInfo, setuserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });


  
  const [error, setError] = useState({
    message: "",
    color: "",
  });


  const handleChange = (event) => {
    setuserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    let data = JSON.stringify({
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
    });


    requestsServiceService.login(data)
      .then((res) => {

        setError({
          ...error,
          message: "Approved",
          color: "success",
        });


        let token = res.data.accessToken;
        let user = res.data.user 
        let clientId = res.data.user.id 
        let expiry = res.data.expiry 
        let type = res.data.user.type 
        

        localStorage.setItem("token", token);
        localStorage.setItem("user", user);
        localStorage.setItem("clientId", clientId);
        localStorage.setItem("expiry", expiry);
        localStorage.setItem("Type", type);


        window.location.reload();

      })
      .catch((err) => {
        let errorCode = err.response.data.message;
        setError({
          ...error,
          message: errorCode,
          color: "danger",
        });

      });

  //  ! to be deleted testing only 

     let user = {
          username: "",
          firstName: "",
          lastName: "",
          type: "ADMIN",
          email:"",
          id: "id"
     }


      localStorage.setItem("token", "todsfdgfhgmnbfdvcdkfodken");
      localStorage.setItem("user", user);
      localStorage.setItem("clientId", user.id);
      localStorage.setItem("expiry", new Date() );
      localStorage.setItem("type", user.type);


      window.location.reload();
  };

  return (
    <div className="text-5xl text-red-800"> login page 
     
     <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 rounded mt-12"> login </button>
    </div>
  )
}

export default Login