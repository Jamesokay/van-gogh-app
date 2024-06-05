import AppleIcon from "../../svg/AppleIcon";
import GoogleIcon from "../../svg/GoogleIcon";
import MicrosoftIcon from "../../svg/MicrosoftIcon";

const SocialAuthProviders = () => {
  return (
    <>
      <button className="flex items-center rounded-lg text-van-gogh-sm bg-van-gogh-border-grey-300 transition-all hover:bg-van-gogh-white-opal-200 w-[95%] font-light h-10 px-[1.125rem] py-[1.375rem]">
        <span className="mr-2">
          <AppleIcon />
        </span>
        <span>Apple</span>
      </button>
      <button className="flex items-center rounded-lg text-van-gogh-sm bg-van-gogh-border-grey-300 transition-all hover:bg-van-gogh-white-opal-200 w-[95%] font-light h-10 px-[1.125rem] py-[1.375rem]">
        <span className="mr-2">
          <GoogleIcon />
        </span>
        <span>Google</span>
      </button>
      <button className="flex items-center rounded-lg text-van-gogh-sm bg-van-gogh-border-grey-300 transition-all hover:bg-van-gogh-white-opal-200 w-[95%] font-light h-10 px-[1.125rem] py-[1.375rem]">
        <span className="mr-2">
          <MicrosoftIcon />
        </span>
        <span>Microsoft</span>
      </button>
    </>
  );
};

export default SocialAuthProviders;
