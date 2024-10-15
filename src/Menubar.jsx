import React from 'react'

function Menubar() {
  return (
   <div className='h-[100vh] w-[250px]  border flex justify-between flex-col items-center'>
      <div className='h-[150px] w-[250px] border flex justify-evenly items-center  flex-col '>

        <div className='h-[35px] w-[230px]   flex  items-center  gap-2 hover:bg-gray-100 rounded-lg' >
      <img className='h-[20px] w-[20px]' src="src\assets\icons8-calendar-3-48.png" alt="" />
      <p>Today</p>
        </div>

        <div className='h-[35px] w-[230px]  flex  items-center gap-2 hover:bg-gray-100 rounded-lg'>
      <img className='h-[15px] w-[15px]' src="src\assets\icons8-tuesday-52.png" alt="" />
      <p> Next 7 Days</p>
 </div>

 <div className='h-[35px] w-[230px] flex   items-center gap-2 hover:bg-gray-100 rounded-lg '>

      <img className='h-[20px] w-[20px]' src="src\assets\icons8-inbox-48.png" alt="" /> 
      <p>Inbox</p>
 </div>



      </div>
   </div>
  )
}

export default Menubar
