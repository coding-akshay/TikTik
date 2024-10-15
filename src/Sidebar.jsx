import React from 'react'

function Sidebar() {
  return (
    <div className='h-[100vh] w-[50px] bg-neutral-100 flex justify-between flex-col items-center'>
       
       <div className='h-[200px] w-[45px]  flex justify-evenly flex-col items-center '>
    <img className='h-[32px] w-[35px] rounded' src="src\assets\me.jpg" alt="" />
    <img className='h-[25px] w-[25px]' src="src\assets\icons8-checkbox-30.png" alt="" />
    <img className='h-[25px] w-[25px]' src="src\assets\icons8-search-50.png" alt="" />
    <img className='h-[25px] w-[25px]' src="src\assets\icons8-calendar-32.png" alt="" />

    
    </div>
    <div className='h-[150px] w-[45px]  flex justify-evenly flex-col items-center'>
    <img className='h-[25px] w-[25px]' src="src\assets\icons8-synchronize-50.png" alt="" />
    <img className='h-[25px] w-[25px]' src="src\assets\icons8-notification-48.png" alt="" />
    <img className='h-[25px] w-[25px]' src="src\assets\icons8-help-52.png" alt="" />

    
    </div>
        
    </div>
  )
}

export default Sidebar
