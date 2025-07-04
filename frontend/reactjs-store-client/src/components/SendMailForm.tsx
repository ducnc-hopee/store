import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function SendMailForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className=" placeholder-gray border-2 border-gray rounded px-3 py-5 focus-visible:ring-0 focus-visible:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your Email*"
                    {...field}
                    className=" placeholder-gray border-2 border-gray rounded px-3 py-5 focus-visible:ring-0 focus-visible:outline-none"
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
                  className=" placeholder-gray border-2 border-gray rounded px-3 py-5 focus-visible:ring-0 focus-visible:outline-none"
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
                  className="w-full h-[160px] text-sm placeholder-gray border-2 border-gray rounded px-3 py-2 resize-none focus-visible:ring-0 focus-visible:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-[157px] h-11 text-white bg-pink hover:bg-navy-blue transition">
          Send Mail
        </Button>
      </form>
    </Form>
  );
}

export default SendMailForm;
