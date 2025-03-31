import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    title: "Hjem",
    href: "/",
  },
  {
    title: "CV",
    href: "/CV",
  },
  {
    title: "Projekter",
    href: "/projekter",
  },
  {
    title: "Kontakt",
    href: "/Kontakt",
  },
];

export function Header() {
  const title = "LUWEI LI";
  return (
    <div className="dark:bg-green-950 bg-blue-300 p-5 border-b flex justify-between">
      <h1>{title}</h1>
      <div className="space-x-5 my-auto">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className="text-lg font-medium"
          >
            {route.title}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}
