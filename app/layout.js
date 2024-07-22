/*----Routing---
import "./globals.css";
import Header from "@/Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
      <Header/>
      {children}</body>
    </html>
  );
}
*/

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="p-5" >{children}</body>
    </html>
  );
}