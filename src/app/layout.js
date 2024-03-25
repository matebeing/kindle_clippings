import { Urbanist } from "next/font/google";
import "./globals.css";
import { FileProvider } from './hooks/fileContext';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Kindle Clippings",
  description: "A simple web app to manage your Kindle clippings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <FileProvider>
          {children}
        </FileProvider>  
      </body>
    </html>
  );
}
