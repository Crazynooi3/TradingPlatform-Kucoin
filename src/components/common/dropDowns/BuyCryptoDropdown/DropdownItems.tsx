import { Link } from "react-router-dom";

export interface DropdownItemProps {
  label: string;
  icon: string;
  disc: string;
  itemKey?: string;
}
export const DropdownItems = ({ icon, label, disc }: DropdownItemProps) => {
  return (
    <div className="hover:rounded-xl hover:bg-(--kds-background-hover)">
      <Link
        to={""}
        className="text-primary hover:bg-hover hover:text-primary relative flex w-full cursor-pointer items-center rounded-lg p-4 no-underline hover:bg-transparent"
      >
        <div className="me-4 flex h-6 items-center justify-center overflow-hidden rounded [&_img]:h-6 [&_img]:w-6 [&_img]:object-contain">
          <img src={icon} alt="P2PTrading" />
        </div>
        <div className="flex h-auto flex-1 flex-col justify-center">
          <div className="relative flex min-h-6 flex-wrap items-center text-base leading-[140%] font-normal">
            <span className="max-w-44 text-(--kds-text-primary)">{label}</span>
          </div>
          <div className="pe-5 text-[13px] leading-[140%] font-normal text-(--kds-text-tertiary)">
            {disc}
          </div>
        </div>
      </Link>
    </div>
  );
};
