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
      <div className="flex flex-col items-center shadow-xl w-[544px] h-[474px] pt-5 mt-30 border border-gray-200">
        <h1 className="text-[32px] font-bold">Login</h1>
        <p className="text-gray">Please login using account details below.</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full px-15 pt-5">
            <FormField
              control={form.control}
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row border-2 rounded border-gray items-center gap-2 px-2">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        {...field}
                        className="h-[52px] border-none shadow-none text-[15px] placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
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
                  <div className="flex flex-row border-2 rounded border-gray items-center px-2">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="h-[52px] border-none shadow-none text-[15px] placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="ghost" className="flex flex-row justify-start p-0 hover:text-navy-blue text-gray text-[17px]">
              Forgot your password?
            </Button>
            <Button type="submit" className="w-full h-[47px] font-bold">
              Sign in
            </Button>
            <Button variant="ghost" className="w-full flex flex-row items-center justify-center p-0 hover:text-navy-blue text-gray text-[17px]">
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
