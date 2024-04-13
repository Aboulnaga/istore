import "../Styles/Style.scss";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import BurgerMenu from "../Components/BurgerMenu/BurgerMenu";
import Loader from "../Components/Loader/Loader";
import { useState, useEffect } from "react";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const random = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      setIsLoading(false);
    }, random * 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <BurgerMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
