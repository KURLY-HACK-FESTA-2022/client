import React from 'react';
import { useForm } from 'react-hook-form';
import { FormError } from '../../components/form-error';
import { Button } from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import kurlyLogo from '../../assets/images/kurlyChaser.png';

interface ICreateAccountForm {
  email: string;
  password: string;
  role: UserRole;
}

enum UserRole {
  Customer = 'Customer',
  Delivery = 'Delivery',
}

function CreateAccount() {
  const { register, getValues, formState, handleSubmit, watch } =
    useForm<ICreateAccountForm>({
      mode: 'onChange',
    });
  const navigate = useNavigate();
  const onCompleted = () => {
    return null;
  };

  const onSubmit = () => {
    return null;
  };
  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <Helmet>
        <title>컬리체이서 | 회원가입</title>
      </Helmet>
      <div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
        <img src={kurlyLogo} className="w-52 mb-10" alt="kurlyLogo"></img>
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
            className="input transition-colors"
          ></input>
          {formState.errors.email?.type === 'pattern' && (
            <FormError errorMessage={'Please Enter a Valid Email'}></FormError>
          )}
          {formState.errors.email?.message && (
            <FormError
              errorMessage={formState.errors.email?.message}
            ></FormError>
          )}

          <input
            {...register('password', {
              required: 'Password is required',
              minLength: 10,
            })}
            type="password"
            placeholder="Password"
            className="input"
          ></input>
          {formState.errors.password?.message && (
            <FormError
              errorMessage={formState.errors.password?.message}
            ></FormError>
          )}
          <select {...register('role')} className="input">
            {Object.keys(UserRole).map((value, iter) => {
              return <option key={iter}>{value}</option>;
            })}
          </select>
          <Button
            canClick={formState.isValid}
            actionText={'Create Account'}
            loading={false}
          ></Button>
          {/* {
                        <FormError errorMessage={"컬리체이서 | 로그인"}></FormError>
                } */}
        </form>
        <div>
          Already have an account?{' '}
          <Link to={'/'} className="text-green-600 hover:underline">
            Sing in an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
