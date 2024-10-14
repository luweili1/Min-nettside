import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Om meg",
    href: "/om-meg",
  },
];

export function Header() {
  const title = "LUWEI LI";
  return (
    <div className="dark:bg-green-950 bg-green-200 p-5 border-b flex justify-between">
      <h1>{title}</h1>
      <div className="space-x-5 my-auto">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            {route.title}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}
