import React from 'react'

const Janmadarta = () => {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
    }
    return (
        <div className=" mx-auto p-7 bg-white rounded-md shadow-md md:px-80  items-center">
            <h1 className="text-2xl font-bold mb-4 underline text-red-500">जन्मदर्ता फारम </h1>
            <form >
                <div className="mb-4 flex items-center w-full">
                    <div className="flex-grow">
                        <label htmlFor="applicantName" className="block text-sm font-medium text-gray-600 text-left">
                            आवेदकको नाम:  <span className="text-red-500">*</span>                </label>
                        <input
                            type="text"
                            id="applicantName"
                            name="applicantName"
                            className="mt-1 p-2 border border-gray-700 rounded-md w-3/4"
                            required="true"
                        />
                    </div>
                </div>
                <div className="mb-4 flex items-center w-full">
                    <div className="flex-grow">
                        <label htmlFor="applicantAge" className="block text-sm font-medium text-gray-600 text-left">
                            आवेदकको उमेर:<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="applicantAge"
                            name="applicantAge"
                            className="mt-1 p-2 border border-gray-700 rounded-md w-3/4"
                            min='0'
                            required="true"
                        />
                    </div>
                </div>
                <div className="mb-4 flex flex-row items-center w-full">
                    <div className="flex-grow">
                        <label htmlFor="municipality" className="block text-sm font-medium text-gray-600 text-left">
                            गाउँ /नगरपालिका :<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="municipality"
                            name="municipality"
                            className="mt-1 p-2 border border-gray-700 rounded-md w-3/4"
                            required='true'
                        />
                    </div>
                </div>
                <div className="mb-4 flex items-center w-full">
                    <div className="flex-grow">
                        <label htmlFor="apllicantFather" className="block text-sm font-medium text-gray-600 text-left">
                            आवेदकको बुवाको नाम:<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="apllicantFather"
                            name="apllicantFather"
                            className="mt-1 p-2 border border-gray-700 rounded-md w-3/4 "
                            required="true"
                        />
                    </div>
                </div>
                <div className="mb-4 flex items-center w-full">
                    <div className="flex-grow">
                        <label htmlFor="apllicantGrandFather" className="block text-sm font-medium text-gray-600 text-left">
                            आवेदकको हजुरबुवाको नाम:<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="apllicantGrandFather"
                            name="apllicantGrandFather"
                            className="mt-1 p-2 border border-gray-700 rounded-md w-3/4 "
                            required="true"
                        />
                    </div>
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-600 mr-2">
                        आवेदकको बुवाको परिचयपत्रको फोटो:<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="file"
                        id="idPhoto"
                        name="idPhoto"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 p-2 border border-gray-800 rounded-md"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="slip" className="block text-sm font-medium text-gray-600 mr-2">
                        तोकेको शुल्क बुझाएको रशिदको फोटो:<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="file"
                        id="slip"
                        name="slip"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 p-2 border border-gray-800 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    पेश गर्नुहोस्
                </button>
            </form>
        </div>
    )
}

export default Janmadarta