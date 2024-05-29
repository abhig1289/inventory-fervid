"use client";
import React from "react";
import GenericCard from "../commons/GenericCard";
import { useForm, Control } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import GenericSelect from "../commons/GenericSelect";

const formSchema = z.object({
  date: z.string().min(1, { message: "Date is required." }),
  biller: z.string().min(1, { message: "Biller is required." }),
  orderTax: z.string().min(1, { message: "Order Tax is required." }),
  referenceNumber: z
    .string()
    .min(1, { message: "Reference Number is required." }),
  customer: z.string().min(1, { message: "Customer is required." }),
  orderDiscount: z.string(),
  shipping: z.string(),
  attachDocument: z.string(),
  returnNote: z.string().min(1, { message: "Return Note is required." }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

interface FormFieldComponentProps {
  name: keyof z.infer<typeof formSchema>;
  label: string;
  placeholder: string;
  control: Control<z.infer<typeof formSchema>>;
  fullWidth?: boolean;
}

const FormFieldComponent: React.FC<FormFieldComponentProps> = ({
  name,
  label,
  placeholder,
  control,
  fullWidth = false,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div
        className={`flex flex-col space-y-3 ${
          fullWidth ? "w-full" : "w-[36vw]"
        }`}
      >
        <FormLabel>{label}</FormLabel>
        <Input placeholder={placeholder} className="w-full" {...field} />
        <FormMessage />
      </div>
    )}
  />
);

const AddReturns = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      biller: "",
      orderTax: "",
      referenceNumber: "",
      customer: "",
      orderDiscount: "",
      shipping: "",
      attachDocument: "",
      returnNote: "",
    },
  });

  return (
    <GenericCard title="Add Return">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-5 flex-wrap">
            <FormFieldComponent
              name="date"
              label="Date"
              placeholder="Enter date"
              control={form.control}
            />
            <FormFieldComponent
              name="referenceNumber"
              label="Reference Number"
              placeholder="Enter reference number"
              control={form.control}
            />
            <div className="flex flex-col space-y-3 w-[36vw]">
              <FormLabel>Biller</FormLabel>
              <GenericSelect trigger="Biller" items={["GST", "VAT"]} />
            </div>
            <FormFieldComponent
              name="customer"
              label="Customer"
              placeholder="Enter customer"
              control={form.control}
            />

            <div className="flex flex-col space-y-3 w-[36vw]">
              <FormLabel>Order Tax</FormLabel>
              <GenericSelect trigger="Order Tax" items={["Tax 1", "Tax 2"]} />
            </div>
            
            
            <FormFieldComponent
              name="orderDiscount"
              label="Order Discount"
              placeholder="Enter order discount"
              control={form.control}
            />
            <FormFieldComponent
              name="shipping"
              label="Shipping"
              placeholder="Enter shipping"
              control={form.control}
              fullWidth
            />
            <FormFieldComponent
              name="attachDocument"
              label="Attach Document"
              placeholder="Attach document"
              control={form.control}
              fullWidth
            />
            <FormFieldComponent
              name="returnNote"
              label="Return Note"
              placeholder="Enter return note"
              control={form.control}
              fullWidth
            />
          </div>
          <div className="flex space-x-4">
            <Button type="submit">Add Returns</Button>
            <Button type="button" className="ml-5">
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </GenericCard>
  );
};

export default AddReturns;
