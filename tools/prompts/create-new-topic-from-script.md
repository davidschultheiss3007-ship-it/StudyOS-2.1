# Neues Topic aus einem Skript erstellen

1. `AGENTS.md` und `docs/TOPIC_BUILD_SPEC.md` lesen.
2. Quelle, Zielmodul, Kapitelnummer und Slug eindeutig festlegen.
3. `topics/NN-slug.js` aus `tools/templates/module-template/topics/01-example-topic.js` ableiten.
4. `topics/NN-slug.mdx` aus dem MDX-Template ableiten; nur zentrale Learning-Komponenten verwenden.
5. Topic in `topics/index.js` als `{ ...meta, Content }` registrieren und passenden `module.js`-Eintrag prüfen.
6. Quiz-/Prüfungsinhalte ausschließlich in `questions.js`/`exams.js` pflegen.
7. Quellenabdeckung, IDs, Section-Anker, Lint und Build prüfen.

Keine Topic-spezifischen Komponenten, Styles, hartcodierten Farben oder unbelegten Inhalte anlegen.
