"use client";

import { login } from "@/app/lib/actions";
import { Collapse, Spinner, useDisclosure } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SignInButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      aria-disabled={pending}
      className="self-center flex justify-center items-center relative h-10 w-[95%] bg-van-gogh-purple-gradient px-12 rounded-lg text-van-gogh-sm font-medium py-6 mt-2 hover:shadow-van-gogh-purple-glow"
    >
      <div className={pending ? "flex" : "hidden"}>
        <Spinner w={6} h={6} />
      </div>
      <span className={pending ? "hidden" : "flex"}>Sign in</span>
    </button>
  );
};

const SignInForm = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [fields, setFields] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [errorMessage, dispatch] = useFormState(login, null);

  useEffect(() => {
    if (errorMessage) onToggle();
  }, [errorMessage]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: "email" | "password"
  ) => {
    if (isOpen) onToggle();
    setFields((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <form action={dispatch}>
      <div className="flex flex-col w-full items-start gap-3 pb-1.5">
        <div className="flex flex-col w-full gap-2">
          <label className="text-van-gogh-md font-light" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="name@host.com"
            name="email"
            type="email"
            autoComplete="username"
            className="h-10 w-full bg-van-gogh-input-black rounded-lg px-3 py-[0.375rem] outline-none transition-all border border-transparent focus:border-van-gogh-purple-400 font-light text-van-gogh-md text-van-gogh-input-text-grey"
            required
            aria-required="true"
            value={fields.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="text-van-gogh-md font-light" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="h-10 w-full bg-van-gogh-input-black rounded-lg px-3 py-[0.375rem] outline-none transition-all border border-transparent focus:border-van-gogh-purple-400 font-light text-van-gogh-md text-van-gogh-input-text-grey"
            placeholder="Password"
            required
            aria-required="true"
            value={fields.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </div>
        <Collapse in={isOpen} className="self-center">
          <div className="h-4 text-van-gogh-xs text-red-500">{errorMessage || ""}</div>
        </Collapse>
        <SignInButton />
      </div>
    </form>
  );
};

export default SignInForm;
