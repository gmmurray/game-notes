import { DbEntity } from '@/types/dbEntity';

export interface GameNote extends DbEntity {
  game_id: string;
  content: string;
}
