import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';



const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data)
    };

    if (gUser || user) {
        console.log(gUser || user);
    }

    if (gError || error) {
        signInError = <p className='text-red-500 text-thin'><small>{gError?.message || error?.message}</small></p>
    }

    if (gLoading || loading) {
        return <Loading />
    }

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
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email Must be required!'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Invalid Email Formate!'
                                    }
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            <label className="label">
                                {/* error handle show ui*/}
                                {errors.email?.type === 'required' && <p className='text-red-500 text-thin' role="alert"><small>{errors.email.message}</small></p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-500 text-thin' role="alert"><small>{errors.email.message}</small></p>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 character or Longer!'
                                    }
                                })}
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                            <label className="label">
                                {/* error handle show ui*/}
                                {errors.password?.type === 'required' && <p className='text-red-500 text-thin' role="alert"><small>{errors.password.message}</small></p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500 text-thin' role="alert"><small>{errors.password.message}</small> </p>}
                            </label>
                        </div>
                        {signInError}
                        <input type="submit" value='Login' className='btn btn-accent text-white w-full max-w-xs' />
                        <p className='py-2'>New to Doctor portal!
                            <Link to="/signup">
                                <span className='text-primary'> Create new account</span>
                            </Link>
                        </p>
                    </form>
                    <div className="divider text-accent">OR</div>
                    <button
                        className="btn btn-active btn-outline btn-ghost"
                        onClick={() => signInWithGoogle()}
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;