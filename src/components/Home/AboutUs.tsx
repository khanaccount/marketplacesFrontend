import React from "react";
import Image from "next/image";

import line1 from "../../../public/img/home/line1.svg";
import line2 from "../../../public/img/home/line2.svg";
import line3 from "../../../public/img/home/line3.svg";

import bgLeft from "../../../public/img/home/bg_ring_left.png";

const AboutUs: React.FC = () => {
    return (
        <section className="relative bg-graph bg-cover mt-[80px]">
            <Image
                className="absolute top-[810px] right-0"
                src={line1}
                width={952}
                height={0}
                alt="line"
            />
            <Image
                className="absolute top-[340px] left-0"
                src={line2}
                width={952}
                height={0}
                alt="line"
            />
            <Image
                className="absolute top-[555px] left-1/4"
                src={line3}
                width={952}
                height={0}
                alt="line"
            />
            <div className="m-auto  max-w-[1720px]">
                <h1 className="font-medium text-5xl">
                    Почему iKnowROS — <br /> это правильный выбор для вас?
                </h1>

                <div className="mt-[80px] mb-[118px]">
                    <h5 className="font-semibold text-[24px]">
                        Автоматический расчет и аналитика
                    </h5>
                    <p className="mt-2 text-[20px] max-w-[680px]">
                        Мы обновляем ваши данные каждые 15 минут, обеспечивая
                        моментальный доступ к актуальной информации.
                    </p>
                </div>
                <div className="mt-[80px] mb-[118px] ml-[400px]">
                    <h5 className="font-semibold text-[24px]">
                        Разработан селлерами для селлеров{" "}
                    </h5>
                    <p className="mt-2 text-[20px] max-w-[680px]">
                        Наш сервис создан при активном участии действующих
                        селлеров, которые знают и понимают тонкости
                        маркетплейсов.
                    </p>
                </div>
                <div className="ml-[880px]">
                    <h5 className="font-semibold text-[24px] ">
                        Управление отчетностью в одном месте{" "}
                    </h5>
                    <p className="mt-2 text-[20px] max-w-[680px]">
                        iKnowROS.app позволяет автоматизировать управленческую
                        отчетность, предоставляя полную картину бизнеса в одном
                        удобном месте.
                    </p>
                </div>
            </div>
            <Image
                className="absolute left-0 top-[450px] -z-10 opacity-40"
                src={bgLeft}
                alt="bgRight"
            />
        </section>
    );
};

export default AboutUs;
