import React, { useState } from 'react';

const AddDiktantForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDiktant = {
      id: Date.now(), 
      title,
      content,
    };

    onAdd(newDiktant);

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Nomi:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Matni:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.textarea}
          required
        />
      </div>
      <button type="submit" style={styles.submitButton}>Qo'shish</button>
    </form>
  );
};

const styles = {
  formContainer: {
    padding: '20px',
    backgroundColor: 'grey',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
    fontWeight: '900',
    letterSpacing: '2px'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px',
  },
  submitButton: {
    padding: '10px 15px',
    backgroundColor: 'gray',
    boxShadow: '0 0 10px 0 lightgray',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AddDiktantForm;
