import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import { selectThemeMode } from "@/features/Theme/theme.selectors";
import { toggleTheme } from "@/features/Theme/theme.slice";
import {
  DownloadOutlined,
  GlobalOutlined,
  MoonOutlined,
  SearchOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Button, Divider, Space } from "antd";
import Navigation from "./Navigation";

export default function Header() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectThemeMode);

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
