import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { KurlyLogo } from 'assets/images';
import Button from 'components/common/Button';
import Path from 'routes/Path';

function LoginPage() {
  const navigate = useNavigate();
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
        <form className="flex justify-center  gap-3 mt-5 w-full mb-5">
          <Button variant="white" onClick={() => navigate(Path.DELIVERY_MAIN)}>
            배달기사
          </Button>
          <Button variant="purple" onClick={() => navigate(Path.CUSTOMER_MAIN)}>
            고객
          </Button>
        </form>
        <div>
          <span>New to Kurly Chaser? </span>
          <Link
            to={Path.CREATE_ACCOUNT}
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
