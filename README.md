# szenario-lab

## Zweck
szenario-lab dient dazu, Organisationsszenarien strukturiert zu modellieren.

## Aktueller Status
Phase 4.5 · Formularstruktur für Szenario-Grunddaten verbessert (fieldset/legend, Hilfetexte, aria-describedby)

## Lokale Befehle
```bash
npm install
npm run dev
npm run build
```

## Hinweis
Die App erlaubt derzeit die Bearbeitung von drei bestehenden Szenario-Grundfeldern im lokalen Draft: Name, Beschreibung und Ziel.
Die Formularstruktur wurde in Phase 4.5 verbessert: Der Bereich ist als „Szenario-Grunddaten“ mit `fieldset` und `legend` strukturiert, alle drei Felder haben Hilfetexte und die Eingaben nutzen `aria-describedby`.
Es wurden keine neuen Felder ergänzt. Die Vorschau reagiert weiterhin direkt auf Änderungen, und über Reset werden die drei Originalwerte wiederhergestellt.
Wichtig: Keine Speicherung, kein LocalStorage, keine Simulation, keine OpenAI-Anbindung, keine weiteren aktiven Formularbereiche und keine neuen Module.


## Dokumentation
- Architektur: `docs/ARCHITECTURE.md`
- Domänenmodell: `docs/DOMAIN_MODEL.md`
