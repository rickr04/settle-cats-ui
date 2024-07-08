"use client";
import LandingPage from "./components/LandingScreen";
import NavBar from "./components/Navbar";
import { Button } from "@nextui-org/react";

export default function Home() {
  const switchDarkLightMode = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  return (
    <div>
      <LandingPage />
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <Button color="primary" onClick={switchDarkLightMode}>
          Switch Theme
        </Button>
      </main>
      <NavBar />
    </div>
  );
}
