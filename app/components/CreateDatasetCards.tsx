import Link from 'next/link'
import React from 'react'

const CreateDatasetCards = ({title,shortDesc,content}:any) => {
  return (
    <div className='border mt-5 p-7 m-4 cursor-pointer hover:-translate-y-2 h-fit w-1/3 shadow-sm shadow-black rounded-xl'>
    <Link href={"/createdataset/knowledgemodel"}>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-base pt-1 font-medium text-gray-500'>{shortDesc}</p>
        <br />
        <br />
        <p>{content}</p>
        </Link>
    </div>
  )
}

export default CreateDatasetCards