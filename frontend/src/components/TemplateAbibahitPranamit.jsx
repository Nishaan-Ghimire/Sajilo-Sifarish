import React from 'react'

const TemplateAbibahitPranamit = () => {
    return (
        <div>
            <div>
                <div className='py-10 '>
                    <div className='flex font-arial w-full p-3 justify-between items-center md:px-60' >
                        <img width={70} height={90} src='/images/nepal.png'></img>
                        <div >
                            <p className='font-bold text-red-500 text-center' >......पालिका</p>
                            <h1 className='text-center'>वडा नं. ...को कार्यालय ....(कार्यालय रहेको स्थान ), ....(जिल्ला)</h1>
                            <h1 className='text-center'>.... प्रदेश, नेपाल</h1>
                        </div>
                        <img width={70} height={90} src='/images/nepal.png'></img>
                    </div>
                    <hr className="my-4 border border-red-400" />

                    <div className="bg-cover space-y-5 bg-center bg-opacity-80 h-screen  md:px-60" style={{ background: 'url("/images/logo_t.jpg")  no-repeat center ', height: '80%' }}>
                        <h1 className='text-right pr-20 mb-20'>मिति : २०७२/१२/१२ गते</h1>

                        <h1 className='text-center'>विषय : अविवाहित प्रमाणित गर्ने  |</h1>
                        <h1 className='text-left'>श्री जो जससँग सम्बन्धित छ।  </h1>
                        <h1 className='text-left'> … गाउँ/नगरपालिका  वडा नं.….को …… मा बस्ने श्री ……. को नाति …… को वर्ष ……. को छोरा /छोरी  श्री ……मिति  ……सम्म अविवाहित रहेको व्यहोरा निजको निवेदन र मिति  …… मा गरिएको सर्जमिन मुचुल्कको आधारमा स्थानीय सरकार संचालन ऐन ,२०७४ को दफा १२ (२ )ङ् (९ ) बमोजिम प्रमाणित गरिन्छ।   </h1>
                        <div className=' space-y-7'>
                        </div>
                        <div className='pt-20'>
                            <h1 className='text-right '>हस्ताक्षर...............</h1>
                            <h1 className='text-right '>(वडा अध्यक्ष्य )</h1>
                        </div>
                    </div>
                </div >
                <hr className="my-4 border border-red-400" />
                <footer className='mb-2 md:px-60'>

                </footer>

            </div>
        </div>
    )
}

export default TemplateAbibahitPranamit