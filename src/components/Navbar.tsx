import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

import { ExitSvg } from "./Auth/ExitSvg";

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center mt-[60px]">
            <h4 className="text-3xl">iKnowROS.app</h4>

            <div className="flex">
                <p className="pr-[50px] text-2xl font-bold cursor-pointer">
                    Преимущества
                </p>
                <p className="pr-[50px] text-2xl font-bold cursor-pointer">
                    Главная
                </p>
                <p className="text-2xl font-bold cursor-pointer">Почему мы</p>
            </div>

            <ThemeToggle />

            <div className="flex">
                <div className="flex items-center mr-[20px]">
                    <ExitSvg />

                    <Link
                        href={"/auth/sign-up"}
                        className="pdl-[3px] font-semibold text-[24px] cursor-pointer"
                    >
                        Войти
                    </Link>
                </div>
                <button className="pl-[40px] pr-[40px] h-[47px] bg-gradient-to-r from-custom-purple to-custom-blue rounded-[8px] font-semibold text-2xl ">
                    Регистрация
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
