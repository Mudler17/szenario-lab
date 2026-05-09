# szenario-lab

## Zweck
szenario-lab dient dazu, Organisationsszenarien strukturiert zu modellieren.

## Aktueller Status
Phase 4.2 · Szenario-Name im lokalen Draft bearbeitbar (mit Preview + Reset)

## Lokale Befehle
```bash
npm install
npm run dev
npm run build
```

## Hinweis
Die App erlaubt derzeit die Bearbeitung eines einzelnen Szenario-Grundfelds im lokalen Draft: den Szenario-Namen.
Die Vorschau reagiert direkt auf diese Änderung. Über Reset wird der Originalwert wiederhergestellt.
Wichtig: Keine Speicherung, kein LocalStorage, keine Simulation, keine OpenAI-Anbindung und keine weiteren aktiven Formularbereiche.


## Dokumentation
- Architektur: `docs/ARCHITECTURE.md`
- Domänenmodell: `docs/DOMAIN_MODEL.md`
