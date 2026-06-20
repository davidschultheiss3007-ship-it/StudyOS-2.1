export const module = {
  id: 'example-module',
  semesterId: 'semester-4',
  title: 'Example Module',
  shortTitle: 'Example',
  description: 'Kurzbeschreibung des Moduls.',
  status: 'planned',
  examDate: null,
  accent: 'var(--color-module-blue)',
  topics: [
    {
      id: 'example-topic',
      title: 'Kapitel 1 · Example Topic',
      status: 'available',
      hasContent: true,
      source: 'Example Module · Kapitel 1 · Folien 1–10',
      estimatedMinutes: 45,
    },
  ],
};
