# S0 · Serverseitiger Passwortschutz für Coolify

## Ziel

Die ausgelieferte Anwendung soll serverseitig per HTTP Basic Auth geschützt sein, damit der Zugriff auf `szenario-lab.ki-kernel.de` nur mit gültigen Runtime-Zugangsdaten möglich ist.

## Funktionsweise

- `server.js` startet einen Express-Server für Production.
- Der Server liest ausschließlich Runtime-Variablen:
  - `BASIC_AUTH_USER`
  - `BASIC_AUTH_PASSWORD`
  - `PORT`
- Alle Requests werden durch Basic Auth geschützt.
- Nach erfolgreicher Authentifizierung wird die gebaute App aus `dist/` ausgeliefert.
- Für SPA-Routen wird ein Fallback auf `dist/index.html` verwendet.
- Fail-closed in Production: Fehlen Credentials bei `NODE_ENV=production`, liefert der Server `503` mit `Server authentication is not configured.`

## Coolify-Konfiguration

In Coolify als Runtime Environment Variables setzen:

- `BASIC_AUTH_USER`
- `BASIC_AUTH_PASSWORD`

Hinweise:

- Werte nicht im Repository ablegen.
- Nach jeder Änderung der Variablen ist ein Redeploy erforderlich.

## Sicherheitsgrenzen

- Schutz gilt auf HTTP-Ebene vor Auslieferung der React-App.
- Keine Passwortwerte im Frontend (`src/`) und keine `VITE_`-Passwortvariablen.
- Keine Browser-Speicherung von Passwörtern.

## Testschritte

1. Build erstellen: `npm run build`
2. Tests ausführen: `npm test`
3. Production-Start lokal prüfen:
   - mit Credentials: `BASIC_AUTH_USER=test BASIC_AUTH_PASSWORD=test NODE_ENV=production node server.js`
   - ohne Credentials (fail-closed): `NODE_ENV=production node server.js`

## Negativ-Liste

- Keine Login-Seite in React.
- Keine Passwortabfrage im Frontend.
- Keine Hardcoded-Credentials.
- Keine Nutzerverwaltung/Rollen/Rechte.
- Keine Cloudflare-Access-Integration.
