import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

// applies current-page class if a link matches the current path
const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter();
  let className = children.props.className || "";

  if (asPath === props.href) {
    className = `${className} current-page`.trim();
  }

  return <Link {...props}>{React.cloneElement(children, { className })}</Link>;
};

export default ActiveLink;
