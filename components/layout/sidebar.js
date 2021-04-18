import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import { faGem, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import cx from "classnames";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const titleClasses = cx(
    "uppercase text-yellow text-x transition duration-200 ease-in-out self-center",
    {
      "transform-gpu -translate-x-44 absolute -left-16": isCollapsed,
    }
  );

  return (
    <ProSidebar
      collapsed={isCollapsed}
      className="border-r-2 border-white bg-blue"
    >
      <SidebarHeader className="px-6 py-3 h-14 bg-blue flex">
        <div className={titleClasses}>Menu</div>
        <div
          role="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-full bg-yellow text-black w-8 h-8 flex items-center justify-center absolute right-6 top-3"
        >
          {isCollapsed ? (
            <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
          ) : (
            <>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="cursor-pointer"
              />
            </>
          )}
        </div>
      </SidebarHeader>
      <Menu
        iconShape="circle"
        className="border-t-2 border-white bg-blue"
        popperArrow
      >
        <MenuItem
          icon={<FontAwesomeIcon icon={faGem} className="cursor-pointer" />}
        >
          Dashboard
        </MenuItem>
        <SubMenu
          title="Components"
          icon={<FontAwesomeIcon icon={faHeart} className="cursor-pointer" />}
        >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
