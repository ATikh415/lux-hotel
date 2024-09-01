"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { fr } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Count from "./count";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  simple: z.boolean().default(false).optional(),
  double: z.boolean().default(false).optional(),
  suite: z.boolean().default(false).optional(),
  room: z.number(),
  adult: z.number(),
  child: z.number(),
});

const Book = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      simple: false,
      double: false,
      suite: false,
      room: 1,
      adult: 1,
      child: 1,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}
  return (
    <div className="p-6">
      <div className=" flex items-center justify-between">
        <span className=" text-2xl text-white">Disponibilité</span>
        <button className=" text-white text-xl border border-white px-4 py-2 rounded-xl">
          Option avancée
        </button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className=" text-xl text-neutral-100">
                  Arriver
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full p-6 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className=" h-6 w-6 text-primary" />
                        <span className=" ml-auto text-2xl text-primary">
                          {field.value
                            ? format(field.value, "PPP", {
                                locale: fr,
                              })
                            : format(new Date(), "PPP", {
                                locale: fr,
                              })}
                        </span>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className=" text-xl text-neutral-100">
                  Départ
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full p-6 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className=" h-6 w-6 text-primary" />
                        <span className=" ml-auto text-2xl text-primary">
                          {field.value
                            ? format(field.value, "PPP", {
                                locale: fr,
                              })
                            : format(new Date(), "PPP", {
                                locale: fr,
                              })}
                        </span>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex items-center flex-wrap gap-x-4">
            <FormField
              control={form.control}
              name="simple"
              render={({ field }) => (
                <FormItem className="flex flex-row  items-center space-x-3 space-y-0 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className=" text-xl text-neutral-100">
                      Chambre standard
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="double"
              render={({ field }) => (
                <FormItem className="flex flex-row  items-center space-x-3 space-y-0  ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className=" text-xl text-neutral-100">
                      Chambre double
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="suite"
              render={({ field }) => (
                <FormItem className="flex flex-row  items-center space-x-3 space-y-0 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className=" text-xl text-neutral-100">
                      Suite
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className=" flex flex-wrap justify-between  ">
            <FormField
              control={form.control}
              name="room"
              render={({ field }) => <Count title="Nombre de chambre" />}
            />
            <FormField
              control={form.control}
              name="adult"
              render={({ field }) => <Count title="Adulte" />}
            />
            <FormField
              control={form.control}
              name="child"
              render={({ field }) => <Count title="Enfant" />}
            />
          </div>
          <div className=" flex items-center justify-center">
            <button
              className=" bg-white px-10 py-4 rounded-md text-primary text-xl font-semibold"
              type="submit"
            >
              Je reserve
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Book;
