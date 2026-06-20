# PDF zu StudyOS-2.1-Topic (Codex)

Erstelle aus der angegebenen lokalen PDF ein StudyOS-2.1-Topic. Lies zuerst `AGENTS.md`, `docs/TOPIC_BUILD_SPEC.md`, die Modulstruktur und das Goldstandard-Topic. Verwende den Agenten `studyos-pdf-topic-builder`.

Extrahiere ausschließlich belegte Inhalte samt Seiten-/Folienbezug. Erstelle `NN-slug.js` und `NN-slug.mdx`; integriere nur bei Auftrag. Visualisiere nach Stofftyp mit der zentralen Learning-Palette, ohne Topic-CSS, neue UI oder eigene Farben. Quiz und Prüfungen gehören ausschließlich in `questions.js` beziehungsweise `exams.js`. Prüfe Quellenabdeckung, IDs, Anker, Lint, Build und bei visueller Änderung Desktop/Mobile.
