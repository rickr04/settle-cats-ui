import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Cats",
  description: "An app for cats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
