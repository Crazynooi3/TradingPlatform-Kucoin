import { Button } from "antd";
import { DropdownItems } from "./DropdownItems";
import { DROPDOWN_BuyCrypto_ITEMS } from "./DropdownList";

export default function BuyCryptoDropdown() {
  return (
    <div className="flex h-115 items-center justify-center bg-(--kds-background) p-4 shadow-lg">
      <div className="p-10 will-change-auto">
        <h2 className="mb-5 text-xl font-bold">Buy Crypto</h2>
        <p className="text-sm font-normal text-(--kds-text-secondary)">
          Buy instantly using Visa, MasterCard, bank transfers and more
        </p>
        <Button
          className="mt-20"
          size="large"
          shape="round"
          type="default"
          color="default"
          variant="solid"
        >
          <span className="text-lg font-bold">Trade Now</span>
        </Button>
      </div>
      <div className="h-full border-r border-l border-(--kds-border)">
        <div>
          <div className="mb-2 flex flex-col p-4">
            <div className="text-tertiary py-4 ps-4 pt-0 pb-2 text-base leading-[140%] font-medium first:[&]:pt-0">
              Buy Crypto
            </div>
            {DROPDOWN_BuyCrypto_ITEMS.map((item) => (
              <DropdownItems
                key={item.key}
                label={item.label}
                disc={item.disc}
                icon={item.icon}
              />
            ))}
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
      <div>3</div>
    </div>
  );
}
