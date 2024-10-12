'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Schema validasi untuk form
const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  experienceLevel: z.string().min(2, {
    message: 'Experience Level must be at least 2 characters.',
  }),
});

export function JobHunterProfile() {
  const [isEditing, setIsEditing] = useState(false); // State untuk mode edit

  // Data user
  const userData = {
    name: 'Singgih Septian Nugraha',
    motivationalQuote: "Don't Give Up!",
    title: 'Software Engineer',
    experienceLevel: 'Junior',
    profilePicture: 'https://via.placeholder.com/150', // Gambar avatar placeholder, bisa diubah dengan gambar user
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: userData.title,
      experienceLevel: userData.experienceLevel,
    },
  });

  // Handler untuk submit form
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data); // Simpan data baru
    setIsEditing(false); // Keluar dari mode edit
  }

  // Handler untuk cancel edit
  function handleCancel() {
    form.reset({
      title: userData.title,
      experienceLevel: userData.experienceLevel,
    });
    setIsEditing(false);
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Welcome text */}
      <h1 className="text-2xl font-bold">Welcome, {userData.name}!</h1>

      {/* Profile picture */}
      <img src={userData.profilePicture} alt="Profile" className="h-24 w-24 rounded-full border-2 border-gray-300" />

      {/* Motivational quote */}
      <div className="rounded-lg bg-orange-100 p-4 text-center shadow-lg">
        <p className="text-lg font-semibold">-- Motivational Quote --</p>
        <p className="italic">"{userData.motivationalQuote}"</p>
      </div>

      {!isEditing ? (
        // Tampilan non-edit
        <div className="space-y-2 text-center">
          <p>
            <strong>Title: </strong> {userData.title}
          </p>
          <p>
            <strong>Experience Level: </strong> {userData.experienceLevel}
          </p>
          {/* Tombol Edit Profile */}
          <Button onClick={() => setIsEditing(true)} className="mt-4 bg-secondary-700 text-white">
            Edit Profile
          </Button>
        </div>
      ) : (
        // Tampilan edit form
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-center">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experienceLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Level</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your experience level" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Tombol Save dan Cancel */}
            <div className="flex justify-center space-x-4">
              <Button type="submit" className="bg-secondary-500 text-white">
                Save
              </Button>
              <Button type="button" onClick={handleCancel} className="bg-gray-500 text-white">
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
