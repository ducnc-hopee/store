import type { TProduct } from "@/types/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Button } from "../ui/Button";
import { Icon } from "@iconify/react";

type TProductDetailsProps = {
  data: TProduct | null;
};

const MoreDetails: React.FC<TProductDetailsProps> = ({ data }) => {
  return (
    <div>
      <div>
        <Tabs defaultValue="description" className="flex flex-col items-right bg-off-white text-navy-blue pl-[376px] pt-[107px] h-[649px] pb-[122px]">
          <TabsList className="pb-[61px] gap-[63px]">
            <TabsTrigger value="description">
              <h1 className="text-[24px] font-semibold">Description</h1>
            </TabsTrigger>
            <TabsTrigger value="info">
              <h1 className="text-[24px] font-semibold">Additional Info</h1>
            </TabsTrigger>
            <TabsTrigger value="reviews">
              <h1 className="text-[24px] font-semibold">Reviews</h1>
            </TabsTrigger>
            <TabsTrigger value="videos">
              <h1 className="text-[24px] font-semibold">Video</h1>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pl-4">
            <div>
              <h1 className="text-[22px] font-semibold pb-[14px]">Varius tempor.</h1>
              <h1 className="text-gray text-[16px] w-[1153px] pb-[36px]">
                {data?.description}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolores natus a voluptatibus quos eligendi! Hic rerum fuga quos illum
                quaerat vero, cumque est omnis exercitationem illo, in, perspiciatis molestiae.
              </h1>
            </div>
            <div>
              <h1 className="text-[22px] font-semibold pb-[16px]">More details</h1>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1 className="pb-[14px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row items-start">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1 className="pb-[14px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="info" className="pl-4">
            <div>
              <h1 className="text-[22px] font-semibold pb-3">Varius tempor.</h1>
              <h1 className="text-gray pb-8">Addtional info</h1>
            </div>
            <div>
              <h1 className="text-[22px] font-semibold pb-[16px]">More details</h1>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1 className="pb-[14px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row items-start">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1 className="pb-[14px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pl-4">
            <div>
              <h1 className="text-[22px] font-semibold pb-3">Varius tempor.</h1>
              <h1 className="text-gray pb-8">Reviews</h1>
            </div>
            <div>
              <h1 className="text-[22px] font-semibold pb-[16px]">More details</h1>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1 className="pb-[14px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row items-start">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1 className="pb-[14px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="videos" className="pl-4">
            <div>
              <h1 className="text-[22px] font-semibold pb-3">Varius tempor.</h1>
              <h1 className="text-gray pb-8">Videos</h1>
            </div>
            <div>
              <h1 className="text-[22px] font-semibold pb-[16px]">More details</h1>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1 className="pb-[14px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row items-start">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1 className="pb-[14px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
                <div className="flex flex-row">
                  <Button variant="ghost" className=" flex flex-col items-start justify-start p-0">
                    <Icon icon="akar-icons:arrow-up" className="rotate-90 w-[14px] h-[16px]" />
                  </Button>
                  <h1>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
                    nunc nec. Dui, massa viverr .
                  </h1>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MoreDetails;
