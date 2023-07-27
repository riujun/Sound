export interface UserData {
  albumes: string[];
  mercadopagoApproved: boolean;
  paypalApproved: boolean;
  _id: string;
  name: string;
  surname: string;
  artist: boolean;
  username: string;
  profilePhoto: string;
  favoriteArtists: string[];
  email: string;
  coverPhoto: string;
  password: string;
  songsPurchased: string[];
  songsUplodaded: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  description?: string;
  genre?: string;
  followingArtists?: any[];
}
