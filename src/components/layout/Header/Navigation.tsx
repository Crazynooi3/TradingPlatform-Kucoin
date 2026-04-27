// Navigation.tsx
import BuyCryptoDropdown from "@/components/common/dropDowns/BuyCryptoDropdown/BuyCryptoDropdown";
import NavItem from "@/components/common/NavItem/NavItem";
import { useNavDropdown } from "@/hooks/useNavDropdown";

const NAV_ITEMS = [
  { key: "buy-crypto", label: "Buy Crypto", dropdown: <BuyCryptoDropdown /> },
  { key: "market", label: "Market", dropdown: null },
  { key: "trade", label: "Trade", dropdown: null },
  { key: "derivatives", label: "Derivatives", dropdown: null },
  { key: "earn", label: "Earn", dropdown: null },
  { key: "more", label: "More ...", dropdown: null },
];

export default function Navigation() {
  const { openKey, toggle, ref } = useNavDropdown();

  return (
    <div ref={ref}>
      <ul className="flex h-full items-center gap-5">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.key}
            itemKey={item.key}
            label={item.label}
            isOpen={openKey === item.key}
            onToggle={toggle}
            dropdown={item.dropdown}
          />
        ))}
      </ul>
    </div>
  );
}
