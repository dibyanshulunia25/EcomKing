import React from 'react'

const NewsLetterbox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className='bg-gray-100 py-10 px-5 md:px-10 lg:px-20'>
            <div className='text-center'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>Subscribe to our Newsletter</h2>
                <p className='text-gray-600 mb-6'>Stay updated with the latest news and exclusive offers.</p>
                <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className='p-3 border border-gray-300 rounded-md w-full sm:w-auto'
                        required
                    />
                    <button
                        type="submit"
                        className='bg-rose-900 text-white px-6 py-3 rounded-md hover:bg-rose-800 transition duration-300'
                    >
                        Subscribe
                    </button>
                </form>
                <p className='text-gray-500 mt-4'>We respect your privacy. Unsubscribe at any time.</p>
            </div>
            <div className='mt-10 text-center'>
                <p className='text-sm text-gray-500'>© 2023 Your Company Name. All rights reserved.</p>
            </div>

        </div>
    )
}

export default NewsLetterbox