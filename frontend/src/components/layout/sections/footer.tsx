import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import { footerSocial } from "@/data/footer.data"
import { Icon } from "@/components/ui/icon";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container">
      <div className="p-10 bg-card border border-secondary">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="font-bold text-lg flex items-center text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              {/* // add the svg here  */}
              Boilerplates
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            {footerSocial.map(({ icon, name }) => (
              <div key={name} className="flex items-center"> {/* Add flex container here */}
                <Link href="#" className="opacity-60 hover:opacity-100 flex items-center"> {/* Added flex and items-center for vertical alignment */}
                  <Icon
                    name={icon as keyof typeof icons}
                    size={12}
                    color="white"
                    className="mr-2"
                  />
                  {name}
                </Link>
              </div>
            ))}
          </div>


          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            {footerSocial.map(({ icon, name }) => (
              <div key={name} className="flex items-center"> {/* Add flex container here */}
                <Link href="#" className="opacity-60 hover:opacity-100 flex items-center"> {/* Added flex and items-center for vertical alignment */}
                  <Icon
                    name={icon as keyof typeof icons}
                    size={12}
                    color="white"
                    className="mr-2"
                  />
                  {name}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            {footerSocial.map(({ icon, name }) => (
              <div key={name} className="flex items-center"> {/* Add flex container here */}
                <Link href="#" className="opacity-60 hover:opacity-100 flex items-center"> {/* Added flex and items-center for vertical alignment */}
                  <Icon
                    name={icon as keyof typeof icons}
                    size={12}
                    color="white"
                    className="mr-2"
                  />
                  {name}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            {footerSocial.map(({ icon, name }) => (
              <div key={name} className="flex items-center"> {/* Add flex container here */}
                <Link href="#" className="opacity-60 hover:opacity-100 flex items-center"> {/* Added flex and items-center for vertical alignment */}
                  <Icon
                    name={icon as keyof typeof icons}
                    size={12}
                    color="white"
                    className="mr-2"
                  />
                  {name}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};
