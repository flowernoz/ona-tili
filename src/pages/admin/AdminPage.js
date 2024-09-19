import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import AddForm from '../../components/addForm/AddForm';

function SectionOne() {
  return <div></div>;
}

function Dashboard() {
  const [diktants, setDiktants] = useState([]);

  const handleAddDiktant = (newDiktant) => {
    setDiktants([...diktants, newDiktant]);
  };

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.header}>Admin Dashboard</h1>
      <div style={styles.sectionContainer}>
        <SectionOne />
        <AddForm onAdd={handleAddDiktant} />
        <ul style={styles.diktantList}>
          {diktants.map((diktant) => (
            <li key={diktant.id} style={styles.diktantItem}>
              <h3>{diktant.title}</h3>
              <p>{diktant.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AdminPage() {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Dashboard />
      <button onClick={goBack} style={styles.backButton}>Ortga qaytish</button>
    </div>
  );
}

const styles = {
  dashboardContainer: {
    height: '75vh',
    padding: '30px',
    marginTop: '20px',
    backgroundColor: '#ffffff', // White background
    color: '#0057a1', // Dark blue text
    boxShadow: '0px 0px 10px 0 lightgray',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: 'dodgerblue', // Dark blue
    fontSize: '24px',
    fontFamily: 'Poppins, sans-serif',
  },
  // sectionContainer: {
  //   padding: '20px',
  //   // backgroundColor: '#e0f7ff', // Light blue background for sections
  //   borderRadius: '8px',
  //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  // },
  diktantList: {
    marginTop: '20px',
  },
  // diktantItem: {
  //   padding: '10px',
  //   backgroundColor: '#ffffff', // White background for items
  //   border: '2px solid #0057a1', // Dark blue border
  //   color: '#0057a1', // Dark blue text
  //   borderRadius: '4px',
  //   marginBottom: '10px',
  // },
  backButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#0057a1', // Dark blue button
    color: '#ffffff', // White text
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif',
  },
};

export default AdminPage;
