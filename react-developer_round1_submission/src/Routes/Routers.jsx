import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page_crm_join_1 from '../components/Page_crm_join_1'
import Page_crm_main from '../components/Page_crm_main'
import Page_crm_join_2 from '../components/Page_crm_join_2'

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Page_crm_main />} />
          <Route path="/join1" element={<Page_crm_join_1 />} />
          <Route path="/join2" element={<Page_crm_join_2 />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Routers