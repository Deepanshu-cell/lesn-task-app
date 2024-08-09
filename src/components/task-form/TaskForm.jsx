"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import FormDatePicker from "./form-date-picker";
import FormSelect from "./form-select";
import FormInput from "./form-input";

// form zod schema
const formSchema = z.object({
  title: z.string().min(4, {
    message: "title must be at least 4 characters.",
  }),
  description: z.string().min(10, {
    message: "title must be at least 10 characters.",
  }),
  due_date: z.string().min(4, {
    message: "title must be at least 4 characters.",
  }),
  priority: z.string().min(1, {
    message: "Priority is required",
  }),
  location_reminder: z.string().min(1, {
    message: "Location reminder is required.",
  }),
});

// static select options for selecting task priority
const selectOptions = [
  {
    value: "Low",
    label: "Low",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "High",
    label: "High",
  },
];

export function TaskForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      due_date: "",
      priority: "",
      location_reminder: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    console.log(values);
  }

  const errors = form?.formState?.errors;

  return (
    <div className="h-[calc(100vh-10rem)] rounded-md p-5 mb-20 mt-3 bg-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-3">
            {/* title  */}
            <FormInput
              name={"title"}
              placeholder={"Enter title"}
              control={form.control}
              label={"Title"}
              type={"text"}
              error={errors?.title?.message}
            />

            {/* description */}
            <FormInput
              name={"description"}
              placeholder={"Enter description"}
              control={form.control}
              label={"Description"}
              type={"text"}
              error={errors?.description?.message}
            />

            {/* Location Reminder */}
            <FormInput
              name={"location_reminder"}
              placeholder={"Enter Location"}
              control={form.control}
              label={"Location Reminder"}
              type={"text"}
              error={errors?.location_reminder?.message}
            />

            {/* Priority */}
            <FormSelect
              name={"priority"}
              placeholder={"Enter Priority"}
              control={form.control}
              label={"Priority"}
              error={errors?.priority?.message}
              options={selectOptions}
            />

            {/* Due Date */}
            <FormDatePicker
              name={"due_date"}
              placeholder={"Enter Due Date"}
              control={form.control}
              label={"Due Date"}
              error={errors?.due_date?.message}
            />
          </div>
          <Button type="submit" disabled={form.isSubmitting}>
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
}
