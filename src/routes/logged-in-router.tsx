import React from 'react';

// const commonRoutes = [
//     {path:"/confirm",component:<ConfirmEmail></ConfirmEmail>},
// ];

export const LoggedInRouter = () => {
  const user = {
    verified: true,
    email: 'kurly',
    id: 'kurly',
  };
  if (!user.verified) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">...Loading</span>
      </div>
    );
  }
};
