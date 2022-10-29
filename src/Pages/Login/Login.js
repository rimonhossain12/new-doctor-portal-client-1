import React from 'react';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-accent font-bold">Login</h2>

                    {/* react hooks form */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {/* error handle show ui*/}
                                {errors.email?.type === 'required' && <p role="alert">Email is Required</p>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", { required: true })}
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                            <label className="label">
                                {/* error handle show ui*/}
                                {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                            </label>
                        </div>



                        <input type="submit" value='Login' className='btn btn-accent text-white w-full max-w-xs' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;