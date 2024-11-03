import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

interface RouteProps {
    href: string;
    label: string;
}
export const routeList: RouteProps[] = [
    {
        href: "#explore",
        label: "Explore",
    },
    {
        href: "#contact",
        label: "Contact",
    },
    {
        href: "#blogs",
        label: "Blogs",
    }
];


interface FeatureProps {
    title: string;
    description: string;
}
export const featureList: FeatureProps[] = [
    {
        title: "Accelerate Development",
        description: "Kickstart your projects with pre-configured setups for multiple languages.",
    },
    {
        title: "Consistent Structure",
        description: "Maintain code consistency across languages with standardized boilerplates.",
    },
    {
        title: "Simplify Setup",
        description: "Get started faster by skipping repetitive setup tasks and focusing on building.",
    },
];

export const navItems = [
    {
      name: "Explore",
      link: "/explore",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blogs",
      link: "/blogs",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];