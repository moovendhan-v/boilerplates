import {
  IconAdjustmentsBolt,
  IconTerminal,
  IconCurrencyDollar,
  IconHourglassLow,
  IconAntennaBars3,
  IconClipboardText,
  IconRouteAltLeft,
  IconArrowUp,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface FeaturesProps {
    icon: string;
    title: string;
    description: string;
  }

  export const featureList: FeaturesProps[] = [
    {
      icon: "TabletSmartphone",
      title: "Accelerate Your Development",
      description:
        "Quickly kickstart your projects with pre-built boilerplate code tailored for SaaS applications.",
    },
    {
      icon: "BadgeCheck",
      title: "Enhance Code Quality",
      description:
        "Leverage standardized coding practices to improve maintainability and reduce bugs.",
    },
    {
      icon: "Goal",
      title: "Simplify Integration",
      description:
        "Easily integrate with various APIs and services, streamlining your development process.",
    },
    {
      icon: "ArrowBigUpDash",
      title: "Boost Team Productivity",
      description:
        "Enable your team to focus on feature development instead of boilerplate setup.",
    },
    {
      icon: "MousePointerClick",
      title: "Future-Proof Your Projects",
      description:
        "Stay ahead with code that adheres to the latest industry standards and practices.",
    },
    {
      icon: "Newspaper",
      title: "Comprehensive Documentation",
      description:
        "Access detailed guides and examples to maximize the benefits of our boilerplate code.",
    },
  ];
  
  export const features = [
    {
      title: "Accelerate Your Development",
      description:
        "Quickly kickstart your projects with pre-built boilerplate code tailored for SaaS applications.",
      icon: <IconArrowUp />,
    },
    {
        title: "Enhance Code Quality",
        description:
          "Leverage standardized coding practices to improve maintainability and reduce bugs.",
      icon: <IconAntennaBars3 />,
    },
    {
        title: "Simplify Integration",
        description:
          "Easily integrate with various APIs and services, streamlining your development process.",
      icon: <IconHourglassLow />,
    },
    {
        title: "Boost Team Productivity",
        description:
          "Enable your team to focus on feature development instead of boilerplate setup.",
      icon: <IconTerminal />,
    },
    // {
    //     title: "Future-Proof Your Projects",
    //     description:
    //       "Stay ahead with code that adheres to the latest industry standards and practices.",
    //   icon: <IconRouteAltLeft />,
    // },
    // {
    //     title: "Comprehensive Documentation",
    //     description:
    //       "Access detailed guides and examples to maximize the benefits of our boilerplate code.",
    //   icon: <IconClipboardText />,
    // }
  ];