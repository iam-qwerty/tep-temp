export interface Advisor {
  id: number,
  name: string,
  role: string,
  organization: string,
  bio: string,
  image: string,
  linkedin: string,
  instagram: string,
  expertise: string[]
}

export interface Leader {
  id: number,
  name: string,
  role?: string,
  bio: string,
  image: string,
  linkedin: string,
  instagram?: string,
}