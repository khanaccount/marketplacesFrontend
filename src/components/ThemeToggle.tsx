"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import MoonNotActive from "../../public/img/ThemeToggle/moon-not-active.svg";
import MoonActive from "../../public/img/ThemeToggle/moon-active.svg";
import SunNotActive from "../../public/img/ThemeToggle/sun-not-active.svg";
import SunActive from "../../public/img/ThemeToggle/sun-active.svg";

const ThemeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(true);

    const { setTheme } = useTheme();

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setDarkMode(storedTheme === "white");
            setTheme(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        const themeName = darkMode ? "dark" : "white";
        setTheme(themeName);
        localStorage.setItem("theme", themeName);
    };

    return (
        <div className="w-[113px] h-[46px] flex justify-between items-center pb-[3px] p-[6px] pt-[3px] rounded-[12px] bg-[#2F2F2F] relative">
            <div
                className="absolute w-[38px] h-[40px] bg-[#FFFFFF] rounded-[8px] transition-transform duration-500 ease-in-out"
                style={{
                    transform:
                        darkMode === true
                            ? "translateX(0)"
                            : "translateX(63px)",
                }}
            ></div>

            <button
                className={`w-[38px] h-[40px] rounded-[8px] outline-none flex justify-center items-center ${
                    darkMode === true ? "z-20" : ""
                }`}
                onClick={toggleTheme}
            >
                <Image
                    src={darkMode === true ? SunActive : SunNotActive}
                    width={27}
                    height={27}
                    alt="Sun"
                />
            </button>

            <button
                className={`w-[38px] h-[40px] rounded-[8px] outline-none flex justify-center items-center ${
                    darkMode === false ? "z-20" : ""
                }`}
                onClick={toggleTheme}
            >
                <Image
                    src={darkMode === false ? MoonActive : MoonNotActive}
                    width={27}
                    height={27}
                    alt="Moon"
                />
            </button>
        </div>
    );
};

export default ThemeToggle;
