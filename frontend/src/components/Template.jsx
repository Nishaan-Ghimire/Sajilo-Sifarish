import React from 'react'

const Template = () => {

    return (
        <>
            <div className='py-10 '>
                <div className='flex font-arial w-full p-3 justify-between items-center px-60' >
                    <img width={70} height={90} src='/images/nepal.png'></img>
                    <div >
                        <p className='font-bold text-red-500 text-center' >बरियारपट्टी गाउँपालिका</p>
                        <h1 className='text-center'>वडा नं. 1 को कार्यालय बरियारपट्टी, सिरहा</h1>
                        <h1 className='text-center'>मधेश प्रदेश, नेपाल</h1>
                    </div>
                    <img width={70} height={90} src='/images/nepal.png'></img>
                </div>
                <hr className="my-4 border border-red-400" />

                <div className="bg-cover space-y-5 bg-center bg-opacity-80 h-screen  px-60" style={{ background: 'url("/images/logo_t.jpg")  no-repeat center ', height: '80%' }}>
                    <h1 className='text-right pr-20 mb-20'>मिति : २०७२/१२/१२ गते</h1>

                    <h1 className='text-center'>विषय : नामसारी सिफारिस |</h1>
                    <h1 className='text-left'>श्री जो जससँग सम्बन्धित छ।  </h1>
                    <h1 className='text-left'>बरियारपट्टी  गाउँ/नगरपालिका  वडा नं { }  को Kathmandu मा निवासी श्री Grandfather Name को नाति/नातिनी श्री FatherName को छोरा/छोरी श्री Applicant Name को तपसिलमा उल्लिखित विवरण अनुसारको कागजातमा नाम, थर जन्म मिति संशोधनको सिफारिस पाउँ भनी यस कार्यालयमा निवेदन दिनुभएकोमा निजले पेश गरेका व्यत्तिगत कागजातको अध्ययन / मिति 2079/11/11 मा गरिएको स्थानीय सर्जमिन मुचुल्का समेतको आधारमा सो व्यहोरा मनासिव भएको देखिएकोले नाम थर, जन्म मिति संशोधनका लागि स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२)ङ(१६) बमोजिम सिफारिस गरिन्छ ।</h1>
                    <div className=' space-y-7'>
                        <p className='underline text-center '>नाम थर ,जन्म मिति संसोधनको विवरण </p>
                        <table className="min-w-full bg-white border border-black">
                            <thead>
                                <tr>
                                    <th className="py-5 px-4 border-black border-r border-b">हुनु पर्ने नाम, थर, जन्म मिति</th>
                                    <th className="py-5 px-4 border-black border-r border-b">फरक भएको नाम, थर, जन्म मिति</th>
                                    <th className="py-5 px-4 border-black border-b">फरक भएको कागजात</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-5 px-4 border-black border-r"></td>
                                    <td className="py-5 px-4 border-black border-r"></td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className='pt-20'>
                        <h1 className='text-right '>हस्ताक्षर...............</h1>
                    </div>
                </div>
            </div >
            <hr className="my-4 border border-red-400" />

            <footer className='mb-2 px-60'>
                <p className='text-center text-sm text-red-500' >*सरकारी प्रयोजनको लागि मात्र </p>
            </footer>
        </>
    )
}

export default Template