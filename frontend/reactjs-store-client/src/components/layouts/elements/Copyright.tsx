import Socials from "@/components/socials";


function Copyright() {
  return (
    <div className=" bg-pantone-purple py-5 px-60 pr-80 text-sm text-muted-foreground font-medium flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-gray font-semibold">© Webecy – All Rights Reserved</p>
      <Socials />
    </div>
  );
}

export default Copyright;
