import AuthPanel from "../ui/auth/AuthPanel";

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
      <div className="flex relative min-h-screen p-14 md:p-20">
        <div className="flex w-full rounded-[12px] overflow-hidden">
          <AuthPanel />
          <div className="w-full flex relative justify-end items-end">
            <img
              decoding="async"
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
