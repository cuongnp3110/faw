import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setAge('');
    setBirthDate('');
    setInterests('');
  };

  return (
    <div>
    <h2>Survey Form</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Interests:
        <textarea
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    <a href="/datalist">DataList</a>
    <br/>
    <a href="/wheelspinner">WheelSpinner</a>
  </div>
  );
}

export default Form;
