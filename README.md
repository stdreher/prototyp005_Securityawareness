# Security Awareness School

Ein interaktiver Kurs zur Sicherheitsaufmerksamkeit für alle im Unternehmen — gebaut auf dem
[OpenCode School](https://opencode.school)-Modell.

Studierende schreiben sich mit einem Klick kostenlos ein, bekommen eine persönliche Schüler-ID und
arbeiten den Kurs dann in ihrem eigenen KI-Agenten durch (OpenCode, Claude Code, Codex, Gemini CLI
oder ein anderer Agent, der URLs abrufen und sich unterhalten kann). Der Agent passt Ton, Beispiele
und Schwierigkeitsgrad an das Profil an, das im Einstiegs-Interview entsteht.

## Inhalt

Sechs Lektionen und zwei Übungen:

1. **Einstiegs-Interview** — der Agent lernt deinen Arbeitsalltag, deine Vorerfahrung und deinen
   Humor kennen
2. **Warum du das Ziel bist** — wie Angreifer Menschen auswählen und warum „mir passiert das nicht“
   der gefährlichste Satz ist
3. **Phishing erkennen** — Aufbau einer Betrugsmail, typische Signale, neue Varianten mit KI, QR-Codes
   und Stimmenimitation
4. **Zugänge schützen** — Passwörter, Passwort-Manager, MFA, Passkeys, Umgang mit Wechseln
5. **Sicher arbeiten** — Geräte, Netze, Schatten-IT, Backups, Reisen und Großraumbüro
6. **Melden statt schweigen** — was ein Vorfall ist, wie du ihn meldest, warum schnelles Melden hilft

Übungen:

- **Sicherheits-Check** — den eigenen Arbeitsplatz mit einer Checkliste durchgehen
- **Mini-Kampagne** — eine kurze Awareness-Botschaft fürs eigene Team entwerfen

Jede Lektion folgt dem Muster erklären, dann abfragen. Der Agent markiert die Lektion erst als
abgeschlossen, wenn die Kriterien in `agentInstructions` erfüllt sind. Der Fortschritt landet in
Echtzeit auf der Website.

## Wie es funktioniert

1. Website im Browser öffnen, Kursübersicht lesen, einschreiben.
2. Die Schüler-ID kopieren und den Prompt in den eigenen KI-Agenten einfügen.
3. Interview beantworten — daraus entsteht das Lernprofil.
4. Lektionen im Gespräch durcharbeiten. Die Häkchen auf der Website aktualisieren sich automatisch.
5. Übungen als Projekte im echten Arbeitsalltag umsetzen.

## Stack

- [Astro](https://astro.build) (v6, SSR) mit MDX für die Lektionsinhalte
- [Cloudflare Workers](https://workers.cloudflare.com) als Hosting
- [Cloudflare KV](https://developers.cloudflare.com/kv/) für den Fortschritt (Binding: `PROGRESS`)
- [Tailwind CSS](https://tailwindcss.com) (v4) für das Styling
- [Biome](https://biomejs.dev) für Linting und Formatierung
- [Vitest](https://vitest.dev) für Tests

## Lokale Entwicklung

Voraussetzungen: Node.js 20 oder neuer, npm.

```powershell
npm install
npm run dev
```

Der Dev-Server läuft standardmäßig auf `http://localhost:4321`.

Weitere Befehle:

```powershell
npm run build      # Produktions-Build nach dist/
npm run preview    # Build lokal ansehen
npx biome check .  # Lint + Formatprüfung
npx vitest run     # Tests
```

Unter Windows kannst du die Bash-Skripte in `script/` auch direkt mit den `npx`-Befehlen oben
ersetzen.

### Hinweis zu Installationsskripten

Falls `npm install` die Skripte von `esbuild`, `sharp` oder `workerd` blockiert, einmalig freigeben:

```powershell
npm install-scripts approve
```

## Cloudflare KV einrichten

Der Fortschritt liegt in einem KV-Namespace mit dem Binding `PROGRESS`.

```powershell
npx wrangler kv namespace create PROGRESS
```

Die ausgegebene `id` in `wrangler.jsonc` eintragen — dort steht aktuell noch der Platzhalter `TODO`.
Ohne echte ID schlägt der Deploy fehl, lokal und im Testbetrieb läuft die Seite trotzdem.

## Deployen

```powershell
npm run build
npx wrangler deploy
```

Das GitHub-Workflow in `.github/workflows/deploy.yml` ist vorbereitet, aber standardmäßig
abgeschaltet (`if: false`). Zum Aktivieren diese Zeile entfernen und im Repository die Secrets
`CLOUDFLARE_API_TOKEN` und `CLOUDFLARE_ACCOUNT_ID` setzen. Danach deployt jeder Push auf `main`.

## Inhalte anpassen

Alles Schulspezifische steckt in `school.config.ts`:

- `name`, `description`
- Wortlisten für die Schüler-IDs (`adjectives`, `nouns`)
- Farbauswahl (`colors`)
- Interview-Fragen und Anpassungshinweise für den Agenten (`profileFields`)

Lektionen liegen in `src/content/lessons/`, Übungen in `src/content/exercises/`. Das Frontmatter wird
in `src/content.config.ts` per Zod validiert. Wichtige Felder:

- `title`, `slug`, `description`, `order` — Standard-Metadaten
- `quiz` — hängt die gemeinsamen Quiz-Anweisungen an `agentInstructions` an
- `agentOnly` — Lektion lässt sich nur vom Agenten abschließen (für das Interview)
- `agentInstructions` — was „fertig“ bedeutet und wie es geprüft wird

Für Quiz-Lektionen listet `agentInstructions` genau vier Themen auf; die Quiz-Mechanik ergänzt die
API automatisch aus `src/lib/quiz-instructions.ts`. Verwende für `agentInstructions` immer
YAML-Block-Skalare (`|`), niemals zitierte Strings.

## Öffentliche Endpunkte

- `GET /llms.txt` — Übersicht für KI-Agenten inklusive API-Anleitung und Profilhinweisen
- `GET /api/openapi.json` — OpenAPI-3.1-Spezifikation
- `POST /api/enroll` — Einschreiben, liefert die Schüler-ID
- `GET`/`PUT`/`DELETE /api/progress/{studentId}` — Fortschritt lesen, ändern, zurücksetzen
- `GET`/`PUT /api/profile/{studentId}` — Lernprofil
- `GET /api/lessons`, `GET /api/lessons/{slug}` — Lektionen
- `GET /api/exercises`, `GET /api/exercises/{slug}` — Übungen

## Danksagung

Aufgebaut auf dem [school-template](https://github.com/opencodeschool/school-template) und der
Architektur von [OpenCode School](https://opencode.school). Inhaltlich inspiriert von
„Security Awareness mit Humor und Personenbezug“ (security-insider.de) sowie Materialien des BSI
und der Allianz für Cyber-Sicherheit.
