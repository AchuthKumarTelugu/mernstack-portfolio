import { Form, Input, message } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('entered onFinsih', values)
        const response = await axios.post('http://localhost:3000/api/portfolio/login', values)
        console.log('send request', response)
        const data = response.data
        console.log('data', data)
        if (data.success) {
            message.success(data.message)
            localStorage.setItem('token',data.token)
            navigate('/admin')
        } else {
            message.error(data.message)
        }


    }
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center '>
            <div className="login-form w-2/5 border-2 shadow-lg p-5 bg-white rounded-lg">
                <h1 className='font-bold text-3xl text-primary mb-5'>Login</h1>
                <Form onFinish={onFinish} layout='vertical'>
                    <Form.Item name='username' label='username'>
                        <Input type='text' placeholder='username' />
                    </Form.Item>
                    <Form.Item name='password' label='password'>
                        <Input.Password
                            placeholder="input password"
                            visibilityToggle={{
                                visible: passwordVisible,
                                onVisibleChange: setPasswordVisible,
                            }}
                        />
                    </Form.Item>
                    <div className="flex justify-end">
                        <button className='px-4 py-2 text-tertiary font-bold hover:shadow-none border-2 border-tertiary shadow-lg rounded' type='submit'>Login</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login
