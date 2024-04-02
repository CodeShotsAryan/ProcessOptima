import { Open_Sans, Noto_Sans } from 'next/font/google';
import { useState } from 'react';
import Input from '@/component/Input';
import Button from '@/component/Button';
import './styles.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});
const notoSans = Noto_Sans({
  subsets: ['latin'],
});

const InputBox = ({ setSelectedAlgorithm, onInputSubmit }) => {
  const [selectedAlgorithm, setSelectedAlgorithmLocal] = useState('FCFS');
  const [arrivalTime, setArrivalTime] = useState('');
  const [burstTime, setBurstTime] = useState('');

  const handleInputSubmit = () => {
    const arrivalArray = arrivalTime.trim().split(' ');
    const burstArray = burstTime.trim().split(' ');
  
    if (arrivalArray.length !== burstArray.length) {
      console.error('Number of arrival array should be equal to number of burst array ');
      return;
    }
  
    const input = arrivalArray.map((arrival, index) => ({
      arrivalTime: parseInt(arrival),
      burstTime: parseInt(burstArray[index]), // Remove semicolon here
    }));
  
    onInputSubmit({ processes: input, selectedAlgorithm });
  };
  
  const handleAlgorithmChange = (e) => {
    setSelectedAlgorithmLocal(e.target.value);
    setSelectedAlgorithm(e.target.value);
  };

  return (
    <div className=''>
      <h1 className={notoSans.className}>Input</h1>
      <h5 className='font'>Algorithm</h5>
      <select className={notoSans.className} value={selectedAlgorithm} onChange={handleAlgorithmChange}>
        <option value="FCFS">First Come, First Serve (FCFS)</option>
        <option value="SJF">Shortest Job First (SJF)</option>
        <option value="SRTN">Shortest Remaining Time (SRTN)</option>
        <option value="RR">Round Robin (RR)</option>
        <option value="PR">Priority Scheduling (P)</option>
      </select>

      {selectedAlgorithm === 'FCFS' && <h1>hello fcfs</h1>}
      {selectedAlgorithm === 'SJF' && <h1>hello SJF</h1>}
      {selectedAlgorithm === 'RR' && <h1>hello RR</h1>}
      {selectedAlgorithm === 'PR' && <h1>hello Priority</h1>}

      <h5>Arrival Times</h5>
      <Input child={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />

      <h5>Burst Times</h5>
      <Input child={burstTime} onChange={(e) => setBurstTime(e.target.value)} />
      <br />
      <Button onClick={handleInputSubmit}>Solve</Button> {/* Change children to onClick */}
    </div>
  );
};

export default InputBox;
