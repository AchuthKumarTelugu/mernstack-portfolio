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
            <div className="flex   py-10">
                <div>
                    <pre className='text-tertiary'>
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div>
                <div className='text-white'>
                  <img src={contactImage} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Contact
