import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/Button";
import { FormControl, FormField, FormItem, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { add } from "@/services/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string;
  password: string;
  email: string;
};

function CreateAccount() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  const navigate = useNavigate();
  const onSubmit = async (data: FormValues) => {
    try {
      const response = await add(data.username, data.email, data.password);
      console.log("Account created:", response);
      alert("Account successfully created!");
      form.reset();
      navigate("/account");
    } catch (error) {
      console.error("Account creation failed:", error);
      alert("Failed to create account. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center shadow-xl w-[544px] h-[474px] pt-5 mt-30 border border-gray-200">
        <h1 className="text-[32px] font-bold">Create you account</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full px-15 pt-5">
            <FormField
              control={form.control}
              name="username"
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row border-2 rounded border-gray items-center gap-2 px-2">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Username"
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
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row border-2 rounded border-gray items-center px-2">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Email"
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
            <Button type="submit" className="w-full h-[47px] font-bold">
              Create Account
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

export default CreateAccount;
