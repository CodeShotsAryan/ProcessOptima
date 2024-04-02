import React from 'react';
import { Table } from 'react-bootstrap';

const ProcessTable = ({ processes }) => {
  // Check if processes array is empty or undefined
  if (!processes || processes.length === 0) {
    return <p>No processes available</p>;
  }

  // Get the headers dynamically from the first process object
  const headers = Object.keys(processes[0]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {processes.map((process, index) => (
          <tr key={index}>
            {headers.map((header, idx) => (
              <td key={idx}>{process[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProcessTable;
