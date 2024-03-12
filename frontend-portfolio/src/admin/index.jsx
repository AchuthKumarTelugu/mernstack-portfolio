import React from 'react'
import Header from '../components/Header'
import { Tabs } from 'antd';
import AdminExperience from './adminExperience';
import AdminIntro from './adminIntro';
import AdminAbout from './AdminAbout';

function Admin() {
  const { TabPane } = Tabs;

  return (
    <div className=''>
      <Header />
      <div className='m-4 mt-8 p-5 border-2'>

      <Tabs defaultActiveKey="1"  >
        <TabPane tab="intro" key="1" >
          <AdminIntro/>
        </TabPane>
        <TabPane tab="experience" key="2" >
          <AdminExperience/>
        </TabPane>
        <TabPane tab="about" key="3" >
          <AdminAbout/>
        </TabPane>
      </Tabs>
      </div>
    </div>
  )
}

export default Admin
