"use client";

import { login } from "@/app/lib/actions";
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SignInButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      aria-disabled={pending}
      className="self-center flex justify-center items-center relative h-10 w-[95%] bg-van-gogh-purple-gradient px-12 rounded-lg text-van-gogh-sm font-light py-6 mt-2 hover:shadow-van-gogh-purple-glow"
    >
      <div className={pending ? "flex" : "hidden"}>
        <Spinner w={14} h={14} />
      </div>
      <span className={pending ? "hidden" : "flex"}>Sign in</span>
    </button>
  );
};

const SignInForm = () => {
  const [fields, setFields] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [errorMessage, dispatch] = useFormState(login, null);
  return (
    <form action={dispatch}>
      <div className="flex flex-col w-full items-start gap-3 pb-1.5">
        <div className="flex flex-col w-full gap-2">
          <label className="text-van-gogh-md font-extralight" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="name@host.com"
            name="email"
            type="email"
            autoComplete="username"
            className="h-10 w-full bg-van-gogh-input-black rounded-lg px-3 py-[0.375rem] outline-none transition-all border border-transparent focus:border-van-gogh-purple-400 font-extralight text-van-gogh-md text-van-gogh-input-text-grey"
            required
            aria-required="true"
            value={fields.email}
            onChange={(e) =>
              setFields((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label
            className="text-van-gogh-md font-extralight"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="h-10 w-full bg-van-gogh-input-black rounded-lg px-3 py-[0.375rem] outline-none transition-all border border-transparent focus:border-van-gogh-purple-400 font-extralight text-van-gogh-md text-van-gogh-input-text-grey"
            placeholder="Password"
            required
            aria-required="true"
            value={fields.password}
            onChange={(e) =>
              setFields((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <SignInButton />
        {errorMessage && (
          <div className="self-center text-red-500">{errorMessage}</div>
        )}
      </div>
    </form>
  );
};

export default SignInForm;
