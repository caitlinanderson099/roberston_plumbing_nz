import React from 'react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'

const Plumbing = () => {
  return (
    <>
      <SEO 
          title="Robertson Plumbing Solutions LTD | Plumbing"
          description="Top plumbing services in Upper Hutt, Wellington."
          url="https://robertsonplumbing.vercel.app/"
        />
      <div>
        <PageHeader 
          title="Plumbing" 
          backgroundImage="/bg-images/plumbing-bg.png" 
        />      
      </div>
    </>
  )
}

export default Plumbing
