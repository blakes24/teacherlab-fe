import { logout } from "../../services/auth";
import { getSubjects } from "../../services/user";
import { setIsAuthenticated } from "../../store/user-slicer";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import {
  faChevronLeft,
  faBars,
  faBookOpen,
  faFlask,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import cx from "classnames";

export default function SideBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const titleClasses = cx(
    "uppercase text-yellow text-x transition duration-200 ease-in-out self-center",
    {
      "transform-gpu -translate-x-44 absolute -left-16": isCollapsed,
    }
  );
  const footerClasses = cx("p-3 text-center uppercase", {
    "transform-gpu -translate-x-44 absolute -left-16": isCollapsed,
  });

  const icons = { ELA: faBookOpen, MATH: faPlus, SCIENCE: faFlask };

  useEffect(async () => {
    const res = await getSubjects();
    setSubjects(res);
  }, []);

  function handleLogout() {
    logout();
    dispatch(setIsAuthenticated(false));
    router.push("/login");
  }

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
      <SidebarContent>
        <Menu
          iconShape="circle"
          className="border-t-2 border-white bg-blue"
          popperArrow
        >
          <MenuItem>
            <Link href="/">
              <a>DASHBOARD</a>
            </Link>
          </MenuItem>
          {subjects &&
            subjects.map((s) => (
              <SubMenu
                title={`${s.name} - ${s.grade}`}
                icon={
                  <FontAwesomeIcon
                    icon={icons[s.name] || faBookOpen}
                    className="cursor-pointer"
                  />
                }
                key={s.id}
              >
                {s.units.length ? (
                  s.units.map((u) => (
                    <MenuItem key={u.id}>
                      <Link href={`/units/${u.id}`}>
                        <a>{`Unit ${u.number}`}</a>
                      </Link>
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem>No Units Yet</MenuItem>
                )}
              </SubMenu>
            ))}
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <div
          className={footerClasses}
          role="button"
          onClick={() => handleLogout()}
        >
          Logout
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}
