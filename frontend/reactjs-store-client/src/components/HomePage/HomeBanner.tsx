import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Slide1 from "./Slide1";

function HomeBanner() {
  return (
    <Tabs defaultValue="1" className="relative w-full overflow-hidden h-[764px]">
      <TabsContent value="1">
        <Slide1 />
      </TabsContent>
      <TabsContent value="2">
        <div className="h-[764px] bg-muted flex items-center justify-center">Slide 2</div>
      </TabsContent>
      <TabsContent value="3">
        <div className="h-[764px] bg-muted flex items-center justify-center">Slide 3</div>
      </TabsContent>
      <TabsList className="absolute bottom-[52.93px] left-1/2 -translate-x-1/2 grid grid-cols-3 gap-[24px] w-[66px] h-[14.6px] z-20 bg-transparent shadow-none">
        <TabsTrigger value={"1"} className="w-6 h-[14.6px] flex items-center justify-center p-0 group">
          <div className="w-3 h-3 rotate-45 border border-pink bg-transparent group-data-[state=active]:bg-pink" />
        </TabsTrigger>
        <TabsTrigger value={"2"} className="w-6 h-[14.6px] flex items-center justify-center p-0 group">
          <div className="w-3 h-3 rotate-45 border border-pink bg-transparent group-data-[state=active]:bg-pink" />
        </TabsTrigger>
        <TabsTrigger value={"3"} className="w-6 h-[14.6px] flex items-center justify-center p-0 group">
          <div className="w-3 h-3 rotate-45 border border-pink bg-transparent group-data-[state=active]:bg-pink" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default HomeBanner;
