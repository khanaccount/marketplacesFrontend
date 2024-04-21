"use client";

import React from "react";
import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";

import arrow from "../../../public/img/home/arrow.svg";

const Footer: React.FC = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <section className="mt-[217px]  bg-[#2F2F2F] dark:bg-white">
            <div className="m-auto  max-w-[1720px]  pt-[44px] pb-[37px]">
                <div className="flex justify-between ">
                    <p className="text-3xl text-white dark:text-[#2F2F2F] font-medium">
                        iKnowROS.app
                    </p>
                    <div className="flex">
                        <p className="pr-[50px] font-semibold text-2xl text-white dark:text-[#2F2F2F] ">
                            Преимущества
                        </p>
                        <p className="pr-[50px] font-semibold text-2xl text-white dark:text-[#2F2F2F] ">
                            Главная
                        </p>
                        <p className="text-2xl font-semibold text-white dark:text-[#2F2F2F]">
                            Почему мы
                        </p>
                    </div>
                    <div>
                        <p className="text-white dark:text-[#2F2F2F]">
                            Пользовательское соглашение
                        </p>
                        <p className="text-white dark:text-[#2F2F2F]">
                            Политика конфиденциальности
                        </p>
                        <p className="text-white dark:text-[#2F2F2F]">
                            Публичная оферта
                        </p>
                        <p className="text-white dark:text-[#2F2F2F]">
                            Использование cookie
                        </p>
                        <p className="text-white dark:text-[#2F2F2F]">
                            Техническая поддержка
                        </p>
                    </div>
                    <div className="mt-[55px]">
                        <div
                            onClick={scrollToTop}
                            className="p-5 pr-[25px] rounded-full cursor-pointer bg-white shadow-lg"
                        >
                            <Image
                                className="ml-[5px]"
                                src={arrow}
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </div>
                    </div>
                </div>
                <p className="mt-[53px] text-[14px] text-white dark:text-[#2F2F2F]">
                    ©️ Все права защищены, 2024
                </p>
            </div>
        </section>
    );
};

export default Footer;
