import SendMailForm from "@/components/SendMailForm";
import contact from "/images/contactUs.png";

function ContactUs() {
  return (
    <div className="ml-[375px] mt-[120px]">
      <div className="grid grid-cols-2 w-[1191px] gap-x-[117px]">
        <div>
          <h1 className="text-[36px] font-bold text-navy-blue h-[44px] mb-[13px]">Information About us</h1>
          <p className="text-gray font-semibold h-[49px] mb-[70px] w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <div>
            <div className="flex flex-wrap gap-4 text-grey-600 text-sm mb-[179px]">
              <div className="w-[25px] h-[25px] rounded-full bg-purple"></div>
              <div className="w-[25px] h-[25px] rounded-full bg-pink"></div>
              <div className="w-[25px] h-[25px] rounded-full bg-cyan-400"></div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-navy-blue text-[36px] font-bold h-[44px] mb-[26px]">Contact Way</h1>
          <div className="grid grid-cols-2 gap-x-[37px] gap-y-[49px]">
            <div className="flex flex-row gap-2 items-center justify-start">
              <div className="w-[45px] h-[45px] rounded-full bg-purple"></div>
              <div className="text-semibold text-gray text-[16px]">
                <p>Tel: 877-67-88-99</p>
                <p>E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start">
              <div className="w-[45px] h-[45px] rounded-full bg-pink"></div>
              <div className="text-semibold text-gray text-[16px]">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start">
              <div className="w-[45px] h-[45px] rounded-full bg-orange-400"></div>
              <div className="text-semibold text-gray text-[16px]">
                <p>20 Margaret st, London</p>
                <p>Great britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start">
              <div className="w-[45px] h-[45px] rounded-full bg-green-400"></div>
              <div className="text-semibold text-gray text-[16px]">
                <p>Free standard shipping</p>
                <p> on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <h1 className="text-navy-blue font-bold text-4xl h-[44px] mb-[20px]">Get In Touch</h1>
          <p className="text-gray font-semibold text-[16px] mb-[46px] w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis
            quis bibendum quam.
          </p>
          <SendMailForm />
        </div>
        <div><img src={contact} className="absolute top-[876px] left-[989px] w-[683px] h-[683px]"/></div>
      </div>
    </div>
  );
}
export default ContactUs;
