import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { usePathname } from "next/navigation";

type NavItemPropsType = {
  label: string;
  href: string;
};

export const NavItem = ({ href, label }: NavItemPropsType) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-black flex items-center font-medium font-sans",
        isActive && "text-gray-400",
      )}
    >
      {`# ${label}`}
    </Link>
  );
};
