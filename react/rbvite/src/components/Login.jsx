
export default function Login() {
  return (
    <div className="border border-red-300 p-5">
      <h2 className="text-base font-semibold leading-7 text-green-500">Sign In</h2>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input type="text" id="name" autoComplete="given-name" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="passwd" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="mt-2">
            <input type="password" id="passwd" autoComplete="given-name" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <button className="w-full">Sign In</button>
      </div>
    </div>)
  }