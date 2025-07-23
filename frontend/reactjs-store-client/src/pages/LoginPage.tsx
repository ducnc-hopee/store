import BrandLogo from "@/components/BrandLogo";
import { FormControl, FormField, FormItem, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

function LoginPage() {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    JSON.stringify(data, null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-[544px] shadow-xl h-[474px] mt-[120px] border border-gray-200">
        <h1 className="text-[32px] font-bold mt-[50px] h-[32px] mb-[7px]">Login</h1>
        <p className="text-gray text-[17px] mb-[37px] h-[20px]">Please login using account details below.</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-[432px]">
            <FormField
              control={form.control}
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row border-2 rounded border-[#C2C5E1] items-center mb-[23px] h-[52px]">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        {...field}
                        className="h-[19px] border-none shadow-none text-[16px] placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row border-2 rounded border-[#C2C5E1] items-center mb-[13px] h-[52px]">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="h-[19px] border-none shadow-none text-[16px] placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="ghost" className="h-[20px] flex flex-row justify-start p-0 hover:text-navy-blue text-gray text-[17px] mb-[23px]">
              Forgot your password?
            </Button>
            <Button type="submit" className="w-full h-[47px] font-bold mb-[28px] ">
              Sign in
            </Button>
            <Button variant="ghost" className="h-[20px] w-full flex flex-row items-center justify-center p-0 hover:text-navy-blue text-gray text-[17px] mb-[50px]">
              Don’t have an Account? Create account
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <BrandLogo />
      </div>
    </div>
  );
}

export default LoginPage;
