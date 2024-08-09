import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";

const FormInput = ({ name, placeholder, control, label, type, error }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type}/>
          </FormControl>
          <FormDescription className='text-red-500'>{error}</FormDescription>
        </FormItem>
      )}
    />
  );
};

export default FormInput;
