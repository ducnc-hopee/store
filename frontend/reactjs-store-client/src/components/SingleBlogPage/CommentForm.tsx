import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { Check, Mail, User } from "lucide-react";

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 w-full gap-10">
          <FormField
            control={form.control}
            name="name"
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row border-2 rounded border-gray items-center gap-2 px-2">
                  <User className="w-[15px] h-[15px]" color="gray" />
                  <FormControl>
                    <Input
                      placeholder="Your Name*"
                      {...field}
                      className="border-none shadow-none text-[15px] placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
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
                <div className="flex flex-row border-2 rounded border-gray items-center gap-2 px-2">
                  <Mail className="w-[15px] h-[15px]" color="gray" />
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Write Your Email*"
                      {...field}
                      className="border-none shadow-none text-[15px] placeholder-gray focus-visible:outline-none focus-visible:none focus-visible:ring-0"
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
                <textarea
                  {...field}
                  placeholder="💬 Write your comment*"
                  className="w-full h-[200px] text-sm placeholder-gray border-2 border-gray rounded px-3 py-2 resize-none focus-visible:ring-0 focus-visible:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-2 items-center ">
          <button
            type="button"
            onClick={() => setChecked(!checked)}
            className={`w-[14px] h-[14px] border-2 ${checked ? "bg-pink text-white border-pink" : "bg-white border-gray"}`}
          >
            {checked && <Check className="w-[10px] h-[10px] text-white" />}
          </button>
          <p className="text-gray text-[13px]">Save my name, email, and website in this browser for the next time I comment.</p>
        </div>
        <Button type="submit" className="w-full">
          Post Comment
        </Button>
      </form>
    </Form>
  );
}

export default CommentForm;
