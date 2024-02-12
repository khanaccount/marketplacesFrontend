import { Metadata } from "next";

import ThemeToggle from "@/components/ThemeToggle";
import LoginForm from "@/components/Auth/Login/LoginForm";

export const metadata: Metadata = {
    title: "Вход в учетную запись",
    description:
        "Войдите в свою учетную запись на Моем сайте для доступа к личным данным и функциям",
};

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="max-w-[1640px] mt-[60px] pl-[10px] pr-[10px] w-full px-4">
                <div className="flex justify-between ">
                    <div>
                        <h4 className="text-2xl">iKnowROS.app</h4>
                        <h1 className="font-extrabold text-5xl mt-8">
                            Авторизация
                        </h1>
                    </div>
                    <div>
                        <ThemeToggle />
                    </div>
                </div>
                <div className="mt-8">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
