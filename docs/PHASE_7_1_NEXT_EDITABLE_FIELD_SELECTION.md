# Phase 7.1 · Nächstes editierbares Szenariofeld konzeptionell auswählen

## 1. Ausgangslage nach Phase 7.0

- Phase 6.12 ist abgeschlossen: Die lokale JSON-Import-/Export-Kette wurde fachlich geprüft.
- Phase 7.0 ist abgeschlossen: Die nächste Hauptentwicklungsrichtung wurde auf „Szenario-Modell fachlich weiter editierbar machen“ festgelegt.
- Der lokale Draft erlaubt aktuell ausschließlich die Bearbeitung der drei Grundfelder:
  - `name`
  - `description`
  - `goal`
- Für Phase 7.1 wird **keine Implementierung** durchgeführt, sondern eine rein fachliche Auswahlentscheidung vorbereitet.

## 2. Ziel von Phase 7.1

Ziel ist die begründete Auswahl, **welcher Szenario-Bereich als nächstes editierbar werden soll**, ohne bereits UI, Draft-State, Validierung, Persistenz oder JSON-Schema technisch zu erweitern.

## 3. Kandidatenliste

Zur Auswahl stehen diese Bereiche:

1. Annahmen
2. Evidenz
3. Personas
4. Ressourcen
5. Beziehungen
6. Interventionen
7. Phasen

## 4. Bewertungstabelle

Bewertungsskala:
- Nutzen/Anschlussfähigkeit/Testbarkeit/JSON-Rundlauf/Simulationsnutzen: **hoch / mittel / niedrig**
- Komplexität/Risiko Übersteuerung: **niedrig / mittel / hoch**
- Empfehlung: **jetzt / später / zurückstellen**

| Kandidat | Fachlicher Nutzen | Anschlussfähigkeit an Name/Beschreibung/Ziel | Komplexität Umsetzung | Risiko Übersteuerung | Testbarkeit | JSON-Rundlauf | Nutzen für spätere Simulation | Empfehlung |
|---|---|---|---|---|---|---|---|---|
| **Annahmen** | hoch | hoch | niedrig–mittel | niedrig | hoch | hoch | hoch | **jetzt** |
| **Evidenz** | hoch | mittel | mittel | mittel | mittel | mittel–hoch | hoch | später |
| **Personas** | hoch | mittel | mittel–hoch | mittel | mittel | mittel | hoch | später |
| **Ressourcen** | mittel | mittel | mittel | mittel | mittel | mittel | mittel | später |
| **Beziehungen** | hoch | niedrig | hoch | hoch | niedrig–mittel | mittel | hoch | zurückstellen |
| **Interventionen** | hoch | niedrig–mittel | hoch | hoch | mittel | mittel | hoch | zurückstellen |
| **Phasen** | mittel–hoch | mittel | mittel–hoch | mittel–hoch | mittel | mittel | hoch | später |

## 5. Entscheidung

**Für Phase 7.2 wird „Annahmen“ als erster zusätzlicher editierbarer Bereich ausgewählt.**

Arbeitstitel für die nächste Phase:

**Phase 7.2 · Annahmen als ersten zusätzlichen editierbaren Bereich konzeptionell vorbereiten**

## 6. Begründung

1. **Fachlich zentral und früh wirksam**  
   Annahmen bilden den Kern vieler Szenario-Aussagen („Wir gehen davon aus, dass …“). Ohne explizite Annahmen bleiben Ziel und Beschreibung oft zu unscharf für belastbare Weiterarbeit.

2. **Sehr gute Anschlussfähigkeit an den aktuellen Draft**  
   Von den bestehenden Grundfeldern aus (Name/Beschreibung/Ziel) ist der Übergang zu Annahmen natürlich: Aus Ziel und Beschreibung lassen sich Annahmen direkt ableiten und schrittweise ergänzen.

3. **Beherrschbare Komplexität als nächster Schritt**  
   Annahmen können als geordnete oder ungeordnete Liste eingeführt werden, ohne sofort relationale Verknüpfungen (wie bei Beziehungen) erzwingen zu müssen.

4. **Geringeres Risiko vorzeitiger Kaskaden**  
   Im Vergleich zu Beziehungen, Interventionen oder Phasen erzeugen Annahmen zunächst weniger Abhängigkeiten zu weiteren Strukturen.

5. **Gute Testbarkeit mit vorhandenen Mustern**  
   Der bestehende Utility-/Draft-Teststil lässt sich auf listenartige Annahmen schrittweise übertragen (z. B. Hinzufügen, Entfernen, minimale Validierung, Reset, Import-/Export-Rundlauf).

6. **Sauberer JSON-Rundlauf erwartbar**  
   Als klar abgrenzbare Liste ist der Bereich gut serialisierbar und gut aus Importdaten in den Draft rückführbar, ohne früh komplexe Auflösungslogik zu benötigen.

7. **Hoher Simulationsnutzen als Fundament**  
   Spätere Simulationen profitieren stark von expliziten Annahmen, da diese als prüfbare Ausgangshypothesen dienen können.

### Gegenprüfung der Alternativen

- **Evidenz:** fachlich sehr wichtig, aber methodisch oft auf Annahmen bezogen (Beleglage *zu* Annahmen). Daher sinnvoll nachgelagert.
- **Personas:** hoher Wert, jedoch mehr Struktur- und Konsistenzfragen (Attribute, Identitäten, spätere Referenzen).
- **Ressourcen:** nützlich, aber ohne klar formulierte Annahmen und Akteurskontext häufig noch zu unspezifisch.
- **Beziehungen:** stark wertstiftend, aber von Personas abhängig; als erster Ausbau zu komplex.
- **Interventionen:** strategisch zentral, aber fachlich besser nach stabilerer Ausgangslage (inkl. Annahmen).
- **Phasen:** wichtig für zeitliche Struktur, aber robuster, wenn mehr inhaltliche Bausteine bereits editierbar sind.

## 7. Konsequenz für Phase 7.2

Phase 7.2 fokussiert **konzeptionell** auf den Bereich Annahmen:

- fachliche Zieldefinition des Annahmen-Bereichs,
- minimaler konzeptioneller Zuschnitt (z. B. listenorientiert),
- Abgrenzung gegenüber Evidenz/Personas/Interventionen,
- Vorbereitung einer späteren, schrittweisen Implementierungsreihenfolge.

Weiterhin gilt für Phase 7.2 zunächst: noch keine technische Umsetzung.

## 8. Grenzen von Phase 7.1

Diese Phase enthält bewusst **keine** Implementierung:

- keine neuen Formularfelder
- keine Änderung an `HomePage.jsx`
- keine Änderung an `ScenarioDraftForm`
- keine Änderung an `ScenarioPreview`
- keine Draft-State-Änderung
- keine JSON-Schema-Änderung
- keine Speicherung
- kein LocalStorage
- keine Simulation
- keine OpenAI-Anbindung
- keine Server-Anbindung
- keine neuen Fachmodule

### Optionales Quality Gate

Da Phase 7.1 ausschließlich Dokumentation betrifft, sind `npm test` und `npm run build` optional und wurden in dieser Phase nicht als Pflichtkriterium angesetzt.
