"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import {
    Card,
    CardContent,

    CardHeader,

} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { contactSchema } from "@/lib/formSchema";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";





const ContactForm = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const[isSubmitting, setIsSubmitting] = useState(false);
   
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        
    } = useForm({
        resolver: zodResolver(contactSchema),
    });
    // const { isSubmitting } = useFormState()
    const onSubmit = async (values: any) => {
        setIsSubmitting(true);
    console.log('Form values:', values);
        setTimeout(() => {
            setIsSubmitting(false);
            
        },1000);
        toast({
            title: "Your Form is Submitted",
            
        })
        setIsOpen(false);
    };



    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTitle className="text-4xl text-fuchsia-400">Get In Touch</DialogTitle>
            <DialogContent>
                <div className="flex items-center justify-center bg-background">
                    <Card className="w-full max-w-lg mt-10 mx-2">
                        <CardHeader>
                            

                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        {...register("name")}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-500">
                                            {errors.name?.message as string}
                                        </p>
                                    )}
                                </div>



                                <div className="space-y-2">
                                    <Label htmlFor="email">Enter your email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"

                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500">
                                            {errors.email?.message as string}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input
                                        id="city"
                                        placeholder="e.g., Patna, Delhi, Mumbai"
                                        {...register("city")}
                                    />

                                    {errors.city && (
                                        <p className="text-sm text-red-500">{errors.city?.message as string}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="profession">Profession</Label>
                                    <Select onValueChange={(value) => setValue("profession", value)}>
                                        <SelectTrigger id="porfession">
                                            <SelectValue placeholder="Select your Profession" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {['Full Stack Developer', 'Front End Developer', 'Back End Developer', 'Project Manager'].map((role) => (
                                                    <SelectItem key={role} value={role}>
                                                        {role}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center justify-center gap-10">
                                <Button onClick={() => setIsOpen(false)} className="hover:bg-red-500 hover:text-white">
                                    Cancel
                                </Button>
                                <Button type="submit" className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-teal-600 hover:to-indigo-600 transition-all duration-500"  disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        "Complete Profile"
                                    )}
                                </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ContactForm;