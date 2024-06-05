import { HeroImage } from "../lib/definitions";
import AuthPanel from "../ui/auth/AuthPanel";

const Page = async () => {
  const heroImagesArray: HeroImage[] = [
    {
      title: "The Vanguard of the Whispering Woods",
      src: "/login-hero-image-1.webp",
      creator: "@Leonardo"
    },
    {
      title: "Cosmic Oracle",
      src: "/login-hero-image-2.webp",
      creator: "@Leonardo"
    },
    {
      title: "Machined Seraphim",
      src: "/login-hero-image-3.webp",
      creator: "@Leonardo"
    }
  ]

  function getRandomImage(arr: HeroImage[]): HeroImage {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const heroImage = getRandomImage(heroImagesArray);

  return (
    <div className="bg-black">
      <img
        decoding="async"
        loading="lazy"
        width="4096"
        height="2304"
        src={heroImage?.src}
        className="absolute opacity-25"
        alt={heroImage?.title}
      />
      <div className="flex relative min-h-screen p-14 md:p-20">
        <div className="flex w-full rounded-[12px] overflow-hidden">
          <AuthPanel />
          <div className="w-full flex relative justify-end items-end">
            <img
              decoding="async"
              width="4096"
              height="2304"
              src={heroImage?.src}
              alt={heroImage?.title}
              className="absolute w-full h-full object-cover"
            />
            <div className="relative bg-van-gogh-black-opal-300 text-van-gogh-xs lg:text-van-gogh-sm py-3.5 px-4 mb-[7.5px] mr-[7.5px] rounded-[48px] font-light select-none">
              {`'${heroImage?.title}' by `}
              <span className="van-gogh-gradient-text">{heroImage?.creator}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
