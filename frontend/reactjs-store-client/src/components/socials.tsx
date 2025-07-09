import { routes } from "@/routes/config";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { Icon } from "@iconify/react";

function Socials() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to={routes.about}>
          <div className="flex items-center justify-center w-[19.41px] h-[19.41px] rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
            <Button variant="ghost">
              <Icon icon="bx:bxl-facebook" className="w-[12.4px] h-[12.4px]" />
            </Button>
          </div>
        </Link>
        <Link to={routes.about}>
          <div className="flex items-center justify-center w-[19.41px] h-[19.41px] rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
            <Button variant="ghost">
              <Icon icon="bx:bxl-instagram-alt" className="w-[12.4px] h-[12.4px]" />
            </Button>
          </div>
        </Link>
        <Link to={routes.about}>
          <div className="flex items-center justify-center w-[19.41px] h-[19.41px] rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
            <Button variant="ghost">
              <Icon icon="akar-icons:twitter-fill" className="w-[12.4px] h-[12.4px]" />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Socials;
