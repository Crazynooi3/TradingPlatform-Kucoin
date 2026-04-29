import { useAppSelector } from "@/app/Redux/hooks";
import AssetDashbord from "@/components/common/DashbordComp/Asset.dashbord";
import Onboarding from "@/components/common/DashbordComp/Onboarding.dashboard";
import { userSelector } from "@/features/User/user.selector";
import {
  CheckCircleFilled,
  EditOutlined,
  RightOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons";

export default function Dashboard() {
  const userInfo = useAppSelector(userSelector);
  return (
    <>
      <div className="flex items-center justify-evenly text-(--kds-text-primary)">
        <div className="flex gap-4 border-r border-(--kds-border) pr-10">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <img
              src="https://assets.staticimg.com/kc-v2-config/avatar/696891376ffcd300015ad6a0_mGwODBV.png"
              alt="userProfile"
              className="object-cover"
            />
          </div>
          <div>
            <div>
              {`Hello, ${userInfo?.email}`}{" "}
              <span>
                <EditOutlined />
              </span>
            </div>
            <div className="text-xs text-(--kds-text-secondary)">{`UID: ${userInfo?.uid}`}</div>
          </div>
        </div>
        <div className="mx-10 flex flex-1 items-center gap-20">
          <div className="text-xs">
            <div className="text-(--kds-text-secondary)">
              Identity Verification{" "}
              <span>
                {" "}
                <RightOutlined />
              </span>
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-(--kds-success)">
              <span>
                <CheckCircleFilled />
              </span>
              {userInfo?.identity_verified}
            </div>
          </div>

          <div className="text-xs">
            <div className="text-(--kds-text-secondary)">
              VIP Level{" "}
              <span>
                {" "}
                <RightOutlined />
              </span>
            </div>
            <div className="mt-0.5 flex items-center gap-1">VIP 0</div>
          </div>

          <div className="text-xs">
            <div className="text-(--kds-text-secondary)">
              Safeguard{" "}
              <span>
                {" "}
                <RightOutlined />
              </span>
            </div>
            <div className="mt-0.5 flex items-center gap-1">
              <span>
                <SafetyCertificateFilled />
              </span>
              Check Now{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-(--kds-text-primary)">
        <Onboarding />
        <AssetDashbord />
      </div>
      <div className="flex-1/3">2</div>
    </>
  );
}
