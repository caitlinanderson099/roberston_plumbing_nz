import React from 'react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'

const CentralHeating = () => {
  return (
    <>
      {/* <SEO 
          title="Robertson Plumbing Solutions LTD | Central Heating"
          description="Top plumbing services in Upper Hutt, Wellington."
          url="https://robertsonplumbing.vercel.app/"
        /> */}
      <div className='central-heating-page'>
        <PageHeader 
          title="Central heating" 
          backgroundImage="/bg-images/heating-bg.webp" 
        />      
      </div>
    </>
  )
}

export default CentralHeating
