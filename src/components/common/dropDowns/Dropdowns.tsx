import { CaretDownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Divider, Dropdown, Space } from "antd";
import React from "react";

interface Dropdown {
  title: string;
  items: MenuProps["items"];
  extra?: React.ReactNode;
}

const DropdownComp: React.FC<Dropdown> = ({ title, items, extra }) => (
  <>
    <Dropdown
      menu={{ items }}
      dropdownRender={(menu) => (
        <div className="w-[220px] rounded-lg border bg-(--kds-background-tooltip) shadow-xl">
          {extra && (
            <>
              <div className="px-3 py-2">{extra}</div>
            </>
          )}

          {menu}
        </div>
      )}
    >
      <a
        onClick={(e) => e.preventDefault()}
        className="group text-sm! text-(--kds-text-primary)! hover:text-(--kds-text-link)!"
      >
        <Space className="text">
          {title}
          <CaretDownOutlined
            className="text-xs transition-all group-hover:rotate-180"
            style={{ color: "var(--kds-text-tertiary)" }}
          />
        </Space>
      </a>
    </Dropdown>
  </>
);

export default DropdownComp;
