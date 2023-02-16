import "./globals.css";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="font-play" style={{ maxWidth: "100vw", margin: "auto" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
