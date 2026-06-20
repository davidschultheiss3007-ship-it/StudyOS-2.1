# StudyOS 2.1

Lokale, modulare Lernplattform für Semester 4. StudyOS 2.1 basiert auf React 19, Vite, Tailwind 4, shadcn/ui `base-nova` und MDX. Es gibt kein Backend; Lernfortschritt und Einstellungen liegen im Browser.

## Start und Prüfung

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Architektur

```text
src/
  app/                  Routing, Konfiguration, Storage, Theme
  components/           UI, Layout, Navigation, Learning, Quiz, Exams
  data/                 Semesterdaten und Modul-Registry
  modules/semester-4/   Modul-Bundles und Lerninhalte
  pages/                Routenansichten
  styles/               globale Styles und Design-Tokens
```

Ein Modul besteht aus:

```text
src/modules/semester-4/<module-id>/
  module.js
  questions.js
  exams.js
  topics/
    NN-slug.js
    NN-slug.mdx
    index.js
  index.js
```

`index.js` exportiert `{ module, topics, questions, exams }`. `src/data/moduleRegistry.js` stellt die registrierten Bundles über Accessor-Funktionen bereit.

## Topic hinzufügen

1. Topic-Metadaten als `topics/NN-slug.js` anlegen (`export const meta = { ... }`).
2. Inhalt als `topics/NN-slug.mdx` anlegen.
3. Metadaten und MDX in `topics/index.js` importieren und als `{ ...meta, Content }` registrieren.
4. Passenden Eintrag in `module.js` mit identischer ID und `hasContent: true` pflegen.
5. Fragen nur in `questions.js`, Prüfungen nur in `exams.js` ergänzen.
6. `npm run lint` und `npm run build` ausführen.

Der vollständige Vertrag einschließlich Komponenten-API steht in `docs/TOPIC_BUILD_SPEC.md`. Vorlagen liegen in `tools/templates/module-template/`, ausführbare Arbeitsanweisungen in `tools/prompts/` und `Prompts/`.

## Designsystem

`src/styles/tokens.css` ist die einzige Palette. `src/styles/globals.css` verbindet diese Tokens mit den semantischen Tailwind-/shadcn-Variablen. Lerninhalte verwenden ausschließlich die zentrale Komponentenpalette unter `src/components/learning/visuals/`; Topic-spezifisches CSS ist nicht vorgesehen.

## Weitere Dokumentation

- `AGENTS.md`: Repo- und Agentenregeln
- `CLAUDE.md`: Architektur- und Claude-Code-Kontext
- `DESIGN.md`: Designsystem
- `PRODUCT.md`: Produktprinzipien
- `CONTENT_INDEX.md`: Inhaltsübersicht
- `TASK_LOG.md`: kompakter Änderungsnachweis
