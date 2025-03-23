'use client'
import React from 'react';

const ContactForm = () => {
    async function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const res = await fetch('/api/v1', {
            method: 'POST',
            body: form,
        });
        if (res.ok) {
            alert('Message sent!');
        } else {
            alert('An error occurred. Please try again.');
        }
    }
    return (
        <section className='mb-10'>
                <h2 className='text-secTextColor text-4xl font-medium mb-4'>Contact Us</h2>
                <form  onSubmit={handlesubmit} method='POST' className='flex flex-col gap-4'>
                    <label className='text-secTextColor text-xl'>
                        Name:
                        <input
                         name='name'
                            type='text'
                            placeholder='Your Name'
                            className='border rounded-md p-2 mt-1 w-full'
                        />
                    </label>
                    <label className='text-secTextColor text-xl'>
                        Email:
                        <input
                        name='email'
                            type='email'
                            placeholder='Your Email'
                            className='border rounded-md p-2 mt-1 w-full'
                        />
                    </label>
                    <label className='text-secTextColor text-xl'>
                        Message:
                        <textarea
                         name='textarea'
                            placeholder='Your Message'
                            className='border rounded-md p-2 mt-1 w-full h-32'
                        ></textarea>
                    </label>
                    <button
                        type='submit'
                        className='bg-mainTextColor text-white py-2 px-4 rounded-md text-xl hover:bg-opacity-80'
                    >
                        Send Message
                    </button>
                </form>
            </section>
    );
}

export default ContactForm;
