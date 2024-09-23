// FormComponent.jsx

'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '@/app/firebaseConfig';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(10, "Phone number is required").max(15, "Phone number is too long"),
    email: z.string().email("Invalid email").nonempty("Email is required"),
    description: z.string().min(10, "Description is required"),
    status: z.enum(['open', 'closed', 'pending'], { errorMap: () => ({ message: "Status is required" }) })
});

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const addDataToFireStore = async (data: any) => {
        try {
            console.log(data);
            const docRef = await addDoc(collection(firestore, "todo"), data);
            console.log("Document written with ID: ", docRef.id);
            return true;
        } catch (err) {
            console.error("Error adding document: ", err);
        }
    };

    const onSubmit = async (data: any) => {
        console.log(data,"ni");
        const success = await addDataToFireStore(data);
        if (success) {
            alert("Data added successfully!");
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register("name")}
            />
            <Input
                type="tel"
                {...register("phone")}
            />
            <Input
                type="email"
                {...register("email")}
            />
            <Textarea
                {...register("description")}
            />
            <Switch onChange={(e: any) => setValue('status', e.target.checked)} value={watch('status')} />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default FormComponent;
