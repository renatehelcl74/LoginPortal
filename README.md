# MyApp

En web-applikasjon med autentisering, beskyttet medlemsseksjon og profilhåndtering.

## Funksjoner

- 🔐 Brukerautentisering (innlogging/registrering)
- 👤 Profilside med avatarer
- ⚙️ Kontoadministrasjon
- 🔒 Beskyttet medlemsseksjon

## Teknisk Stack

- Frontend: React med TypeScript
- Backend: Express.js
- Database: MySQL
- Styling: Tailwind CSS med shadcn/ui komponenter
- Autentisering: Passport.js
- State Management: TanStack Query

## Forutsetninger

- Node.js (versjon 20 eller nyere)
- npm (kommer med Node.js)
- MySQL (versjon 8 eller nyere)

## Miljøvariabler

Opprett en `.env` fil i prosjektets rotmappe med følgende variabler:

```env
# MySQL Database
MYSQL_HOST=localhost
MYSQL_USER=din_bruker
MYSQL_PASSWORD=ditt_passord
MYSQL_DATABASE=myapp_db

# Session
SESSION_SECRET=et_sikkert_passord
```

## Lokal Utvikling

1. Klon prosjektet
```bash
git clone [repository-url]
cd myapp
```

2. Installer avhengigheter
```bash
npm install
```

3. Sett opp databasen
```bash
# Logg inn på MySQL
mysql -u root -p

# Opprett database og bruker
CREATE DATABASE myapp_db;
CREATE USER 'din_bruker'@'localhost' IDENTIFIED BY 'ditt_passord';
GRANT ALL PRIVILEGES ON myapp_db.* TO 'din_bruker'@'localhost';
FLUSH PRIVILEGES;
```

4. Start utviklingsserver
```bash
npm run dev
```

Applikasjonen vil nå kjøre på http://localhost:5000

## Prosjektstruktur

```
├── client/             # Frontend React-applikasjon
│   ├── src/
│   │   ├── components/ # UI komponenter
│   │   ├── hooks/     # Custom React hooks
│   │   ├── lib/       # Hjelpefunksjoner
│   │   └── pages/     # Sidekomponenter
├── server/            # Backend Express-server
│   ├── auth.ts       # Autentiseringslogikk
│   ├── routes.ts     # API-endepunkter
│   └── storage.ts    # Datalagring
└── shared/           # Delt kode mellom frontend og backend
    └── schema.ts     # TypeScript-typer og Zod-skjemaer
```

## Feilsøking

Hvis du opplever problemer med tilkobling til serveren:
1. Sjekk at port 5000 ikke er i bruk av andre applikasjoner
2. Sørg for at alle avhengigheter er installert med `npm install`
3. Verifiser at MySQL-serveren kjører og er tilgjengelig
4. Sjekk at miljøvariablene i `.env` er korrekte
5. Se etter feilmeldinger i konsollet

## Utvikling

- Frontend-koden er i `client/src/`
- Backend API-er er i `server/routes.ts`
- Delte typer er i `shared/schema.ts`

## Lisens

MIT