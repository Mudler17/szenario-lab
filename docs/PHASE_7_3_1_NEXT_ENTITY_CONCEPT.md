# Phase 7.3.1 · Nächste Entität auswählen und Konzept erstellen

## 1. Ziel der Phase
Auswahl und konzeptionelle Vorbereitung der nächsten editierbaren Entität nach der freigegebenen Annahmen-Bearbeitung.

## 2. Ausgangspunkt
- Annahmen-Bearbeitung ist minimal lokal freigegeben (Phase 7.2.4 inkl. Review).
- Der Arbeitsrahmen bleibt unverändert lokal im Draft.
- Es erfolgt weiterhin kein Speicher-, Backend- oder Simulationsausbau.

## 3. Tempo-Regel
Für neue Entitäten gilt ab jetzt der einheitliche Drei-Schritt-Schnitt:
- **Konzept**
- **Implementierung**
- **Review**

Keine separaten Sonderphasen mehr für Utility, UI, a11y oder Statusmeldungen.
Die Implementierungsphase bündelt Utility, UI, a11y, Statusmeldungen, Tests und Doku.

## 4. Kurze Kandidatenprüfung
- **Evidenz** passt jetzt am besten: Nach Annahmen kann fachlich direkt sichtbar gemacht werden, wodurch Annahmen gestützt oder infrage gestellt werden.
- **Personas/Ressourcen/Phasen** bleiben sinnvoll, erzeugen aber aktuell weniger direkten Anschluss an die frisch etablierte Annahmen-Bearbeitung.
- **Beziehungen/Interventionen** sind weiterhin komplexer und risikoreicher für vorzeitige Querverknüpfungen.

## 5. Entscheidung
**Phase 7.3 fokussiert die Entität „Evidenz“.**

Arbeitstitel der Entität: **Evidenz**.

## 6. Fachlicher Zweck der Entität
Evidenz macht sichtbar, worauf Annahmen fachlich gestützt sind oder wodurch sie infrage gestellt werden.

Evidenz ist in Phase 7.3 ausdrücklich:
- keine Simulation,
- keine KI-Bewertung,
- kein Quellenmanagementsystem.

Evidenz bleibt lokal im Draft und unterstützt strukturierte Szenarioarbeit.

## 7. Minimaler Datenzuschnitt
Für die nächste Implementierung wird ein minimaler, robuster Zuschnitt verwendet:
- `id`
- `title`
- `content`
- `sourceType`
- `relation`
- `confidence`
- `assumptionId` optional (alternativ zunächst nur textueller Bezug)

Leitlinie:
- Keine harte relationale Verknüpfung erzwingen.
- Bezug zu Annahmen nur minimal und robust einführen.
- Keine komplexe Quellenverwaltung.

## 8. Abgrenzung
Evidenz wird klar abgegrenzt von:
- **Annahmen:** Annahmen sind Hypothesen/Voraussetzungen; Evidenz beschreibt stützende oder widersprechende Hinweise.
- **Personas:** Rollen-/Akteursmodell, nicht Evidenzstruktur.
- **Ressourcen:** Mittel/Kapazitäten, nicht Belegstruktur.
- **Beziehungen:** Interaktionen zwischen Akteuren, nicht Evidenzbezüge.
- **Interventionen:** Maßnahmenplanung, nicht Evidenzerfassung.
- **Phasen:** zeitliche Strukturierung, nicht Evidenzobjekte.
- **Simulation:** keine Simulationslogik in dieser Phase.
- **Quellenverwaltung:** kein Quellenkatalog, keine Verwaltungslogik.
- **KI-Bewertung:** keine automatische Bewertung oder Rankinglogik.

## 9. Pattern-Verweise
Es gelten die bereits etablierten Patterns (nur Verweis, keine Neudefinition):
- Draft-Utility-Pattern aus den Annahmen-Phasen.
- Lokale Bearbeitung im bestehenden Draft-Ansatz aus den Annahmen-Phasen.
- a11y-Grundmuster aus den Annahmen-Phasen.
- Testmuster aus den Annahmen-Phasen.
- Negativlisten-/Quality-Gate-Pattern aus den bisherigen Phasen.

## 10. Geplante Implementierungsphase 7.3.2
In **einer** gebündelten Implementierungsphase:
- Draft-Utilities für Evidenz
- minimale UI für Evidenz
- Add/Update/Remove
- a11y-Grundabsicherung
- Status-/Hilfetexte
- Tests
- Phasendoku
- README/ROADMAP-Update
- `npm test`
- `npm run build`

## 11. Geplante Reviewphase 7.3.3
Ein einziger Review mit Fokus auf:
- lokale Draft-Grenze
- Scope-Hygiene
- Tests
- a11y
- keine Stopplisten-Verstöße

## 12. Negativ-Liste
- keine Implementierung
- keine UI
- keine Utility
- keine Tests
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine neue Dependency
- keine globale State-Architektur
- keine komplexe Validierungsengine
- keine relationale Modellkaskade
- keine neue Entität außer der ausgewählten Konzept-Entität
- keine Utility-/UI-/a11y-/Status-Sonderphasen

## 13. Quality-Gate-Hinweis
Da dies eine reine Konzeptphase ist, muss kein Anwendungscode geändert werden.

README/ROADMAP bleiben konsistent; Änderungen daran sind minimal zu halten.

`npm test` und `npm run build` sind bei reinen Dokuänderungen optional; falls ausgeführt, werden Ergebnisse dokumentiert.
