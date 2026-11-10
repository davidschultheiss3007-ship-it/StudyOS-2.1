# Neues Topic aus einem Skript erstellen

1. `AGENTS.md` und `docs/TOPIC_BUILD_SPEC.md` lesen.
2. Quelle, Zielmodul, Kapitelnummer und Slug eindeutig festlegen.
3. Jede Folie als Bild ansehen und ein Abbildungsinventar anlegen (Folie, Typ, Daten, Nachbau-Weg A–D, Spec §2.0).
4. `topics/NN-slug.js` aus `tools/templates/module-template/topics/01-example-topic.js` ableiten.
5. `topics/NN-slug.mdx` aus dem MDX-Template ableiten; nur zentrale Learning-Komponenten verwenden. Abbildungen so genau wie möglich nachbauen (gleicher Typ, gleiche Achsen, Werte und Beschriftungen) oder als zugeschnittenes Original einbinden; abgeleitete Werte kennzeichnen.
6. Topic in `topics/index.js` als `{ ...meta, Content }` registrieren und passenden `module.js`-Eintrag prüfen.
7. Übungen aus dem Skript als `<Exercise>`; eigene Quiz-/Prüfungsinhalte ausschließlich in `questions.js`/`exams.js` pflegen.
8. Quellenabdeckung, IDs, Section-Anker, Lint und Build prüfen; jede Abbildung gerendert neben der Folie vergleichen (Desktop hell, Mobil dunkel).

Keine Topic-spezifischen Komponenten, Styles, hartcodierten Farben oder unbelegten Inhalte anlegen.
