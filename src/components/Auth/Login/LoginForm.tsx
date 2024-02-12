import React from "react";
import Image from "next/image";
import Link from "next/link";

import gbitem from "../../../../public/img/auth/login/gbitem.png";

import { OpenEye } from "./OpenEyeSvg";
import { CloseEye } from "./CloseEyeSvg";
import { ExitSvg } from "./ExitSvg";

const LoginForm: React.FC = () => {
    return (
        <>
            <div className="mt-24 mb-[170px] max-w-[530px]">
                <input
                    className="w-[502px] h-[80px] bg-transparent mt-[30px] pr-[24px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] border-white"
                    type="text"
                    id="phone"
                    placeholder="Введите номер телефона"
                />
                <input
                    className="w-[502px] h-[80px] bg-transparent mt-[30px] pr-[24px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] border-white"
                    id="password"
                    placeholder="Введите пароль"
                />

                <form className="relative">
                    <button className="absolute top-[-40px] right-[32px] transform -translate-x-1/2 -translate-y-1/2">
                        <OpenEye />

                        {/* <CloseEye /> */}
                    </button>
                </form>
                <Image
                    className="absolute top-0 right-0 opacity-60 z-10 pointer-events-none"
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
                        className="w-[27px] h-[27px] mr-[8px]"
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
            <div className="flex mt-[40px] justify-center pb-[20px]">
                <p className="mr-[23px] font-semibold text-[24px]">
                    Нет аккаунта?
                </p>
                <div className="flex items-center">
                    <ExitSvg />
                    <Link
                        href={"#"}
                        className="pdl-[3px] font-semibold text-[24px] cursor-pointer"
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </>
    );
};
export default LoginForm;
