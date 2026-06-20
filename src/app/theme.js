// Theme handling. Light is the default; dark is opt-in and persisted.
// The active theme drives two parallel token systems that must stay in sync:
//   - tokens.css keys off  <html data-theme="dark">
//   - shadcn/ui tokens key off the `.dark` class (see globals.css)
// We therefore toggle BOTH together. The studyos_theme storage key is kept
// identical to StudyOS 2.0 so progress/preferences remain portable.

const THEME_KEY = 'studyos_theme';
export const THEMES = ['light', 'dark'];
export const DEFAULT_THEME = 'light';

export function getTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return THEMES.includes(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    root.classList.add('dark');
  } else {
    root.removeAttribute('data-theme');
    root.classList.remove('dark');
  }
}

export function setTheme(theme) {
  const next = THEMES.includes(theme) ? theme : DEFAULT_THEME;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    // ignore persistence failure
  }
  applyTheme(next);
  return next;
}

export function toggleTheme() {
  return setTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

// Apply the stored theme as early as possible (called from main.jsx).
export function initTheme() {
  const theme = getTheme();
  applyTheme(theme);
  return theme;
}
