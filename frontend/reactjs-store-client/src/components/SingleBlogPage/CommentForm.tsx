import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { Check, Mail, MessageCircle, User } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  comment: string;
};

function CommentForm() {
  const [checked, setChecked] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    JSON.stringify(data, null);
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[717px]">
        <div className="grid grid-cols-2 gap-x-[33.7px] mb-[45px]">
          <FormField
            control={form.control}
            name="name"
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row border-2 rounded-[1px] border-gray items-center gap-[5.6px] pl-[9px]">
                  <User className="w-[15px] h-[15px]" color="gray" />
                  <FormControl>
                    <Input
                      placeholder="Your Name*"
                      {...field}
                      className="border-none shadow-none text-[15px] p-0 placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
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
                <div className="flex flex-row border-2 rounded-[1px] border-gray items-center gap-2 px-2">
                  <Mail className="w-[15px] h-[15px]" color="gray" />
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Write Your Email*"
                      {...field}
                      className="border-none shadow-none text-[15px] p-0 placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="comment"
          rules={{ required: "Comments cannot be empty" }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <MessageCircle className="absolute top-[24.7px] left-[20px] w-[13.5px] h-[13.5px] text-gray fill-gray pointer-events-none" />
                  <textarea
                    {...field}
                    placeholder="Write your comment*"
                    className="w-full h-[206px] text-sm placeholder-gray border-2 border-gray rounded-[1px] pl-[40px] pt-[21.3px] resize-none focus-visible:ring-0 focus-visible:outline-none"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row  mt-[22px] items-center ">
          <button
            type="button"
            onClick={() => setChecked(!checked)}
            className={`rounded-[1px] w-[13px] h-[13px] border-1 mr-[5.6px] ${checked ? "bg-pink text-white border-pink" : "bg-white border-gray"}`}
          >
            {checked && <Check className="w-[9px] h-[9px] text-white" />}
          </button>
          <p className="text-gray text-[13px]">Save my name, email, and website in this browser for the next time I comment.</p>
        </div>
        <Button type="submit" className="w-full mt-[46px] h-[50px]">
          <h1 className="font-semibold text-[18px]">Post Comment</h1>
        </Button>
      </form>
    </Form>
  );
}

export default CommentForm;
