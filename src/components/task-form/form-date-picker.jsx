import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { DatePicker } from "../ui/date-picker";

const FormDatePicker = ({ name, placeholder, control, label, type, error }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='block mt-2'>{label}</FormLabel>
          <FormControl>
            <DatePicker placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription className="text-red-500">{error}</FormDescription>
        </FormItem>
      )}
    />
  );
};

export default FormDatePicker;
