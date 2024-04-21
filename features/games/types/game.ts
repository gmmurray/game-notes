import { DbEntity } from '@/types/dbEntity';

export interface Game extends DbEntity {
  user_id: string;
  name: string;
  description?: string;
}
