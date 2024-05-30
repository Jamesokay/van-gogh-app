"use client";

import { useState } from "react";
import AppStoreIcon from "../../svg/AppStoreIcon";
import SocialAuthProviders from "./SocialAuthProviders";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const AuthPanel = () => {
  const [createAccount, setCreateAccount] = useState(false);
  return (
    <div className="bg-van-gogh-auth-form-grey min-w-full md:min-w-[26.25rem] h-auto flex flex-col gap-3.5 py-6 px-3 md:px-14 overflow-auto">
      <div className="relative flex flex-col items-center">
        <img
          src="/leonardo-logo.webp"
          alt="Leonardo.Ai"
          fetchPriority="high"
          width="80"
          height="80"
          decoding="async"
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col w-full gap-3 items-center">
          <p className="text-van-gogh-md leading-4 font-light">
            Sign up or Login with
          </p>
          <SocialAuthProviders />
          <div className="relative my-5 w-full">
            <hr className="h-0 border-0 border-b border-van-gogh-border-grey-300 opacity-60" />
            <div className="absolute z-10 rounded-full bg-van-gogh-auth-form-grey h-8 w-8 border border-van-gogh-border-grey-300 bsolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <p className="text-van-gogh-3xs">OR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full md:max-w-80 p-2 rounded border border-van-gogh-border-green flex justify-center">
        <p className="text-van-gogh-border-green text-van-gogh-xs font-light leading-[1.2rem]]">
          {createAccount
            ? "Sign up with a new account"
            : "Sign in to your account"}
        </p>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className={createAccount ? "hidden" : "relative w-full"}>
          <SignInForm />
        </div>
        <div className={createAccount ? "relative w-full" : "hidden"}>
          <SignUpForm />
        </div>
        <div className="flex w-full justify-center items-center">
          <p
            role="button"
            className={
              createAccount
                ? "hidden"
                : "text-van-gogh-sm font-extralight leading-4"
            }
            onClick={() => setCreateAccount(true)}
          >
            Need an account?&nbsp;
            <span className="text-van-gogh-purple-200">Sign up</span>
          </p>
          <p
            role="button"
            className={
              createAccount
                ? "text-van-gogh-sm font-extralight leading-4"
                : "hidden"
            }
            onClick={() => setCreateAccount(false)}
          >
            Already have an account?&nbsp;
            <span className="text-van-gogh-purple-200">Sign in</span>
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex flex-col gap-3">
            <p>Available now on iOS</p>
            <AppStoreIcon />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly h-full w-full mt-4 items-end">
        <p className="text-van-gogh-policy-text-grey text-van-gogh-xs">
          Privacy Policy
        </p>
        <p className="text-van-gogh-policy-text-grey text-van-gogh-xs">
          Terms of Service
        </p>
      </div>
    </div>
  );
};

export default AuthPanel;
