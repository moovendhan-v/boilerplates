import { FeaturesSection, FeaturesSectionNeon } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/contributer";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { AnimatedBeamMultipleOutputDemo } from "@/components/layout/sections/theme";

export const metadata = {
  title: "All in one boilerplates",
  description: "here you can get all the boilerplates code for your all next projects",
  openGraph: {
    type: "website",
    url: "https://github.com/moovendhan-v/boilerplates",
    title: "All in one boilerplates",
    description: "here you can get all the boilerplates code for your all next projects",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "All in one boilerplates",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <FeaturesSectionNeon />
      {/* <FeaturesSection /> */}
      <AnimatedBeamMultipleOutputDemo />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}
