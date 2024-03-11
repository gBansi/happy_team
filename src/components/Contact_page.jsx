import React from 'react'

const Contact_page = () => {
    return (
        <div className="container mx-auto my-10 p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form Section */}
            <div>
                <div className="mb-6">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Name</label>
                    <input type="text" className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name" />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Phone Number</label>
                    <input type="text" className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Phone" />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Email</label>
                    <input type="email" className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="email" />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Adress</label>
                    <input type="text" className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Adress" />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Message</label>
                    <textarea className="bg-blue-100 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="message" rows="4"></textarea>
                </div>
            </div>
            {/* Map and Address Section */}
            <div>
                <div className="mb-6">
                    <p className="text-xl font-medium text-gray-900 dark:text-gray-400">Working hours</p>
                    <p className="text-xl text-gray-600">Mon-Fri: 10:00 - 07:00</p>
                </div>
                <div className='h-full w-full'>
                    <iframe className="h-[80%] w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0142818271784!2d72.55866571188982!3d23.059937979060564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b65f2c3f296c2c7%3A0x9642c5ef8c48cb2b!2sBlue%20Soltech%20LLP.!5e0!3m2!1sen!2sin!4v1710138363917!5m2!1sen!2sin" ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact_page