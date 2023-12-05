import React, { useEffect } from "react";
import useSettings from "../hooks/useSettings";
import Link from "next/link";

const AdminSidebar = () => {
  const { themeMode } = useSettings();
  useEffect(() => {
    const body = document.querySelector("body");
    document.body.classList.add("body_pddng");
    return () => {
      body.classList.remove("body_pddng");
    };
  });
  return (
    <div className={`as_sdbr ${themeMode === "dark" && "text-white"}`}>
      <Link
        className={`text-decoration-none text-warning`}
        href="/admin/user/user-list"
      >
        User Management
      </Link>

      <Link
        className={`text-decoration-none text-warning`}
        href="/admin/affiliate-management-dashboard"
      >
        Affiliate Management
      </Link>

      <Link
        className={`text-decoration-none text-warning`}
        href="/admin/subscription-management"
      >
        Subscription Management
      </Link>

      <div className="my-4">
        <Link
          className={`text-decoration-none text-warning`}
          href="/admin/grading-management"
        >
          Grading Management
        </Link>
      </div>

      <Link
        className={`text-decoration-none text-warning`}
        href="/admin/smart-money/list"
      >
        Smart Money Management
      </Link>
    </div>
  );
};

export default AdminSidebar;
