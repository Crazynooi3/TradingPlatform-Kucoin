import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import { selectThemeMode } from "@/features/Theme/theme.selectors";
import { toggleTheme } from "@/features/Theme/theme.slice";
import { useNavDropdown } from "@/hooks/useNavDropdown";
import {
  DownloadOutlined,
  EyeOutlined,
  FileSearchOutlined,
  GlobalOutlined,
  MoonOutlined,
  SearchOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider, Space, Tooltip } from "antd";
import DropdownComp from "../../common/dropDowns/Dropdowns";
import Navigation from "./Navigation";
import { DROPDOWN_Assets } from "@/components/common/dropDowns/BuyCryptoDropdown/DropdownList";

export default function Header() {
  const { openKey, toggle, ref } = useNavDropdown();

  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectThemeMode);
  const haslogin: boolean = localStorage.getItem("token") ? true : false;

  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <header>
      <div className="sticky-top flex h-18 items-center border-b border-(--kds-border) bg-(--kds-background) px-6">
        <img
          alt="Logo"
          src="https://assets.staticimg.com/kc-v2-config/site-config/693bcdd4680db10001fa9856_logo_general_green.svg"
          height={25}
          className="mr-10 h-6.25"
        />
        <div className="flex-1">
          <ul className="flex h-full items-center gap-5 font-medium text-(--kds-text-primary)">
            <Navigation />
          </ul>
        </div>
        <div className="flex h-full items-center">
          <Space separator={<Divider vertical className="h-6" />}>
            {!haslogin ? (
              <div className="flex items-center gap-2">
                <Button
                  href="/auth/login"
                  type="text"
                  shape="round"
                  className="tw-text-[var(--kds-text-primary)] font-bold"
                >
                  Log in
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  className="font-bold"
                  color="default"
                  variant="solid"
                >
                  Sign Up
                </Button>
              </div>
            ) : (
              <div ref={ref} className="flex items-center gap-2">
                <Button
                  href="/dashboard/deposite"
                  type="text"
                  variant="filled"
                  color="green"
                  icon={<DownloadOutlined />}
                  shape="round"
                  className="tw-text-[var(--kds-text-primary)] font-bold"
                >
                  Deposite
                </Button>
                <DropdownComp
                  title="Assets"
                  items={DROPDOWN_Assets}
                  extra={
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-(--kds-text-secondary)">
                          <div>overview</div>
                          <div>
                            <EyeOutlined />
                          </div>
                        </div>
                        <div>
                          27463276{" "}
                          <span className="text-xs text-(--kds-text-secondary)">
                            USDT
                          </span>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <Tooltip title="Account Detiles">
                          <FileSearchOutlined className="text-2xl" />
                        </Tooltip>
                      </div>
                    </div>
                  }
                />
                <DropdownComp title="Orders" items={[]} />
                <div className="h-7 w-7 overflow-hidden rounded-full">
                  <img
                    src="https://assets.staticimg.com/kc-v2-config/avatar/696891376ffcd300015ad6a0_mGwODBV.png"
                    alt="userProfile"
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Button shape="circle" icon={<SearchOutlined />}></Button>
              <Button shape="circle" icon={<DownloadOutlined />}></Button>
              <Button shape="circle" icon={<GlobalOutlined />}></Button>
              {themeMode === "dark" ? (
                <Button
                  onClick={() => changeTheme()}
                  shape="circle"
                  icon={<SunOutlined />}
                ></Button>
              ) : (
                <Button
                  onClick={() => changeTheme()}
                  shape="circle"
                  icon={<MoonOutlined />}
                ></Button>
              )}
            </div>
          </Space>
        </div>
      </div>
    </header>
  );
}
