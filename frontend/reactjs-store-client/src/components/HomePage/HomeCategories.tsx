
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import Category from "./Category";

function Categories() {
  return (
    <div>
      <div className="flex flex-col items-center justify-start pt-12 bg-[url('/images/bg.jpg')] bg-cover bg-center h-[751px]">
        <h1 className="font-bold text-[42px] text-navy-blue">Top Categories</h1>
        <div className="grid grid-rows-1 grid-cols-6 gap-3">
          <Category />
          <Category />  
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
        <Tabs defaultValue="1">
          <TabsList className="flex gap-3 z-20 bg-transparent shadow-none p-0">
            <TabsTrigger value={"1"} className="w-4 h-4 flex items-center justify-center p-0 group">
              <div className="w-3 h-3 border rounded-2xl border-pink bg-transparent group-data-[state=active]:bg-pink" />
            </TabsTrigger>
            <TabsTrigger value={"2"} className="w-4 h-4 flex items-center justify-center p-0 transition-all group">
              <div className="w-3 h-3 border rounded-2xl border-pink bg-transparent group-data-[state=active]:bg-pink" />
            </TabsTrigger>
            <TabsTrigger value={"3"} className="w-4 h-4 flex items-center justify-center p-0 transition-all group">
              <div className="w-3 h-3 border rounded-2xl border-pink bg-transparent group-data-[state=active]:bg-pink" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}

export default Categories;
