import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  subject: string;
  message: string;
};

function faq() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-start justify-start mt-[123px]">
      <div className="flex flex-row ml-[377px] ">
        <div className="w-[499px] mr-[106px]">
          <h1 className="text-navy-blue text-4xl font-bold mb-[64px]">General Information</h1>
          <div>
            <h1 className="text-[17px] font-bold text-navy-blue mb-[15px] h-[30px]">Eu dictumst cum at sed euismood condimentum?</h1>
            <h1 className="text-gray mb-[66px] w-[499px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h1>
          </div>
          <div>
            <h1 className="text-[17px] font-bold text-navy-blue mb-[15px] h-[30px]">Magna bibendum est fermentum eros.</h1>
            <h1 className="text-gray mb-[66px] w-[499px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h1>
          </div>
          <div>
            <h1 className="text-[17px] font-bold text-navy-blue mb-[15px] h-[30px]">Odio muskana hak eris conseekin sceleton?</h1>
            <h1 className="text-gray mb-[66px] w-[499px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h1>
          </div>
          <div>
            <h1 className="text-[17px] font-bold text-navy-blue mb-[15px] h-[30px]">Elit id blandit sabara boi velit gua mara?</h1>
            <h1 className="text-gray mb-[66px] w-[499px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
            </h1>
          </div>
        </div>
        <div>
          <div className="bg-off-white h-[738px] w-[566px]">
            <h1 className="font-bold text-navy-blue text-2xl pb-[114px] pt-[66px] pl-[42px]">Ask a Question</h1>
            <div className="ml-[46px]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" w-[534px] ">
                  <div className="">
                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your Name*"
                              {...field}
                              className=" placeholder-gray border-1 w-[445px] h-[50px] mb-[35px] border-gray rounded-[5px] py-5 focus-visible:ring-0 focus-visible:outline- bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    rules={{ required: "Subject is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Subject*"
                            {...field}
                            className=" placeholder-gray border-1 border-gray w-[445px] h-[50px] rounded-[3px] py-5 focus-visible:ring-0 focus-visible:outline-none mb-[47px] bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    rules={{ required: "Message cannot be empty" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <textarea
                            {...field}
                            placeholder="Type Your Message*"
                            className="w-[445px] h-[197px] mb-[33px] text-sm placeholder-gray border-1 border-gray rounded-[3px] py-2 resize-none focus-visible:ring-0 focus-visible:outline-none bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="rounded-[3px] w-[156px] h-[48px] mb-[62x] text-white bg-pink hover:bg-navy-blue transition">
                    Send Mail
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <BrandLogo />
    </div>
  );
}

export default faq;
