// components/NavItem/NavItem.tsx
import { CaretDownOutlined } from "@ant-design/icons";
import { NavItemProps } from "@/types/NavItem.type";

export default function NavItem({
  label,
  itemKey,
  isOpen,
  onToggle,
  dropdown,
}: NavItemProps) {
  return (
    <li className="">
      <button
        onClick={() => onToggle(itemKey)}
        className="flex cursor-pointer items-center gap-1 font-medium text-(--kds-text-primary) transition-colors"
      >
        <span className="transition-colors hover:text-(--kds-text-link)">
          {label}
        </span>
        {dropdown && (
          <CaretDownOutlined
            className={`text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"} `}
          />
        )}
      </button>

      {/* Dropdown Portal */}
      {dropdown && isOpen && (
        <div className="absolute top-18 left-0 z-50 w-full">{dropdown}</div>
      )}
    </li>
  );
}
