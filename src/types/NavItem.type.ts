// components/NavItem/NavItem.types.ts
export interface NavItemProps {
  label: string;
  itemKey: string;
  isOpen?: boolean;
  onToggle: (key: string) => void;
  dropdown?: React.ReactNode;
}
