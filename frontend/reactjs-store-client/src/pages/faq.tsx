import BrandLogo from "@/components/BrandLogo";
import SendMailForm from "@/components/SendMailForm";

function faq() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 ">
      <div className="grid grid-cols-2 gap-15 text-left my-20 items-start justify-start mx-55">
        <div className="space-y-5">
          <h1 className="text-navy-blue text-4xl font-bold pb-10">General Information</h1>
          <div>
            <h1 className="text-[17px] font-bold text-navy-blue">Eu dictumst cum at sed euismood condimentum?</h1>
            <h1 className="text-gray pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h1>
          </div>
          <div>
            <h1 className="text-[17px] font-bold text-navy-blue">Magna bibendum est fermentum eros.</h1>
            <h1 className="text-gray pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h1>
          </div>
          <div>
            <h1 className="text-[17px] font-bold text-navy-blue">Odio muskana hak eris conseekin sceleton?</h1>
            <h1 className="text-gray pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h1>
          </div>
          <div>
            <h1 className="text-[17px] font-bold text-navy-blue">Elit id blandit sabara boi velit gua mara?</h1>
            <h1 className="text-gray pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h1>
          </div>
        </div>
        <div>
          <div className="bg-off-white py-20 px-10 rounded-lg h-[600px]">
            <h1 className="font-bold text-navy-blue text-2xl pb-10">Ask a Question</h1>
            <SendMailForm />
          </div>
        </div>
      </div>
      <BrandLogo />
    </div>
  );
}

export default faq;
