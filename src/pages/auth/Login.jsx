
import React, { useState } from "react";
import requestsServiceService from "../../services/requestsService.service";


function Login() {
  const [userInfo, setuserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });


  
  const [error, setError] = useState({
    message: "approved",
    color: '',
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
          color: "rgb(16 185 129)",
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
          color: "rgb(248 113 113)",
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

      setTimeout(() => {
        window.location.reload();
      }, 1500);

  };

  return (
    <section class="h-screen">
    <div class="container px-6 py-12 h-full">
      <div class="flex justify-center items-center flex-col sm:flex-row h-full g-6 text-gray-800">
        <div class="md:w-/12 lg:w-6/12 mb-12 md:mb-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="w-full"
            alt="Phone image"
          />
        </div>
        <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
          <form onSubmit={(e)=>handleSubmit(e)}>
            {/* error field  */}
            {error.color &&  
            <div style={{ backgroundColor: error.color }} className={`block animate-pulse w-full px-4 py-2 mb-5 text-xl font-normal text-gray-700  ${`bg-${error.color}-400`} border`}>
                {error.message}
            </div>
            }

            {/* - Email input - */}
            <div class="mb-6">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                value={userInfo.email}
                name="email"
                onChange={(e)=>handleChange(e)}
                required
              />
            </div>
  
            {/* - Password input - */}
            <div class="mb-6">
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
                value={userInfo.password}
                name="password"
                onChange={(e)=>handleChange(e)}
                required
              />
            </div>
  
  
            {/* - Submit button - */}

            <button
              type="submit"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Sign in
            </button>
  
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login