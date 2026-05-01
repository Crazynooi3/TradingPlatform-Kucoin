import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import { walletsSelector } from "@/features/Wallet/walle.selector";
import { fetchMainWallet } from "@/features/Wallet/wallet.slice";
import { CaretDownOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect } from "react";

export default function AssetDashbord() {
  const dispatch = useAppDispatch();

  const userWallets = useAppSelector(walletsSelector);

  useEffect(() => {
    dispatch(fetchMainWallet());
  }, []);
  return (
    <div className="rounded-2xl bg-(--kux-cover2) p-5">
      <div className="flex items-center justify-between">
        <div>
          Total Assets{" "}
          <span className="text-(--kds-text-secondary)">
            <EyeOutlined role="button" className="cursor-pointer" />
          </span>
        </div>
        <div className="flex gap-4 text-sm text-(--kds-text-secondary)">
          <span>Asset Overview</span>
          <span>|</span>
          <span>Orders</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-5">
        <div>
          <span className="text-4xl font-bold">0.3264752367</span>
          <span className="text-lg font-bold"> USDT</span>
          <span className="ml-2">
            <CaretDownOutlined />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button shape="round" variant="solid" color="default">
            Deposit
          </Button>
          <Button shape="round">Buy Crypto</Button>
          <Button shape="round">Withdrow</Button>
        </div>
      </div>
      <div className="mt-1 text-sm text-(--kds-text-secondary)">≈ $0.13</div>
    </div>
  );
}
