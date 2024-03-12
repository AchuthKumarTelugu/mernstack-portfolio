import React from 'react'
import { Form, Input } from 'antd'
import {useSelector} from 'react-redux'
function AdminIntro() {
  const {portfolioData}=useSelector(state=>state.root)
  const onFinish = () => {
    
  }
  
  return (
    
    <div>
      <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.intro}>
        <Form.Item name="welcomeText" label='welcome text'>
          <input type="text" placeholder="welcome Text" />
        </Form.Item>
        <Form.Item name="firstName" label='firstName'>
          <input type="text" placeholder='firstName' />
        </Form.Item>
        <Form.Item name="lastName" label='lastName'>
          <input type="text" placeholder='lastName' />
        </Form.Item>
        <Form.Item name="caption" label='caption'>
          <input type="text" placeholder='caption' />
        </Form.Item>
        <Form.Item name="description" label='description'>
          <textarea type="text" placeholder='description' />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className='px-8 py-3 bg-primary text-white text-xl'>save</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro
