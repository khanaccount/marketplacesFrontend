import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return <div className="dark:bg-[#232323] min-h-screen">{children}</div>;
}
