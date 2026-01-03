"use client"

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { useState } from "react";


export default function TodoList() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open,setOpen] = useState(false);

  return (
    <div>
        <h1 className="text-lg font-medium mb-6">Todo List</h1>
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-fit">
    <Calendar
      mode="single"
      selected={date}
      onSelect={(date) =>{
        setDate(date);
        setOpen(false);
      }}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
        </PopoverContent>
        </Popover>
        <ScrollArea className="max-h-[400px]  mt-4 overflow-y-auto p-2">
            <div className="flex flex-col gap-4">
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox checked/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox checked/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox checked/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox checked/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                    <Checkbox/>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Card>
            </div>
        </ScrollArea>
    </div>
  )
}
