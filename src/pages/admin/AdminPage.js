import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AddForm from '../../components/addForm/AddForm';

function SectionOne() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([]);
  }, []);

  // const deleteItem = (id) => {
    
  // };

  return (
    <div>
      
    </div>
  );
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
        {/* Other sections */}
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
      <button onClick={goBack}>Ortga qaytish</button>
    </div>
  );
}

const styles = {
  dashboardContainer: {
    height: '87vh',
    padding: '30px',
    marginTop: '20px',
    backgroundColor: '#000', // Black background
    color: '#000', // White text
    boxShadow: '0px 0px 10px 0 lightgray'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  sectionContainer: {
    padding: '20px',
    backgroundColor: 'lightgrey',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  diktantList: {
    marginTop: '20px',
  },
  diktantItem: {
    padding: '10px',
    backgroundColor: 'black',
    border: '2px solid #333',
    color: 'white',
    borderRadius: '4px',
    marginBottom: '10px',
  },
};

export default AdminPage;
