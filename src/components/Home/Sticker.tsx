import React from "react";
import Image from "next/image";
import Link from "next/link";

import sticker from "../../../public/img/home/sticker.svg";

const Sticker: React.FC = () => {
    return (
        <section className="mt-[113px] flex justify-between items-center	">
            <div>
                <p className="text-3xl font-extrabold w-[1050px]">
                    <span className="text-[#E81CFF]">iKnowROS.app</span> - ваш
                    надежный инструмент для принятия обоснованных решений,
                    адаптированный под ваш бизнес на Wildberries и Ozon. Начните
                    свой путь к успеху прямо сейчас!
                </p>
                <Link
                    href={"/auth/sign-up"}
                    className="pl-[40px] w-[347px] mt-[46px] pr-[40px] h-[69px] flex items-center bg-gradient-to-r from-custom-purple to-custom-blue rounded-[8px] font-semibold text-2xl text-white"
                >
                    Зарегистрироваться
                </Link>
            </div>
            <Image src={sticker} alt="sticker" width={403} height={403} />
        </section>
    );
};

export default Sticker;
