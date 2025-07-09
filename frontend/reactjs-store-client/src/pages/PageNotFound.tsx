import { Button } from "@/components/ui/Button";
import page404 from "/images/404.png";
import { Link } from "react-router-dom";
import { routes } from "@/routes/config";
import BrandLogo from "@/components/BrandLogo";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-[118px]">
      <img src={page404} className="w-[913px] h-fill"></img>
      <Link to={routes.home}>
        <Button className="w-[165px] h-[44px]">Back To Home</Button>
      </Link>
      <BrandLogo/>
    </div>
  );
}

export default PageNotFound;
