import { useState } from 'react';
import Head from 'next/head';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

export default function Home() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('FCFS');
  
  const handleAlgorithmChange = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const handleInputSubmit = (inputData) => {
    // Implement your logic for handling the input data here
    console.log('Input data:', inputData);
  };

  return (
    <div>
      <Head>
        <title>Process Optima</title>
        <meta name='description' content='Welcome to Process Optima! Calculate with Scheduling Algorithms' />
      </Head>
      <main className="main-container">
        <div className="input-container">
          <InputBox setSelectedAlgorithm={handleAlgorithmChange} onInputSubmit={handleInputSubmit} />
        </div>
        <div className="output-container">
          <OutputBox selectedAlgorithm={selectedAlgorithm}/>
        </div>
      </main>
    </div>
  );
}
