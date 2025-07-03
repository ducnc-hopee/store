import { Button } from "@/components/ui/Button";
import page404 from "/images/404.png";
import { Link } from "react-router-dom";
import { routes } from "@/routes/config";
import BrandLogo from "@/components/BrandLogo";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={page404}></img>
      <Link to={routes.home}>
        <Button className="w-[165px] h-[44px] mb-20">Back To Home</Button>
      </Link>
      <BrandLogo/>
    </div>
  );
}

export default PageNotFound;
