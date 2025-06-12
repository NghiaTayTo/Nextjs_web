'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const menu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Settings',
    href: '/settings',
    children: [
      {
        name: 'Profile',
        href: '/settings/profile',
      },
      {
        name: 'Security',
        href: '/settings/security',
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-100 h-screen p-4 space-y-2">
      {menu.map((item) => (
        <div key={item.name}>
          <Link
            href={item.href}
            className={clsx(
              'block p-2 rounded hover:bg-gray-200 font-medium',
              pathname === item.href && 'bg-blue-500 text-white'
            )}
          >
            {item.name}
          </Link>

          {item.children && (
            <div className="ml-4 mt-1 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className={clsx(
                    'block p-1.5 rounded text-sm hover:bg-gray-200',
                    pathname === child.href && 'bg-blue-400 text-white'
                  )}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
