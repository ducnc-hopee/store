import { Icon } from "@iconify/react";

function Copyright() {
  return (
    <div className=" bg-pantone-purple py-5 px-60 pr-80 text-sm text-muted-foreground font-medium flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-gray font-semibold">© Webecy – All Rights Reserved</p>

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
          <Icon icon="bx:bxl-facebook" className="w-4 h-4" />
        </div>

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
          <Icon icon="bx:bxl-instagram-alt" className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
          <Icon icon="akar-icons:twitter-fill" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Copyright;
