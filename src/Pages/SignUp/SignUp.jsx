import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
        console.log(result.user)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true } )}
                placeholder="Your Name"
                className="input input-bordered"
               
              />
               {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <span>This field is required</span>}
              {errors.password?.type === 'minLength' && <span>This field 6 charecter required</span>}
              {errors.password?.type === 'maxLength' && <span>This field 20 charecter required</span>}
              {errors.password?.type === 'pattern' && <span>This field regex required</span>}
            </div>
            <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Sign Up" />
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
