"use client";
import SignInForm from '@/app/components/auth/sign-in-form';
import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
