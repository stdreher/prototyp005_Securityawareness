import type { SchoolConfig } from "./src/lib/school";

const config: SchoolConfig = {
	name: "Security Awareness School",
	description:
		"Ein kurzer Kurs für alle im Unternehmen: Wie Angreifer denken, wie du Betrugsversuche erkennst und was du im Ernstfall tust.",
	adjectives: [
		"wachsam",
		"aufmerksam",
		"kritisch",
		"umsichtig",
		"neugierig",
		"besonnen",
		"findig",
		"klug",
		"flink",
		"ruhig",
		"hellwach",
		"achtsam",
		"skeptisch",
		"gelassen",
	],
	nouns: [
		"blick",
		"detektiv",
		"radar",
		"kompass",
		"schild",
		"anker",
		"wache",
		"lotse",
		"funke",
		"licht",
		"tor",
		"wall",
		"spion",
		"archiv",
	],
	colors: [
		"red",
		"orange",
		"amber",
		"yellow",
		"lime",
		"green",
		"emerald",
		"teal",
		"cyan",
		"sky",
		"blue",
		"indigo",
		"violet",
		"purple",
		"fuchsia",
		"pink",
		"rose",
		"slate",
	],
	profileFields: {
		workContext: {
			question: "Wo verbringst du deinen Arbeitsalltag überwiegend?",
			type: "single",
			options: [
				{
					value: "office",
					label: "Büro und Verwaltung",
					description: "E-Mail, Termine, geteilte Laufwerke, Fachanwendungen",
				},
				{
					value: "tech",
					label: "IT, Entwicklung oder Technik",
					description:
						"Du arbeitest nah an Systemen, Code, Zugängen oder Infrastruktur",
				},
				{
					value: "mobile",
					label: "Vertrieb, Beratung oder Außendienst",
					description: "Viel unterwegs, oft mit Laptop und Smartphone",
				},
				{
					value: "leadership",
					label: "Führung oder Geschäftsführung",
					description: "Du entscheidest, genehmigst und bist Ansprechperson",
				},
			],
			adaptation: {
				office:
					"For office and admin contexts, use examples from invoices, HR documents, shared drives, calendar invites, and ticket attachments. Assume the student uses Outlook/Teams-style tools daily but does not administer systems.",
				tech: "For technical students, use examples like secrets in repositories, API keys, CI pipelines, admin consoles, and dependency updates. Do not over-explain basic IT concepts. Still keep the focus on behavior, not on building security infrastructure.",
				mobile:
					"For students who travel, emphasize hotel and airport networks, shoulder surfing, lost or stolen devices, USB chargers, working on the train, and verifying requests by calling a known number instead of replying.",
				leadership:
					"For leaders, use examples like CEO fraud, fake payment approvals, authority pressure, and the risk of a leader's account being impersonated. Emphasize that their own behavior sets the standard and that they should make reporting easy and blame-free for their team.",
			},
		},
		experience: {
			question: "Wie vertraut bist du schon mit IT-Sicherheit?",
			type: "single",
			options: [
				{
					value: "new",
					label: "Ich fange bei null an",
					description: "Fachbegriffe sagen mir wenig",
				},
				{
					value: "basics",
					label: "Ich kenne die Grundlagen",
					description: "Phishing und Passwörter sind mir ein Begriff",
				},
				{
					value: "trained",
					label: "Ich hatte schon Schulungen",
					description: "Ich weiß ungefähr, worum es geht",
				},
				{
					value: "professional",
					label: "Ich arbeite beruflich damit",
					description: "Sicherheit ist Teil meiner Aufgabe",
				},
			],
			adaptation: {
				new: "Assume no prior knowledge. Define every technical term the first time it appears (phishing, MFA, passkey, ransomware, social engineering). Use everyday analogies. Never say 'as you know'.",
				basics:
					"Assume the student knows what phishing and passwords are, but not how attacks actually work. Skip basic definitions and go straight to the concrete mechanism and what to do.",
				trained:
					"The student has heard the standard advice before. Avoid repeating generic slogans. Focus on why the advice exists, where it fails, and on newer variants such as AI-written phishing, QR codes, and voice cloning.",
				professional:
					"Be concise and technically precise. Discuss attacker tradecraft, detection signals, and process gaps rather than basic definitions. Treat the student as a peer; they may be evaluating the content.",
			},
		},
		incident: {
			question: "Hast du schon mal einen Sicherheitsvorfall erlebt?",
			type: "single",
			options: [
				{
					value: "self",
					label: "Ja, mir selbst ist etwas passiert",
					description:
						"Zum Beispiel eine Betrugsmail oder ein geklauter Zugang",
				},
				{
					value: "team",
					label: "Ja, in meinem Team oder Unternehmen",
					description: "Ich habe die Folgen mitbekommen",
				},
				{
					value: "no",
					label: "Nein, zum Glück nicht",
					description: "Bisher ist bei uns nichts passiert",
				},
				{
					value: "unsure",
					label: "Weiß ich nicht genau",
					description: "Vielleicht, aber ich bin nicht sicher",
				},
			],
			adaptation: {
				self: "The student has been affected personally. Never imply it was their fault and never use their experience as a punchline. Validate the reaction, then focus on what to do differently next time and on recovery steps. Keep the tone warm and practical.",
				team: "The student has seen an incident from the outside. Use organizational consequences (downtime, data loss, customers, reputation) as the frame. Ask what they remember about how it was handled, since that makes the reporting lesson concrete.",
				no: "The student has no incident experience. Avoid fear-mongering. Frame the lessons as skills they hope never to need, and stress that attacks are common and impersonal rather than a sign of stupidity. Do not tell them they are overdue for an incident.",
				unsure:
					"Start by explaining briefly what counts as a security incident (suspicious mail, lost device, strange login prompts, data sent to the wrong person). This helps the student place their own experience before the lesson continues.",
			},
		},
		learningMode: {
			question: "Wie nimmst du Inhalte am liebsten auf?",
			type: "single",
			options: [
				{
					value: "stories",
					label: "Geschichten und echte Fälle",
					description: "Erzähl mir, was tatsächlich passiert ist",
				},
				{
					value: "quiz",
					label: "Quiz und Rätsel",
					description: "Ich lerne durch Ausprobieren und Raten",
				},
				{
					value: "checklist",
					label: "Klare Checklisten",
					description: "Sag mir konkret, was ich tun soll",
				},
				{
					value: "dialogue",
					label: "Gespräch mit Nachfragen",
					description: "Ich denke gern laut und stelle Fragen",
				},
			],
			adaptation: {
				stories:
					"Teach through short, realistic scenarios with named characters and a concrete outcome. Tell the story first, then extract the rule. Ask the student what they would have done at the decisive moment.",
				quiz: "Turn each topic into a small guessing game or scenario question before explaining it. Let the student commit to an answer, then reveal and explain. Keep it playful, never exam-like.",
				checklist:
					"Lead with compact, numbered action lists. Keep explanations short and put the do-this-now step first. End each topic with a one-line rule the student can remember.",
				dialogue:
					"Teach in a back-and-forth style: present a claim or scenario, ask the student what they think, then respond to their reasoning. Encourage them to challenge the material.",
			},
		},
		humor: {
			question: "Wie viel Humor darf es sein?",
			type: "single",
			options: [
				{
					value: "lots",
					label: "Gern viel",
					description: "Ich lache gern über absurde Situationen",
				},
				{
					value: "some",
					label: "Etwas Auflockerung ist okay",
					description: "Nett, aber der Inhalt zählt",
				},
				{
					value: "none",
					label: "Lieber sachlich",
					description: "Ohne Witze, direkt auf den Punkt",
				},
			],
			adaptation: {
				lots: "Use exaggeration, absurd comparisons, and light self-deprecating humor about everyday work life. Humor must target the situation or the attacker, never the victim and never a real colleague. Never joke about a real incident the student experienced.",
				some: "Use an occasional light comparison or mildly funny example to break up the material, but keep the core message serious and short. One joke per topic at most.",
				none: "No jokes, no irony, no playful exaggeration. Use plain, respectful, factual language. Still keep sentences short and concrete rather than bureaucratic.",
			},
		},
	},
	support: {
		// TODO: Replace with the real issue tracker URL before deploying.
		issues: "https://github.com/your-org/security-awareness-school/issues",
	},
};

export default config;
