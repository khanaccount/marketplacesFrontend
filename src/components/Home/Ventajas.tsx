import React from "react";
import Image from "next/image";

import tg from "../../../public/img/home/telegram.svg";

const Ventajas: React.FC = () => {
    return (
        <section className="mt-[210px]">
            <h1 className="text-5xl font-extrabold">
                Преимущества iKnowROS.app
            </h1>
            <div className="mt-[62px] flex">
                <div className="mr-[20px]">
                    <div className="p-[1px] mb-[17px] bg-gradient-to-r from-custom-purple to-custom-blue  bg-transparent rounded-[14px]">
                        <div className="w-[415px] h-[77px] rounded-[14px] bg-[#2F2F2F] dark:bg-white ">
                            <h5 className="text-[28px] font-extrabold pt-[15px] pl-[22px]  text-white dark:text-black">
                                Статистика
                            </h5>
                        </div>
                    </div>
                    <div className="w-[415px] h-[180px]  rounded-[14px] bg-[#2F2F2F] dark:bg-white">
                        <p className="text-[20px] pt-[22px] pl-[22px] pr-[25px] pb-[21px]  text-white dark:text-black">
                            Получите подробную информацию о заказах, продажах,
                            выкупе и тепловой карте распределения заказов.
                        </p>
                    </div>
                </div>
                <div className="mr-[20px]">
                    <div className="p-[1px] mb-[17px] bg-gradient-to-r from-custom-purple to-custom-blue  bg-transparent rounded-[14px]">
                        <div className="w-[415px] h-[77px] rounded-[14px] bg-[#2F2F2F] dark:bg-white">
                            <h5 className="text-[28px] font-extrabold pt-[15px] pl-[22px]  text-white dark:text-black">
                                Финансовая аналитика
                            </h5>
                        </div>
                    </div>
                    <div className="w-[415px] h-[180px]  rounded-[14px] bg-[#2F2F2F] dark:bg-white">
                        <p className="text-[20px] pt-[22px] pl-[22px] pr-[25px] pb-[21px]  text-white dark:text-black">
                            Расчет фактической юнит-экономики, отчет о прибылях
                            и убытках, а также ключевые финансовые показатели:
                            ДРР, ROS, ROI и чистая прибыль.
                        </p>
                    </div>
                </div>
                <div className="mr-[20px]">
                    <div className="p-[1px] mb-[17px] bg-gradient-to-r from-custom-purple to-custom-blue  bg-transparent rounded-[14px]">
                        <div className="w-[415px] h-[77px]  rounded-[14px] bg-[#2F2F2F] dark:bg-white">
                            <h5 className="text-[28px] font-extrabold pt-[15px] pl-[22px]  text-white dark:text-black">
                                Товарная аналитика
                            </h5>
                        </div>
                    </div>
                    <div className="w-[415px] h-[180px]  rounded-[14px] bg-[#2F2F2F] dark:bg-white">
                        <p className="text-[20px] pt-[22px] pl-[22px] pr-[25px] pb-[21px]  text-white dark:text-black">
                            АВС анализ для эффективного управления товарным
                            ассортиментом.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="p-[1px] mb-[17px] bg-gradient-to-r from-custom-purple to-custom-blue  bg-transparent rounded-[14px]">
                        <div className="w-[415px] h-[77px] rounded-[14px] flex justify-between bg-[#2F2F2F] dark:bg-white">
                            <h5 className="text-[28px] font-extrabold pt-[15px] pl-[22px]  text-white dark:text-black ">
                                Телеграмм-Бот
                            </h5>
                            <Image
                                className="mr-[25px]"
                                src={tg}
                                width={45}
                                height={45}
                                alt="telegram"
                            />
                        </div>
                    </div>
                    <div className="w-[415px] h-[180px]  rounded-[14px] bg-[#2F2F2F] dark:bg-white">
                        <p className="text-[20px] pt-[22px] pl-[22px] pr-[25px] pb-[21px]  text-white dark:text-black">
                            Управляйте кабинетом и получайте ежедневные отчеты,
                            все это в удобном мессенджере.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ventajas;
