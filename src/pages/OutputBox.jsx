import {Noto_Sans , Lato } from 'next/font/google'
import ArrayTypesBox from '@/component/ArrayTypeBox'
import ProcessTable from '@/component/ProcessBox'
const noto_Sans = Noto_Sans({
  subsets :['latin'],

})
const lato = Lato({
  subsets:['latin'],
  weight:['400']
})
const OutputBox = ({selectedAlgorithm}) => {
  return (
    <div>
      <div className={noto_Sans.className}>
        <h2>Output</h2>  <br/>
        <h2>Selected Algorithm : {selectedAlgorithm}</h2>
        <p className={lato.className}>Gantt Chart and Table will be shown here .</p>
        <ProcessTable processes={processes}/>
      </div>
    </div>
  )
}

const processes = [
  { id: 1, name: 'Process 1', arrivalTime: 0, burstTime: 5, turnaroundTime: 10 },
  { id: 2, name: 'Process 2', arrivalTime: 2, burstTime: 3, turnaroundTime: 8 },
  { id: 3, name: 'Process 3', arrivalTime: 4, burstTime: 7, turnaroundTime: 15 },
  // More process objects...
];

export default OutputBox
