import { Metadata } from "next";

import ThemeToggle from "@/components/ThemeToggle";
import RegisterForm from "@/components/Auth/Register/RegisterForm";

export const metadata: Metadata = {
    title: "Вход в учетную запись",
    description:
        "Войдите в свою учетную запись на Моем сайте для доступа к личным данным и функциям",
};

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="max-w-[1640px] mt-[60px] pl-[10px] pr-[10px] w-full px-4">
                <div className="flex justify-between ">
                    <div>
                        <h4 className="text-2xl">iKnowROS.app</h4>
                        <h1 className="font-extrabold text-5xl mt-8">
                            Регистрация
                        </h1>
                    </div>
                    <div>
                        <ThemeToggle />
                    </div>
                </div>
                <div className="mt-8">
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
}
