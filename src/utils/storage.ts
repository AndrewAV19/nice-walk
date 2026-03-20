// utils/storage.ts
export interface State {
  unlocked: boolean[];
  arrived: number[];
  choices: Record<number, number>;
  riddle: boolean;
}

export const loadState = <T>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(`mapa_${key}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error(`Error loading ${key} from localStorage:`, e);
  }
  return defaultValue;
};

export const saveState = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(`mapa_${key}`, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e);
  }
};