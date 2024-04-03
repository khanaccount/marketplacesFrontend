import React from "react";
import Image from "next/image";

import hand from "../../../public/img/home/hand.png";
import heart from "../../../public/img/home/heart.png";
import bgRight from "../../../public/img/home/bg_ring_right.png";
import { Graph } from "./Graph";

const Clarifications: React.FC = () => {
    return (
        <section className="relative bg-graph bg-cover">
            <Graph />
            <Image
                className="absolute right-0 top-[450px] opacity-40"
                src={bgRight}
                alt="bgRight"
            />
            <div className="m-auto  max-w-[1720px]">
                <div className="pt-[233px] flex justify-center">
                    <div className="max-w-[700px] max-h-[180px] relative bg-[#2F2F2F] rounded-t-lg p-7 dark:bg-white">
                        <div className="absolute inset-0 top-0 rounded-full bg-gradient-to-r from-custom-purple to-custom-blue opacity-10 filter blur-[175px]"></div>
                        <p className="text-3xl font-medium text-white dark:text-black">
                            Добро пожаловать в iKnowROS.app, ваш надежный
                            партнер по оцифровке бизнеса на ведущих
                            маркетплейсах.
                        </p>
                        <Image
                            className="absolute left-[545px] bottom-16 "
                            src={hand}
                            width={270}
                            height={270}
                            alt="hand"
                        />
                    </div>
                    <div className="max-w-[670px] max-h-[265px] relative bg-[#2F2F2F]  dark:bg-white rounded-t-lg p-6 ml-[90px] mt-[280px]">
                        <div className="absolute inset-0 top-0 rounded-full bg-gradient-to-r from-custom-purple to-custom-blue opacity-10 filter blur-[175px]"></div>
                        <p className="text-3xl font-medium text-white dark:text-black">
                            Мы стремимся сделать ваш бизнес успешным,
                            предоставляя непревзойденные возможности аналитики и
                            расчета ключевых финансовых показателей.
                        </p>
                        <Image
                            className="absolute left-[505px] top-[90px]"
                            src={heart}
                            width={310}
                            height={310}
                            alt="heart"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clarifications;
