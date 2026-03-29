import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Growth Stack",
  description: "Skill Investment Portfolio Engine"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}