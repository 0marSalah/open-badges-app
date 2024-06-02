export interface Badge {
  id?: string;
  name: string;
  description: string;
}

export interface CreateBadgeResponse {
  createBadge: {
    document: Badge;
  };
}

export interface GetBadgesResponse {
  badges: Badge[];
}
