
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import Category from "./Category";

function Categories() {
  return (
    <div>
      <div className="flex flex-col items-center justify-start pt-[35px] bg-[url('/images/bg.jpg')] bg-cover bg-center h-[1051px]">
        <h1 className="font-bold text-[43px] mb-[18px] text-navy-blue">Top Categories</h1>
        <div className="mx-[170px] grid grid-rows-1 grid-cols-6 gap-x-[12px]">
          <Category />
          <Category />  
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
        <Tabs defaultValue="1">
          <TabsList className="flex gap-[20px] z-20 bg-transparent shadow-none p-0 mt-[32px] w-[66px] h-[14px]">
            <TabsTrigger value={"1"} className="flex items-center justify-center p-0 group">
              <div className="w-3 h-3 border rounded-full border-pink bg-transparent group-data-[state=active]:bg-pink" />
            </TabsTrigger>
            <TabsTrigger value={"2"} className=" flex items-center justify-center p-0 transition-all group">
              <div className="w-3 h-3 border rounded-full border-pink bg-transparent group-data-[state=active]:bg-pink" />
            </TabsTrigger>
            <TabsTrigger value={"3"} className=" flex items-center justify-center p-0 transition-all group">
              <div className="w-3 h-3 border rounded-full border-pink bg-transparent group-data-[state=active]:bg-pink" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}

export default Categories;
