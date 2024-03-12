import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Modal,message } from 'antd'
import axios from 'axios'
import { HideLoading, ShowLoading } from '../redux/rootSlice'
function AdminExperience() {
  const { portfolioData } = useSelector(state => state.root)
  const { experiences } = portfolioData
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
  const handleCancel = () => {
    setShowModal(false)
    setSelectedItemForEdit(null)
  }
  const handleOpenModal = () => {
    setShowModal(true)
  }
  const onFinish = async(values) => {
    console.log('entered onFinish', values)
    try {
      dispatch(ShowLoading())
      const response=await axios.post('http://localhost:3000/api/portfolio/add-experiences',values)
      dispatch(HideLoading())
      const data=response.data
      if(data.success) {
        message.success(data.message)
      }else{
        message.error('error occured')
      }
    } catch (error) {
      console.log(error)
      message.error(error.message)
    }
    handleCancel()
  }

  return (
    <div>
      <div className="flex justify-end ml-3 my-2">
        <button className="bg-primary text-white px-4 py-2"
          onClick={() => {
            handleOpenModal()
            setSelectedItemForEdit(null)
          }}
        >Add Experience</button>
      </div>
      <div className='grid grid-cols-4'>
        {
          experiences.map((value, index) => (
            <div key={index} className='m-3 flex flex-col gap-2 border-2 p-6 hover:shadow-lg'>
              <h1 className='font-bold text-2xl text-primary'>{value.period}</h1>
              <hr />
              <h1 className=' '>{value.company}</h1>
              <h1 className=' '>{value.title}</h1>
              <p>{value.description}</p>
              <div className="flex justify-end mt-5">
                <button className='bg-primary text-white px-5 py-3 mx-2'
                  onClick={() => {
                    setShowModal(true)
                    console.log('clicked edit')
                  }}
                >Edit</button>
                <button className='bg-red-600 text-white px-5 py-3 mx-2'>delete</button>
              </div>
            </div>
          ))
        }
      </div>
      <Modal
        open={showModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null} onCancel={handleCancel}
      >
        <Form layout='vertical' onFinish={onFinish} >
          <Form.Item name='period' label='period'>
            <input placeholder='period' />
          </Form.Item>
          <Form.Item name='company' label='company'>
            <input placeholder='company' />
          </Form.Item>
          <Form.Item name='title' label='title'>
            <input placeholder='title' />
          </Form.Item>
          <Form.Item name='description' label='description'>
            <textarea placeholder='description' />
          </Form.Item>
          <div className="flex justify-end gap-2">
            <button className='border-2 border-primary text-primary px-4 py-2'
              onClick={handleCancel}
            >Cancel</button>
            <button className='bg-primary text-white px-4 py-2'>
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default AdminExperience
