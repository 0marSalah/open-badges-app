import React, { useState, useEffect } from 'react';
import { createBadge } from '../services/badgeService';

const BadgeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    if (window.ethereum) {
      setProvider(window.ethereum);
    } else {
      console.error('No Ethereum provider found');
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createBadge({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Create Badge</button>
    </form>
  );
};

export default BadgeForm;
