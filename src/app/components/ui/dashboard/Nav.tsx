// app/components/ui/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/dashboard" },
  { name: "Customers", href: "/dashboard/customers" },
  { name: "Invoices", href: "/dashboard/invoices" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "px-4 py-2 rounded transition-colors duration-200",
            pathname === link.href
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-gray-100 hover:text-blue-700"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
