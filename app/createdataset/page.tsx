import React from 'react'
import CreateDatasetCards from '../components/CreateDatasetCards'

const CreateDataSetCards = () => {
  return (
    <div className="absolute mt-16 right-0 flex justify-start flex-wrap w-[90%] lg:w-[75%] ">
      <CreateDatasetCards title={"Train your model"} shortDesc={"your model details"} content={"Model number:SHT3"}   />
      <CreateDatasetCards title={"Onboard Wi-Fi"} shortDesc={"Connect to Wi-Fi after take-off"} content={"Scan the QR code and enter the code"}   />
      <CreateDatasetCards title={"Train your model"} shortDesc={"your model details"} content={"Model number:SHT3"}   />
      <CreateDatasetCards title={"Onboard Wi-Fi"} shortDesc={"Connect to Wi-Fi after take-off"} content={"Scan the QR code and enter the code"}   />
    </div>
  )
}

export default CreateDataSetCards