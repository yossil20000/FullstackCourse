import React from 'react'
import {FormMode} from '../../enum/FormMode'
import Person from '../../interface/person'

type FormProps = {
    setName: React.Dispatch<React.SetStateAction<string>>
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setImageUrl: React.Dispatch<React.SetStateAction<string>>
    setTelephone: React.Dispatch<React.SetStateAction<string>>
    setRole: React.Dispatch<React.SetStateAction<string>>
    handleClick: any
    personDetails:Person
    mode:FormMode
}




const Form = ({
    setName,
    setTitle,
    setEmail,
    setImageUrl,
    setTelephone,
    setRole,
    handleClick,
    personDetails,
    mode
}:FormProps) => {

  
  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      name
                  </label>
                  <input
                    type="text"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                    onChange={(e)=> setName(e.target.value)}
                    value={personDetails.name}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                     title
                  </label>
                  <input
                    type="text"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                    onChange={(e)=> setTitle(e.target.value)}
                    value={personDetails.title}
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="text"
                    autoComplete="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={personDetails.email}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                     imageUrl
                  </label>
                  <input
                    onChange={(e)=> setImageUrl(e.target.value)}
                    value={personDetails.imageUrl}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  telephone
                  </label>
                  <input
                    onChange={(e)=> setTelephone(e.target.value)}
                    value={personDetails.telephone}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                      role
                  </label>
                  <input
                    onChange={(e)=> setRole(e.target.value)}
                    value={personDetails.role}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                  />
                </div>
              </div>
            </form>
            <button
                onClick={handleClick}
                type="button"
                className="mt-20 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                {FormMode.EDIT === mode ? 'edit person' : 'create person'}
            </button>
          </div>
        </div>
    </div>
  )
}

export default Form