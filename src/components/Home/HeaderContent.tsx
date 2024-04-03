import React from "react";
import Image from "next/image";
import { Diagram } from "@/components/Home/DiagramSvg";
import starsPng from "../../../public/img/home/star.png";

const HeaderContent: React.FC = () => {
    return (
        <section className="flex mt-[67px]">
            <div className="mt-[137px]">
                <h1 className=" text-5xl font-bold">
                    Ваш путеводитель в мире успешного бизнеса <br /> на
                    Wildberries и Ozon
                </h1>

                <div className="flex mt-[55px]">
                    <button className="px-[40px] py-[20px] bg-gradient-to-r from-custom-purple to-custom-blue rounded-[8px] font-semibold text-2xl">
                        Попробовать бесплатно
                    </button>
                    <button className="ml-[20px] px-[4px] py-[4px] bg-gradient-to-r from-custom-purple to-custom-blue  bg-transparent rounded-[8px] ">
                        <div className=" h-[100%] px-[40px] py-[20px] flex items-center dark:bg-[#232323]  rounded-[8px] font-semibold text-2xl bg-[#FFFFFF] ">
                            Узнать больше
                        </div>
                    </button>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 top-[-50px] rounded-full bg-gradient-to-r from-custom-purple to-custom-blue opacity-10 filter blur-[90px]"></div>

                <Diagram />
                <Image
                    className="absolute top-[415px] right-[450px]"
                    width={303}
                    height={303}
                    src={starsPng}
                    alt="stars"
                />
                <div className="absolute top-[370px] right-[20px]">
                    <div className="flex items-center">
                        <div className="bg-purple-600 rounded-[1px] w-[10px] h-[10px] mr-[4px] text-white"></div>
                        <p className="text-[12px]">Чистая прибыль</p>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-[#49C0F9] rounded-[1px] w-[10px] h-[10px] mr-[4px] text-white"></div>
                        <p className="text-[12px]">Себестоимость</p>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-[#8587FF] rounded-[1px] w-[10px] h-[10px] mr-[4px] text-white"></div>
                        <p className="text-[12px]">Прочие расходы</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;
