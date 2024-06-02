import React, { useEffect, useState } from 'react';
import { getBadges } from '../services/badgeService';
import { Badge } from '../types';

const BadgeList: React.FC = () => {
  const [badges, setBadges] = useState<Badge[]>([]);

  // useEffect(() => {
  //   const fetchBadges = async () => {
  //     const badges = await getBadges();
  //     setBadges(badges);
  //   };
  //   fetchBadges();
  // }, []);

  return (
    <div>
      <h2>Badges</h2>
      <ul>
        {badges.map(badge => (
          <li key={badge.id}>{badge.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BadgeList;
