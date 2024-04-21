import { DbEntity } from '@/types/dbEntity';

export interface GameTask extends DbEntity {
  game_id: string;
  content: string;
  completed: boolean;
  deadline?: string;
}
