import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "Github",
    href: "https://github.com/luweili1",
    icon: <GithubIcon className="size-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/luweili/",
    icon: <LinkedinIcon className="size-5" />,
  },
  {
    title: "Email",
    href: "mailto:{luweili1@hotmail.com}",
    icon: <MailIcon className="size-5" />,
  },
];

export function Socials() {
  return (
    <div className="flex justify-center placeholder:justify-center space-x-7 font-semibold">
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          <div className="flex gap-3 text-black bg-green-200 py-1 px-4 rounded-3xl hover:underline underline-offset-2">
            <p>{link.icon}</p>
            <p>{link.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
