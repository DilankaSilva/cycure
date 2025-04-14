"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu_data from '@/data/menu-data';

const NavMenu = ({ num = false }) => {
    const currentRoute = usePathname();

    // Improved active state checking with optional chaining
    const isActive = (link) => currentRoute === link;

    // Check if any submenu item is active
    const hasActiveSubmenu = (subMenus) =>
        subMenus?.some(sub => sub.link && isActive(sub.link));

    return (
        <ul className="navigation">
            {menu_data.map((menu) => {
                const isActiveItem = isActive(menu.link) ||
                    (menu.has_dropdown && hasActiveSubmenu(menu.sub_menus));

                return (
                    <li
                        key={menu.id}
                        className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${
                            isActiveItem ? "active-parent" : ""
                        }`}
                    >
                        <Link
                            href={menu.link}
                            className={isActive(menu.link) ? "active" : ""}
                        >
                            {num && (menu.id <= 9 ? `0${menu.id}.` : `${menu.id}.`)}
                            {menu.title}
                        </Link>

                        {menu.has_dropdown && menu.sub_menus && (
                            <ul className="sub-menu">
                                {menu.sub_menus.map((sub_m, i) => (
                                    <li key={i}>
                                        <Link
                                            href={sub_m.link}
                                            className={isActive(sub_m.link) ? "active" : ""}
                                        >
                                            {sub_m.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;