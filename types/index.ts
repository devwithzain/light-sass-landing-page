import { Dispatch, SetStateAction } from "react";

export type TbuttonProps = {
   title: string;
   className: string;
};

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};

export type TheadingProps = {
   title: string[];
   classname: string;
};

export type TlinksProps = {
   data: {
      title: string,
      index: number,
      href: string;
   };
   className: string;
   isActive: boolean,
   setSelectedIndicator: Dispatch<SetStateAction<string>>;
};