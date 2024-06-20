"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function AddSales() {
  const form = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="p-5">
      <Card className='h-[130vh] w-[80vw]'>
        <div className='box-border border-b-2 h-[10vh] pt-5 pl-5'>
          Add Sale
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="pl-5 pt-5 flex">
              <div className="w-[37vw]">
                <FormField
                  control={form.control}
                  name="Date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40vw] pl-10">
                <FormField
                  control={form.control}
                  name="Referenceno"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reference No </FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="pl-5 flex">
              <div className="w-[37vw]">
                <FormField
                  control={form.control}
                  name="Biller"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Biller</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40vw] pl-10">
                <FormField
                  control={form.control}
                  name="Customer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="pl-5 flex">
              <div className="w-[37vw]">
                <FormField
                  control={form.control}
                  name="Ordertax"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Tax</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40vw] pl-10">
                <FormField
                  control={form.control}
                  name="Orderdiscount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Discount</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-[78vw] pl-5">
              <FormField
                control={form.control}
                name="Shipping"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shipping</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[78vw] pl-5">
              <FormField
                control={form.control}
                name="AttachDocument"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Attach Document</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pl-5 flex">
              <div className="w-[37vw]">
                <FormField
                  control={form.control}
                  name="Salestatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sale Status</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40vw] pl-10">
                <FormField
                  control={form.control}
                  name="Paymentstatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Status</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}