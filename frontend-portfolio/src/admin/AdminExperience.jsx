import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Modal} from 'antd'
function AdminExperience() {
  const {portfolioData}= useSelector(state=>state.root)
  const {experiences}=portfolioData
  const dispatch=useDispatch()
  const [showModal,setShowModal]=useState(false)
  const [selectedItemForEdit,setSelectedItemForEdit]=useState(null)
  return (
    <div>
    <div className='grid grid-cols-4'>
     {
      experiences.map((value,index)=>(
        <div key={index} className='m-3 flex flex-col gap-2 border-2 p-6 hover:shadow-lg'>
          <h1 className='font-bold text-2xl text-primary'>{value.period}</h1>
          <hr/>
          <h1 className=' '>{value.company}</h1>
          <h1 className=' '>{value.title}</h1>
          <p>{value.description}</p>
          <div className="flex justify-end mt-5">
            <button className='bg-primary text-white px-5 py-3 mx-2'>Edit</button>
            <button className='bg-red-600 text-white px-5 py-3 mx-2'>delete</button>
          </div>
        </div>
      ))
     }
    </div>
    <Modal>
      visible={showModal}
      title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
    </Modal>
    </div>
  )
}

export default AdminExperience
