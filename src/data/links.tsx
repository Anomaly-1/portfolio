import {
    IconBrandGithub,
    IconExchange,
    IconHome,
    IconAssembly,
    IconTerminal2,
    IconReceipt,
    IconMail,
  } from "@tabler/icons-react";

import Image from "next/image";

const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
 
    {
      title: "Projects",
      icon: (
        <IconAssembly className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Hackathons",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/hackathons",
    },
    {
      title: "Resume",
      icon: (
        <IconReceipt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Anomaly-1",
    },
  ];

export default links;