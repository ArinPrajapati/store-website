import React from 'react'
import state from '../constant/PageState'
import { useSnapshot } from 'valtio'

const Feature = () => {
    const snap = useSnapshot(state)
  return (
    <div className='bg-red-500 w-[80%] h-[10rem] my-auto'>
        {snap.count}
    </div>
  )
}

export default Feature