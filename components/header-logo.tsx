import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="budget-tracker.svg" alt="Logo" height={28} width={28} />
                <p className="font-semibold text-white text-2xl ml-2.5">
                    Horizon
                </p>
            </div>
        </Link>
    );
};