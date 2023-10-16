import {useForm} from "react-hook-form";
import React, {useState} from "react";

export default function ContactUsForm() {
    const options = ['Email', 'Telegram', 'Call'];
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    const [contactOption, setContactOption] = useState("Email");

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="max-w-2xl bg-vnv-milk px-6 mx-auto text-vnv-black py-4 rounded-3xl">
            <div className="mb-4">
                <ul className="flex justify-evenly items-center text-vnv-black">
                    {options.map((option) => (
                        <li
                            key={option}
                            className={`${
                                contactOption === option ? 'text-vnv-milk bg-vnv-black' : 'text-vnv-black border border-vnv-black hover:scale-110'
                            } rounded-3xl py-1 md:py-2 px-2 md:px-4 ml-2 first:ml-0 md:ml-8 text-xs md:text-base ease-in-out duration-300 text-center cursor-pointer`}
                            onClick={() => setContactOption(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-4">
                {contactOption === "Email" && (
                    <>
                        <input
                            placeholder='Email'
                            type='email'
                            {...register("email", {required: true})}
                            className="md:placeholder:text-base placeholder:text-xs w-full p-2 border rounded"
                        />
                        {errors.email && (
                            <span className="text-red-500">Email is a required field.</span>
                        )}
                    </>
                )}

                {contactOption === "Telegram" && (
                    <>
                        <input
                            placeholder='@username'
                            type='text'
                            {...register("telegram", {required: true})}
                            className="md:placeholder:text-base placeholder:text-xs w-full p-2 border rounded"
                        />
                        {errors.telegram && (
                            <span className="text-red-500">Telegram Username is a required field.</span>
                        )}
                    </>
                )}

                {contactOption === "Call" && (
                    <>
                        <input
                            placeholder='Phone number'
                            type='tel'
                            {...register("phone", {
                                required: true,
                            })}
                            className="md:placeholder:text-base placeholder:text-xs w-full p-2 border rounded"
                        />
                        {errors.phone && (
                            <span className="text-red-500">Phone number is a required field.</span>
                        )}
                    </>
                )}

                <input
                    placeholder='Name'
                    type='text'
                    {...register("name", {required: true})}
                    className="md:placeholder:text-base placeholder:text-xs w-full p-2 border rounded"
                />
                {errors.name && (
                    <span className="text-red-500">Name is a required field</span>
                )}

                <input
                    placeholder='Message'
                    type='text'
                    {...register("message", {required: true})}
                    className="md:placeholder:text-base placeholder:text-xs w-full p-2 border rounded"
                />
                {errors.message && (
                    <span className="text-red-500">Message is a required field.</span>
                )}

                <div className='col-span-2 flex justify-center items-center'>
                    <input
                        className='text-xs md:text-base border border-vnv-black text-vnv-black hover:text-vnv-milk font-bold hover:bg-vnv-black px-6 py-3 mt-4 rounded-3xl hover:scale-110 ease-in-out duration-300 cursor-pointer'
                        type='submit'
                        value='SUBMIT AND SEND'
                    />
                </div>
            </div>
        </form>
    );
}
