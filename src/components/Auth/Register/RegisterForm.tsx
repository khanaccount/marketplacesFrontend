"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import gbitem from "../../../../public/img/auth/login/gbitem.png";

import { OpenEye } from "../OpenEyeSvg";
import { CloseEye } from "../CloseEyeSvg";
import { ExitSvg } from "../ExitSvg";

const RegisterForm: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="mt-20 mb-[60px] max-w-1150px mx-auto flex  ">
                <div className="flex-1 max-w-[502px] mr-[146px]  z-20">
                    <p className="font-normal text-[18px]">
                        Необходимые данные
                    </p>
                    <input
                        className="w-[502px] h-[80px] bg-transparent mt-[30px] pr-[24px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] dark:border-white white: border-[#2F2F2F]"
                        type="text"
                        id="Fio"
                        placeholder="Введите ФИО"
                    />
                    <input
                        className="w-[502px] h-[80px] bg-transparent mt-[30px] pr-[24px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] dark:border-white white: border-[#2F2F2F]"
                        id="phone"
                        placeholder="Введите номер телефона"
                    />
                    <input
                        className="w-[502px] h-[80px] bg-transparent mt-[30px] pr-[24px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] dark:border-white white: border-[#2F2F2F]"
                        id="mail"
                        placeholder="Введите электронную почту"
                    />
                </div>
                <div className="flex-1 max-w-[502px]  z-20">
                    <p className="font-normal text-[18px]">Создайте пароль</p>
                    <form className="relative  mt-[30px] w-[502px]">
                        <input
                            className="w-[502px] h-[80px] bg-transparent pr-[24px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] dark:border-white white: border-[#2F2F2F]"
                            id="createPassword"
                            placeholder="Создайте пароль"
                            type={passwordVisible ? "text" : "password"}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-[26px] right-[32px] "
                        >
                            {passwordVisible ? <CloseEye /> : <OpenEye />}
                        </button>
                    </form>
                    <form className="relative  mt-[30px] w-[502px]">
                        <input
                            className="w-[502px] h-[80px] bg-transparent pr-[195px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] dark:border-white white: border-[#2F2F2F]"
                            id="promo"
                            placeholder="Промокод"
                        />
                        <button className="absolute top-0 right-0 h-full px-8 rounded-r-[8px] dark:bg-white dark:text-black bg-black text-white font-bold text-xl">
                            Применить
                        </button>
                    </form>
                </div>

                <Image
                    className="absolute top-0 right-0 opacity-60 z-1 pointer-events-none "
                    z-10
                    loading="eager"
                    src={gbitem}
                    width={995}
                    height={900}
                    alt="gbitem"
                />
            </div>
            <div className="flex flex-col">
                <button className="w-[256px] h-[68px] bg-gradient-to-r from-custom-purple to-custom-blue rounded-[8px] font-semibold text-2xl mb-[52px]">
                    Войти
                </button>

                <label className="flex items-center cursor-pointer">
                    <input
                        className="w-[27px] h-[27px] mr-[8px] dark:accent-white white:accent-[#2F2F2F]"
                        type="checkbox"
                    />
                    <span className="text-[14px] ">
                        Я согласен с
                        <span className="underline underline-offset-4 ml-[4px]">
                            условиями обработки данных
                        </span>
                    </span>
                </label>
            </div>
            <div className="flex mt-[20px] justify-center pb-[10px]">
                <p className="mr-[23px] font-semibold text-[24px]">
                    Нет аккаунта?
                </p>
                <div className="flex items-center">
                    <ExitSvg />
                    <Link
                        href={"/auth/sign-in"}
                        className="pdl-[3px] font-semibold text-[24px] cursor-pointer"
                    >
                        Войти
                    </Link>
                </div>
            </div>
        </>
    );
};
export default RegisterForm;
