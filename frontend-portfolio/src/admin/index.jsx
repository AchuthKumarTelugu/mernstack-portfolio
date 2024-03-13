import React from 'react'
import Header from '../components/Header'
import { Tabs } from 'antd';
import AdminExperience from './adminExperience';
import AdminIntro from './adminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminProjects from './AdminProjects';
import AdminContacts from './AdminContacts';

function Admin() {
  const { TabPane } = Tabs;
  const { portfolioData } = useSelector(state => state.root)
  return (
    <div className=''>
      <Header />
      {
        portfolioData ? (<div className='m-4 mt-8 p-5 border-2'>
          <Tabs defaultActiveKey="1"  >
            <TabPane tab="intro" key="1" >
              <AdminIntro />
            </TabPane>
            <TabPane tab="experience" key="2" >
              <AdminExperience />
            </TabPane>
            <TabPane tab="about" key="3" >
              <AdminAbout />
            </TabPane>
            <TabPane tab="projects" key="4" >
              <AdminProjects/>
            </TabPane>
            <TabPane tab="contacts" key="5" >
              <AdminContacts/>
            </TabPane>
          </Tabs>
        </div>) : null
      }
    </div>
  )
}

export default Admin
