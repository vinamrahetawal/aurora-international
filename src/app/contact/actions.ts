'use server';

import * as z from 'zod';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email.' }),
    organization: z.string().optional(),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  });
  
type FormData = z.infer<typeof formSchema>;

export async function submitContactForm(data: FormData) {
  // In a real application, you would process this data (e.g., send an email, save to DB).
  console.log('Form submission received:', data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For this example, we'll always return success.
  return { success: true, message: 'Your message has been sent successfully!' };
}
