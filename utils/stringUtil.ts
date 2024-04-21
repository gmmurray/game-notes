import { z } from 'zod';

export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}

export function splitUrlString(str: string, character: string): string[] {
  const cleaned = removeWhitespace(str ?? '');
  return cleaned
    .split(character)
    .filter(url => z.string().url().safeParse(url).success);
}
