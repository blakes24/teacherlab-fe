import { logout } from "../../services/auth";
import { getSubjects } from "../../services/user";
import { setIsAuthenticated } from "../../store/user-slicer";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import ActiveLink from "./active-link";
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
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import cx from "classnames";
import ReactTooltip from "react-tooltip";

export default function SideBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [subjects, setSubjects] = useState([]);
  const titleClasses = cx(
    "uppercase text-yellow text-x transition duration-200 ease-in-out self-center",
    {
      "transform-gpu -translate-x-44 absolute -left-16": isCollapsed,
    }
  );

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

  function formatLinkHeader({name, grade}) {
    return `${name} - ${grade}`;
  }

  return (
    <ProSidebar
      collapsed={isCollapsed}
      className="border-r-2 border-white bg-blue"
    >
      <SidebarHeader className="px-6 py-3 h-14 bg-blue flex border-blue">
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
          className="bg-blue"
          popperArrow
        >
          <MenuItem
            icon={<FontAwesomeIcon icon={faHome} className="cursor-pointer" />}
          >
            <ActiveLink href="/">
              <a>DASHBOARD</a>
            </ActiveLink>
          </MenuItem>
          {subjects &&
            subjects.map((subject) => (
              <SubMenu
                title={formatLinkHeader(subject)}
                icon={
                  <FontAwesomeIcon
                    icon={icons[subject.name] || faBookOpen}
                    className="cursor-pointer"
                  />
                }
                key={subject.id}
              >
                {isCollapsed && formatLinkHeader(subject)}
                {subject.units.length ? (
                  subject.units.map((unit) => (
                    <MenuItem key={unit.id}>
                      <ActiveLink href={`/units/${unit.id}`}>
                        <a>{`Unit ${unit.number}`}</a>
                      </ActiveLink>
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
        <Menu iconShape="circle">
          {isCollapsed && <ReactTooltip id="logout" />}
          <MenuItem
            onClick={() => handleLogout()}
            data-tip="Log Out"
            data-for="logout"
            data-background-color="rgb(29 57 69)"
            data-offset="{'left':5}"
            data-effect="solid"
            data-place="right"
            icon={
              <FontAwesomeIcon icon={faSignOutAlt} className="cursor-pointer" />
            }
          >
            LOG OUT
          </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
}
