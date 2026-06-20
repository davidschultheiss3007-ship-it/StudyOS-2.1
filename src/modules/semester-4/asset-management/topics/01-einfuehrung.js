// Static metadata for Kapitel 1 · Einführung. Content lives in
// 01-einfuehrung.mdx. Section ids must match the <section id> anchors.

export const meta = {
  id: 'einfuehrung',
  title: 'Kapitel 1 · Einführung',
  source: 'Asset Management · Kapitel 1 · Einführung · Folien 1-17',
  estimatedMinutes: 45,
  sections: [
    { id: 'einordnung-und-ziele', title: 'Einordnung und Modulziele' },
    { id: 'organisatorisches', title: 'Organisatorisches und Spielregeln' },
    { id: 'definition-und-formen', title: 'Definition und Formen des Asset Management' },
    { id: 'anbieter-und-anleger', title: 'Anbieter und institutionelle Anleger' },
    { id: 'beteiligte-parteien', title: 'Beteiligte Parteien im Fondsgeschäft' },
    { id: 'aufsicht-und-akteure', title: 'BaFin, KVG und Depotbank' },
  ],
  keyTakeaways: [
    'Asset Management ist die systematische Dienstleistung der professionellen Kapitalanlage mit dem Ziel, risikoeffiziente Portefeuilles zu bilden; Synonyme sind u. a. Portfolio-, Fonds- und Investment Management sowie Vermögensverwaltung.',
    'Das magische Viereck der Kapitalanlage spannt das Zielfeld aus Rendite, Risiko, Liquidität und Steuern auf.',
    'Erträge der Asset Manager hängen von Assets under Management (AuM), Performance und Anlagestil ab.',
    'Klassisches Asset Management ist individuell, aber teuer und wenig gestreut; fondsgestütztes Asset Management bietet breite Streuung schon ab kleinem Vermögen, ist aber weniger individuell.',
    'Anbieter lassen sich nach Kundentyp ordnen: beratende Banken, Vermögensverwaltung für Privatkunden und für institutionelle Anleger (Spezialfonds, Asset Allocation, ALM).',
    'Im Fondsgeschäft kontrolliert die BaFin Finanzdienstleister und KVG und überwacht die Depotbank; die KVG beschäftigt den Fondsmanager, der das von der Depotbank verwahrte Sondervermögen verwaltet.',
    'Das Sondervermögen ist vom Vermögen der KVG abgetrennt und so vor deren Zugriff bzw. dem ihrer Gläubiger geschützt; sein Wert ist die Summe der mit dem aktuellen Rücknahmepreis bewerteten Anteilscheine.',
    'Asset Management ist im 4. Semester des Schwerpunkts Finance & Risk Management verortet, baut auf Finanzinstrumente und Risikomanagement (3. Sem.) auf und steht neben Behavioral Finance.',
  ],
  examFocus: [
    'Definition von Asset Management nennen und die gängigen Synonyme zuordnen.',
    'Das magische Viereck (Rendite, Risiko, Liquidität, Steuern) als Zielspannungsfeld benennen.',
    'Klassisches vs. fondsgestütztes Asset Management mit jeweiligen Vor- und Nachteilen gegenüberstellen.',
    'Charakteristika institutioneller Anleger (juristische Person, hohe Volumina, fremde Mittel, starke Regulierung nach KAGG/WpHG/KWG) wiedergeben.',
    'Das Beziehungsdiagramm der beteiligten Parteien mit den gerichteten Beziehungen (kontrolliert, beauftragt, beschäftigt, verwaltet, verwahrt, investiert, Anteile) rekonstruieren.',
    'Die zwei Modelle des Finanzdienstleisters unterscheiden: klassische Anlageberatung (Einzelzustimmung) vs. Finanzportfolioverwaltung (Generalvollmacht, höhere EK-Anforderungen).',
    'Rolle und Rechtsgrundlage der BaFin (KWG, Allfinanzaufsicht) sowie die Pendants FMA (Österreich) und FINMA (Schweiz) benennen.',
    'Aufgaben von KVG und Depotbank sowie den Schutzcharakter des Sondervermögens (Trennung vom KVG-Vermögen) erläutern.',
  ],
  pitfalls: [
    'Das „magische Viereck" mit dem magischen Dreieck verwechseln: hier sind es vier Ziele (Rendite, Risiko, Liquidität, Steuern); auf der Folie ist es nur als Aufzählung genannt, nicht als gezeichnetes Diagramm.',
    'Klassisches und fondsgestütztes Asset Management vertauschen: individuell und teuer = klassisch, breit gestreut und schon ab kleinem Vermögen = fondsgestützt.',
    'Die Pfeilrichtung „beauftragt" umdrehen: sowohl Finanzdienstleister als auch KVG beauftragen die Depotbank (nicht umgekehrt).',
    'KVG und Depotbank gleichsetzen — die KVG steuert die Anlagepolitik, die Depotbank verwahrt das Sondervermögen und überwacht die KVG.',
    'Spezial- und Publikums-Sondervermögen verwechseln: Spezial-Sondervermögen basiert auf Vereinbarungen mit institutionellen Anlegern, Publikums-Sondervermögen sind alle übrigen.',
    'Die Spaltenüberschrift „SWS" wörtlich nehmen: bei den Werten 52/88 handelt es sich der Sache nach um Zeitstunden, die Folie beschriftet sie aber als SWS (so übernommen).',
  ],
};
