import { Open_Sans  , Noto_Sans} from 'next/font/google'
import { useState } from 'react'
import Input from '@/component/Input'
import Button from '@/component/Button'
import './styles.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})
const noto_Sans = Noto_Sans({
  subsets:['latin'],
})
const InputBox = ({setSelectedAlgorithm}) => {
  const [selectedAlgorithm , setSelectedAlgorithmLocal ] = useState('FCFS');
  const handleAlgorithmChange =(e)=>{
    setSelectedAlgorithmLocal(e.target.value)
    setSelectedAlgorithm(e.target.value)
  }
  return (
    <div className=''>
      <h1 className={noto_Sans.className }>Input</h1>
      <h5 className='font'>Algorithm</h5>
      <select className={noto_Sans.className } value={selectedAlgorithm} onChange={handleAlgorithmChange}> 
        <option value="FCFS">First Come  , First Serve  (FCFS)</option>
        <option value="SJF">Shortest Job First (SJF) </option>
        <option value="SRTN">Shortest Remaining Time (SRTN) </option>
        <option value="RR">Round Robin (RR) </option>
        <option value="PR">Priority Scheduling (P)</option>
      
      </select>

      {selectedAlgorithm === 'FCFS' && <h1>hello fcfs</h1>}
      {selectedAlgorithm === 'SJF' && <h1>hello SJF</h1>}
      {selectedAlgorithm === 'RR' && <h1>hello RR</h1>}
      {selectedAlgorithm === 'PR' && <h1>hello Priority</h1>}

     
       <h5>Arrival Times</h5>
       <Input child={"1 , 2 , 3 , 4 , 5"} />  

       <h5>Burst Times</h5>
       <Input child={"e.g. 2 5 7 10"} />
       <br /> 
      <Button children={"Solve"}    />
    </div>
  )
}

export default InputBox
