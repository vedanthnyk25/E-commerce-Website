import React from 'react'

function NewsLetter() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    }

  return (
    <div className='text-center bg-gray-800 text-white py-12'>
      <p className='text-3xl font-medium'>Subscribe now to get 20% off!</p>
      <p className='text-gray-300 mt-3'>
        Sign up to receive exclusive updates, trends, and offers directly in your inbox.
      </p>

      <form 
        className='w-full sm:w-1/2 flex flex-col items-center gap-4 mx-auto my-6 p-6 bg-gray-700 rounded-lg shadow-lg' 
        onSubmit={onSubmitHandler}
      >
        <input 
          type="email" 
          placeholder="Enter your email" 
          className='w-full sm:w-3/4 p-3 rounded-md outline-none border-2 border-gray-400 text-gray-800 focus:border-blue-500' 
        />
        <button 
          type="submit" 
          className='bg-black text-white py-3 px-8 rounded-md mt-4 transition-transform duration-300 transform hover:scale-105 active:scale-95'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter;
