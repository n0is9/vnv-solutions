import React from 'react';
import {useForm} from 'react-hook-form';

const BriefForm = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (<form onSubmit={handleSubmit(onSubmit)}
                  className="max-w-3xl mx-auto p-8 m-8 bg-vnv-milk text-vnv-black rounded-3xl md:grid md:grid-cols-2 gap-4">
        <div>
            <div className="mb-4">
                <label
                    className={errors.name ? 'text-red-500 block text-sm font-semibold' : 'block text-sm font-semibold'}>Name{errors.name &&
                    <span className="text-red-500 text-sm"> is Required Field.</span>}</label>
                <input className="w-full p-2 border border-gray-300" {...register('name', {required: true})} />

            </div>
            <div className="mb-4">
                <label
                    className={errors.email ? 'text-red-500 block text-sm font-semibold' : 'block text-sm font-semibold'}>Email{errors.email &&
                    <span className="text-red-500 text-sm"> is Required Field.</span>}</label>
                <input className="w-full p-2 border border-gray-300"
                       type="email" {...register('email', {required: true})} />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold">Company</label>
                <input className="w-full p-2 border border-gray-300" {...register('company')} />
            </div>
        </div>
        <div>
            <div className="mb-4">
                <label
                    className={errors.servicesType ? 'text-red-500 block text-sm font-semibold' : 'block text-sm font-semibold'}>Services
                    Type{errors.servicesType &&
                        <span className="text-red-500 text-sm">is Required Field</span>}</label>
                <select
                    className="w-full p-2 border border-gray-300" {...register('servicesType', {required: true})}>
                    <option value="SOFTWARE_DEVELOPMENT">Software Development</option>
                    <option value="ERP_DEVELOPMENT">Development of a Unique ERP System</option>
                    <option value="ONLINE_STORE_DEVELOPMENT">Online-Store Development</option>
                    <option value="SUPPORT_AND_UPDATES">Support and Updates</option>
                    <option value="BOT_DEVELOPMENT">Bot Development</option>
                    <option value="WEBSITE_TRANSFERRING">Website Transferring</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold">References Links</label>
                <input className="w-full p-2 border border-gray-300" {...register('referencesLinks')} />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold">Deadline</label>
                <input className="w-full p-2 border border-gray-300" type="date" {...register('deadline')} />
            </div>
        </div>
        <div className="col-span-2">
            <div className="mb-4">
                <label
                    className={errors.message ? 'text-red-500 block text-sm font-semibold' : 'block text-sm font-semibold'}>Message{errors.message &&
                    <span className="text-red-500 text-sm"> is Required Field.</span>}</label>
                <input className="w-full p-2 border border-gray-300" {...register('message', {required: true})} />
            </div>
        </div>
        <div className='col-span-2 flex justify-center items-center'>
            <input
                className='border border-vnv-black hover:text-vnv-milk font-bold text-xs md:text-base hover:bg-vnv-black px-6 py-3 mt-4 rounded-3xl hover:scale-110 ease-in-out duration-300 cursor-pointer'
                type='submit'
                value='SUBMIT BRIEF'
            />
        </div>
    </form>);
};

export default BriefForm;
