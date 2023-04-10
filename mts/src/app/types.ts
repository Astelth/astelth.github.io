export type Slide = {
  title: string;
  subtitle?: string;
  note?: string;
  text: string;
  squarePicture?: string;
  backgroundImage?: string;
  theme?: Record<string, string> | null;
  position?: 'bottom';
}

export type Link = {
  title: string;
  text?: string;
  link: string;
  picture?: string;
}

export type MenuItem = {
  name: string;
  link: string;
  active?: boolean;
  items: Link[] | null;
}

export type SocietySlide = {
  title: string;
  subtitle: string;
  note_item_one: string;
  note_item_two: string;
  note_item_three: string;
  note_item_four: string;
  note_item_five: string;
  note_item_six: string;
  note_item_seven: string;
}

export enum Direction {
  UP = 'up',
  DOWN = 'down',
}
