import React from 'react';
import { Badge } from '../types';

interface BadgeDetailsProps {
  badge: Badge;
}

const BadgeDetails: React.FC<BadgeDetailsProps> = ({ badge }) => (
  <div>
    <h2>{badge.name}</h2>
    <p>{badge.description}</p>
  </div>
);

export default BadgeDetails;
