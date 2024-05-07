import type { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <header className="self-stretch h-[72px] bg-tertiary2 box-border overflow-hidden flex flex-row items-start justify-between pt-px px-5 pb-0 top-[0] z-[99] sticky gap-[20px] text-left text-xl text-secondary font-poppins border-b-[1px] border-solid border-tertiary2">
      <div className="w-[182px] flex flex-row items-start justify-start py-[23px] pr-2.5 pl-0 box-border">
        <div className="h-6 flex-1 relative bg-[url('/sitelogo-effects-transparent-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden max-w-[171.42999267578125px] max-h-[24px]"
            alt=""
            src="/sitelogo-effects-transparent-1@2x.png"
          />
          <div className="absolute top-[4px] left-[29.4px] w-[142px] h-4 z-[1]" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[32px]">
          <a className="[text-decoration:none] relative leading-[150%] text-[inherit] inline-block min-w-[50px]">
            Docs
          </a>
          <a className="[text-decoration:none] relative leading-[150%] text-[inherit] inline-block min-w-[111px] whitespace-nowrap">
            How to Buy
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
