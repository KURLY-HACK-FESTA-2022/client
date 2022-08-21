import React from 'react';
import { useForm } from 'react-hook-form';
import { FormError } from '../../components/form-error';
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { KurlyLogo } from 'assets/images';
import { BellIcon } from 'assets/icons';

interface ILoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const { register, getValues, formState, handleSubmit } = useForm<ILoginForm>({
    mode: 'onChange',
  });

  const loginWithAxios = async () => {
    const { data } = await axios.post('http://localhost:4000/login');
    return data;
  };

  const onCompleted = () => {
    return null;
  };

  const onSubmit = () => {
    const { email, password } = getValues();
    //const {data,isLoading} = useQuery('login', loginWithAxios);

    // data에는 유저 토큰
    // is Loading
  };
  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <Helmet>
        <title>컬리체이서 | 로그인</title>
      </Helmet>
      <div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
        <img src={KurlyLogo} className="w-52 mb-10" alt="kurlyLogo"></img>
        <h4 className=" w-full font-medium text-left text-3xl">
          Welcome Kurly's Chaser
        </h4>
        <form
          className="grid gap-3 mt-5 w-full mb-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('email', {
              required: 'Email is required',
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            type="email"
            placeholder="Email"
            required={true}
            className="input transition-colors"
          ></input>
          {formState.errors.email?.type === 'pattern' && (
            <FormError errorMessage={'Please enter a valid email'}></FormError>
          )}
          {formState.errors.email?.message && (
            <FormError
              errorMessage={formState.errors.email?.message}
            ></FormError>
          )}
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            required={true}
            placeholder="Password"
            className="input"
          ></input>
          {formState.errors.password?.message && (
            <FormError
              errorMessage={formState.errors.password?.message}
            ></FormError>
          )}
          <Button
            canClick={formState.isValid}
            actionText={'Log In'}
            loading={false}
          ></Button>
        </form>
        <div>
          <span>New to Kurly Chaser? </span>
          <Link
            to={'/create-account'}
            className="text-green-600 hover:underline"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
