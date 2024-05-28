import AppleIcon from "../ui/svg/AppleIcon";
import GoogleIcon from "../ui/svg/GoogleIcon";
import MicrosoftIcon from "../ui/svg/MicrosoftIcon";
import AppStoreIcon from "../ui/svg/AppStoreIcon";

const Page = async () => {
  return (
    <div className="bg-black">
      <img
        decoding="async"
        loading="lazy"
        width="4096"
        height="2304"
        src="/login-hero-image.webp"
        className="absolute opacity-25"
        alt="The Vanguard of the Whispering Woods"
      />
      <div className="flex relative min-h-screen p-20">
        <div className="flex w-full rounded-[12px] overflow-hidden">
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
                <button className="flex items-center rounded-lg text-van-gogh-sm bg-van-gogh-border-grey-300 transition-all hover:bg-van-gogh-white-opal-200 w-[95%] font-extralight h-10 px-[1.125rem] py-[1.375rem]">
                  <span className="mr-2">
                    <AppleIcon />
                  </span>
                  <span>Apple</span>
                </button>
                <button className="flex items-center rounded-lg text-van-gogh-sm bg-van-gogh-border-grey-300 transition-all hover:bg-van-gogh-white-opal-200 w-[95%] font-extralight h-10 px-[1.125rem] py-[1.375rem]">
                  <span className="mr-2">
                    <GoogleIcon />
                  </span>
                  <span>Google</span>
                </button>
                <button className="flex items-center rounded-lg text-van-gogh-sm bg-van-gogh-border-grey-300 transition-all hover:bg-van-gogh-white-opal-200 w-[95%] font-extralight h-10 px-[1.125rem] py-[1.375rem]">
                  <span className="mr-2">
                    <MicrosoftIcon />
                  </span>
                  <span>Microsoft</span>
                </button>
                <div className="relative my-5 w-full">
                  <hr className="h-0 border-0 border-b border-van-gogh-border-grey-300 opacity-60" />
                  <div className="absolute z-10 rounded-full bg-van-gogh-auth-form-grey h-8 w-8 border border-van-gogh-border-grey-300 bsolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <p className="text-van-gogh-3xs">OR</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-4">
              <div className="relative w-full">
                <form>
                  <div className="flex flex-col w-full items-start gap-3 pb-1.5">
                    <div className="flex flex-col w-full gap-2">
                      <label
                        className="text-van-gogh-md font-extralight"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        placeholder="name@host.com"
                        autoComplete="username"
                        className="h-10 w-full bg-van-gogh-input-black rounded-lg px-3 py-[0.375rem] outline-none transition-all border border-transparent focus:border-van-gogh-purple-400 font-extralight text-van-gogh-md text-van-gogh-input-text-grey"
                        required
                        aria-required="true"
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
                        autoComplete="current-password"
                        className="h-10 w-full bg-van-gogh-input-black rounded-lg px-3 py-[0.375rem] outline-none transition-all border border-transparent focus:border-van-gogh-purple-400 font-extralight text-van-gogh-md text-van-gogh-input-text-grey"
                        placeholder="Password"
                        required
                        aria-required="true"
                      />
                    </div>
                    <p
                      role="button"
                      className="font-light transition-all text-van-gogh-purple-200 hover:text-van-gogh-purple-300 text-van-gogh-xs"
                    >
                      Forgot your password?
                    </p>
                    <button className="self-center flex justify-center items-center relative h-10 w-[95%] bg-van-gogh-purple-gradient px-12 rounded-lg text-van-gogh-sm font-light py-6 mt-2 hover:shadow-van-gogh-purple-glow">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex w-full justify-center items-center">
                <p className="text-van-gogh-sm font-extralight leading-4">
                  Need an account?&nbsp;
                  <span className="text-van-gogh-purple-200">Sign up</span>
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
          <div className="w-full flex relative justify-end items-end">
            <img
              decoding="async"
              loading="lazy"
              width="4096"
              height="2304"
              src="/login-hero-image.webp"
              alt="The Vanguard of the Whispering Woods"
              className="absolute w-full h-full object-cover"
            />
            <div className="relative bg-van-gogh-black-opal-300 text-van-gogh-xs lg:text-van-gogh-sm py-3.5 px-4 mb-[7.5px] mr-[7.5px] rounded-[48px] font-light select-none">
              {`'The Vanguard of the Whispering Woods' by `}
              <span className="van-gogh-gradient-text">@Leonardo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
