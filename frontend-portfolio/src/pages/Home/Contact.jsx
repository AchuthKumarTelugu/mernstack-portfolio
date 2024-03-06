import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import contactImage from '../../assets/contactus-image.png'
function Contact() {
    const user = {
        "name": "Achuth kumar .Telugu",
        "age": "21",
        "gender": "Male",
        "email": "achuthkumar.telugu123@gmail.com",
        "mobile": "6301245622",
        "address": "Hyderabad, Telangana"
    }
    return (
        <div>
            <SectionTitle title={"Say Hello"} />
            <div className="flex items-center sm:flex-col sm:gap-16 py-10 ">
                <div className='w-1/2  pl-16 sm:pl-0 sm:flex sm:justify-center ' >
                    <pre className='text-tertiary '>
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div >
                <div className='text-white w-1/2 sm:w-full '>
                  <img src={contactImage} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Contact
