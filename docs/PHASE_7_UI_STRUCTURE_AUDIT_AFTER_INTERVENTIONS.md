# UI-Struktur-Audit · Bearbeitungsbereich nach Interventionen prüfen

## 1. Ziel des Audits
Prüfung, ob der aktuelle lineare Bearbeitungsbereich nach dem Ausbau um Interventionen weiterhin tragfähig ist oder ob vor weiteren Entitäten eine UI-Struktur-Konsolidierung konzeptionell vorbereitet werden sollte.

## 2. Geprüfte Dateien
- `src/pages/HomePage.jsx`
- `src/styles/global.css`
- `src/features/scenarios/editing/components/ScenarioDraftForm.jsx`
- `src/features/scenarios/editing/components/AssumptionDraftForm.jsx`
- `src/features/scenarios/editing/components/PersonaDraftForm.jsx`
- `src/features/scenarios/editing/components/ResourceDraftForm.jsx`
- `src/features/scenarios/editing/components/PhaseDraftForm.jsx`
- `src/features/scenarios/editing/components/RelationshipDraftForm.jsx`
- `src/features/scenarios/editing/components/InterventionDraftForm.jsx`
- `src/features/scenarios/editing/components/EvidenceDraftForm.jsx`
- `docs/PHASE_7_9_3_REVIEW_INTERVENTIONS_IMPLEMENTATION.md`
- `README.md`
- `ROADMAP.md`

## 3. Aktueller UI-Aufbau
- `HomePage.jsx` enthält einen zweigeteilten Workspace aus Bearbeitung und Vorschau.
- Der Bearbeitungsbereich ist aktuell linear.
- Der Bearbeitungsbereich enthält:
  - Grunddaten
  - Annahmen
  - Personas
  - Ressourcen
  - Phasen
  - Beziehungen
  - Interventionen
  - Evidenz
  - Reset
  - JSON-Download
  - JSON-Import-Prüfung
- Vorschau bleibt daneben bzw. darunter je nach Viewport.
- Export und Import liegen innerhalb des Bearbeitungsbereichs.

## 4. Bewertung: Was funktioniert noch?
- Der lineare Aufbau ist einfach und technisch robust.
- Keine versteckte Navigation.
- Alle Abschnitte sind direkt im DOM sichtbar.
- Keine zusätzliche State-Architektur.
- Keine Routing-Komplexität.
- Gute Nachvollziehbarkeit für Tests und Reviews.
- Lokale Draft-Grenze bleibt sichtbar.
- Export/Import bleiben in der Nähe des Drafts.

## 5. Bewertung: Was wird kritisch?
- Der Bearbeitungsbereich wird sehr lang.
- Nutzer müssen viel scrollen.
- Die Reihenfolge ist fachlich nicht mehr selbsterklärend.
- Export/Import liegen nach vielen Formularabschnitten weit unten.
- Einzelne Entitäten konkurrieren visuell gleich stark.
- Bei weiteren Entitäten steigt das Risiko von Unübersichtlichkeit.
- Die Vorschau kann in der Wahrnehmung vom Bearbeitungsbereich entkoppelt werden.
- Wiederholte lokale Draft-Hinweise können redundant wirken.
- Ein späterer Ausbau um Strategien, Reports oder weitere Entitäten würde die lineare Seite weiter überladen.

## 6. UX-/a11y-Prüfung
- Abschnitte sind semantisch gut erkennbar, da die Entitätsformulare als `section` mit Überschrift aufgebaut sind.
- Überschriftenstruktur ist vorhanden (`h2` auf Workspace-Ebene, `h3` je Abschnitt, `h4` je Listenelement).
- Lineare Tastaturnavigation ist noch funktional, wird mit wachsender Abschnittszahl aber zunehmend lang.
- Orientierung kann bei langen Scrollstrecken sinken, besonders zwischen frühen Formularblöcken und späteren Werkzeugblöcken.
- Export/Import sind textlich klar als lokaler Download bzw. lokale Prüfung abgegrenzt, liegen aber räumlich weit unten.
- Eine Abschnittsnavigation kann Orientierung und schnellere Sprünge verbessern, ohne Interaktionslogik zu verkomplizieren.
- Native `details`/`summary` können vertikale Länge reduzieren, sollten aber mit klaren offenen Standardzuständen und verständlichen Überschriften geplant werden.
- Tabs sind möglich, erzeugen jedoch zusätzliche Fokus-, Tastatur- und Zustandslogik und erhöhen damit a11y-/Testaufwand.

## 7. Mögliche nächste UI-Strukturoptionen

### Option A: Linearen Aufbau beibehalten
**Nutzen**
- Keine zusätzliche Implementierung.
- Bestehende Test- und Reviewpfade bleiben unverändert.
- Vollständige Sichtbarkeit aller Abschnitte bleibt erhalten.

**Risiko**
- Weitere Entitäten erhöhen Scroll- und Orientierungsaufwand.
- Wahrnehmung als „lange Formularwand“ nimmt zu.

**Warum jetzt / warum nicht jetzt**
- Kurzfristig tragfähig, solange keine weiteren Entitäten dazukommen.
- Nicht ideal vor nächstem fachlichem Ausbau.

**Auswirkungen auf Tests**
- Nahezu keine Änderungen nötig.

**Auswirkungen auf a11y**
- Einfaches lineares Muster bleibt, aber Belastung durch lange Tab-Reihenfolge steigt.

### Option B: Abschnittsnavigation / Inhaltsübersicht ergänzen
Beispiel:
- Sprunglinks zu Grunddaten, Annahmen, Personas, Ressourcen, Phasen, Beziehungen, Interventionen, Evidenz, Export, Import

**Nutzen**
- Schnellere Orientierung und Navigation.
- Geringe strukturelle Eingriffe in bestehende Formulare.

**Risiko**
- Zusätzliche Pflege von Ankern/IDs.
- Gefahr inkonsistenter Linktexte bei späteren Umbauten.

**Warum jetzt / warum nicht jetzt**
- Sinnvoll als erster kleiner Konsolidierungsschritt vor neuen Entitäten.
- Kann auch später ergänzt werden, verliert dann aber präventiven Effekt.

**Auswirkungen auf Tests**
- Ergänzende UI-Tests für Sprunglinks sinnvoll, bestehende Formularlogik kaum betroffen.

**Auswirkungen auf a11y**
- Bei sauberer Linkstruktur klar positiv (Landmark/Orientierung).

### Option C: Native Details/Summary-Abschnitte
Beispiel:
- Jede Entität als aufklappbarer Abschnitt mit sichtbarer Überschrift

**Nutzen**
- Reduziert sichtbare Länge.
- Native Interaktion ohne eigene komplexe Accordion-State-Architektur.

**Risiko**
- Inhalte sind nicht dauerhaft sichtbar; Kontext kann bei häufigem Auf-/Zuklappen leiden.
- Testfälle müssen offene/geschlossene Zustände berücksichtigen.

**Warum jetzt / warum nicht jetzt**
- Als mittlerer Schritt interessant, wenn Abschnittsnavigation allein nicht reicht.
- Sollte erst nach kleiner Konzeptprüfung erfolgen.

**Auswirkungen auf Tests**
- Zusätzliche Interaktionspfade (open/close) erforderlich.

**Auswirkungen auf a11y**
- Grundsätzlich gut, wenn native Elemente genutzt werden; Beschriftungen und Fokusreihenfolge müssen sauber geprüft werden.

**Hinweis**
- Keine eigene komplexe Accordion-State-Architektur bevorzugen.

### Option D: Tabs für Entitätsgruppen
Mögliche Gruppen:
- Basis
- Akteure & Mittel
- Verlauf & Beziehungen
- Handlung & Evidenz
- Import/Export

**Nutzen**
- Starke visuelle Verdichtung.
- Klare thematische Gruppierung möglich.

**Risiko**
- Zusätzliche State- und Fokuslogik.
- Höheres Risiko für a11y-Fehler und fragile Tests.
- Versteckte Inhalte können Entdeckbarkeit reduzieren.

**Warum jetzt / warum nicht jetzt**
- Eher späterer Schritt bei weiterem Wachstum.
- Für den nächsten Schnitt wahrscheinlich zu schwergewichtig.

**Auswirkungen auf Tests**
- Deutlich mehr UI-Zustands- und Fokusfälle.

**Auswirkungen auf a11y**
- Erfordert saubere Tab-Rollen-/Keyboard-Implementierung; fehleranfällig ohne dedizierte Umsetzung.

**Hinweis**
- Tabs können zusätzliche State- und Fokuslogik erzeugen.

### Option E: Export/Import in eigenen Werkzeugbereich auslagern
**Nutzen**
- Schärft Trennung zwischen Bearbeitung und Werkzeugfunktionen.
- Reduziert Missverständnisse zwischen Download und Speicherung.
- Kann Orientierung am Seitenende verbessern.

**Risiko**
- Räumliche Distanz zum Draft kann bei falscher Platzierung ebenfalls irritieren.
- Benennung und visuelle Abgrenzung müssen konsistent sein.

**Warum jetzt / warum nicht jetzt**
- Sinnvoll in Kombination mit Option B (Inhaltsübersicht + klarer Werkzeugblock).
- Als Einzelmaßnahme weniger wirksam als mit Strukturkonzept.

**Auswirkungen auf lokale Draft-Grenze**
- Draft-Bezug bleibt erhalten, wenn Werkzeugbereich weiterhin als „lokal, ohne Speicherung“ gekennzeichnet wird.

**Auswirkungen auf Missverständnisse zwischen Download und Speicherung**
- Klare Werkzeuggruppierung kann Missverständnisse weiter reduzieren.

## 8. Empfehlung
Klare Empfehlung: Vor weiteren fachlichen Entitäten eine kleine Konzeptphase zur UI-Struktur-Konsolidierung vorbereiten.

Empfohlener nächster Schnitt:
**Phase 7.10.1 · Bearbeitungsbereich-Struktur konzeptionell vorbereiten**

Empfohlenes Zielbild:
- Keine große UI-Reform.
- Keine Tabs als erster Schritt.
- Zuerst eine einfache, robuste Struktur prüfen:
  - Abschnittsnavigation / Inhaltsübersicht
  - klarere Gruppierung
  - ggf. native `details`/`summary` nur konzeptionell prüfen
  - Export/Import als eigener Werkzeugblock sichtbar machen
- Keine neue globale State-Architektur.
- Keine Routing-Lösung.
- Keine Simulation.
- Keine neuen Fachentitäten.

## 9. Risiken bei Nicht-Handeln
- Weitere Entitäten machen den Editor unübersichtlich.
- Nutzer verlieren Orientierung.
- Tests bleiben zwar möglich, aber UI-Verständlichkeit sinkt.
- Import/Export können zu tief in der Seite liegen.
- Scope-Hinweise werden redundant statt klärend.
- Spätere UI-Korrektur wird teurer.

## 10. Negativ-Liste
- keine Codeänderung
- keine UI-Änderung
- keine CSS-Änderung
- keine Teständerung
- keine neue Komponente
- keine neue Navigation implementieren
- keine Accordions implementieren
- keine Tabs implementieren
- keine Routing-Lösung
- keine neue State-Architektur
- keine neue Entität
- keine neue Utility
- keine Speicherung
- kein LocalStorage
- kein Backend
- keine OpenAI-Anbindung
- keine Simulation
- kein Import-/Export-Ausbau
- keine README-Großsanierung
- keine ROADMAP-Neustrukturierung

## 11. Quality-Gate-Hinweis
Da reine Dokumentations-/Auditphase:
- `npm test` und `npm run build` sind optional.
- In dieser Phase wurden sie nicht ausgeführt, da keine Codeänderung vorgenommen wurde.
