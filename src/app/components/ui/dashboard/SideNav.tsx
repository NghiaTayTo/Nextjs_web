import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="w-64 min-h-screen bg-gray-100 p-4">
      <ul className="space-y-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/customers">Customers</Link></li>
        <li><Link href="/dashboard/invoices">Invoices</Link></li>
      </ul>
    </nav>
  );
}
