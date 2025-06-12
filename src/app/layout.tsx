import { inter } from "./components/fonts";
// import Sidebar from "./components/ui/dashboard/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {/* <Sidebar/> */}
        {children}
      </body>
    </html>
  );
}
