import { useState, useEffect } from 'react';
import { getBadges, createBadge } from '../services/badgeService';
import { Badge } from '../types';

export const useBadges = () => {
  const [badges, setBadges] = useState<Badge[]>([]);

  useEffect(() => {
    const fetchBadges = async () => {
      const badges = await getBadges();
      setBadges(badges);
    };
    fetchBadges();
  }, []);

  return { badges, createBadge };
};
