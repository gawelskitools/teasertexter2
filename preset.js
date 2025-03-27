const presetsByArt = {
  "#newsclip": {
    hinweise: "Fakten priorisieren. Kurze, prägnante Überschrift mit Nachrichtenwert. Kurzbeschreibung sachlich, ggf. mit Ort oder Institution. Keywords aus zentralen Begriffen in einer Liste mit Komma getrennt ausgeben.",
    stil: "sachlich, kompakt",
    fokus: "Fakten, Zahlen, Ort",
    tiefe: "niedrig bis mittel",
    grammatik: "Hauptsätze, Aktiv",
    tonalitaet: "neutral, nachrichtlich",
    zielgruppe: "Allgemeinpublikum",
    visuell: "mittel"
  },
  "#bt": {
    hinweise: "Keine Kommentierung oder Bewertung hinzufügen. Keywords aus sichtbarem Geschehen und O-Tönen ableiten, in einer Liste mit Komma getrennt ausgeben. Teaser neutral und beschreibend halten.",
    stil: "beschreibend, sachlich",
    fokus: "sichtbares Geschehen",
    tiefe: "niedrig",
    grammatik: "beschreibende Sätze",
    tonalitaet: "objektiv",
    zielgruppe: "visuell orientiertes Publikum",
    visuell: "hoch"
  },
  "#standup": {
    hinweise: "Ort und Rolle des Reporters benennen. Kontextuelle Einordnung durch den Reporter hervorheben. Keywords mit Fokus auf Ort, Lage, Zitat in einer Liste mit Komma getrennt ausgeben.",
    stil: "kommentierend-neutral",
    fokus: "Ort, Reporter",
    tiefe: "mittel",
    grammatik: "direkte Rede erlaubt",
    tonalitaet: "situativ",
    zielgruppe: "Live-orientiertes Publikum",
    visuell: "hoch"
  },
  "#interview": {
    hinweise: "Zitat oder Position der Person im Fokus. Kurzbeschreibung betont Aussagekraft. Keywords aus Funktion der Person in einer Liste mit Komma getrennt ausgeben, Thema des Interviews.",
    stil: "zitierend, präzise",
    fokus: "Person/Zitat",
    tiefe: "mittel bis hoch",
    grammatik: "Konjunktiv erlaubt",
    tonalitaet: "respektvoll",
    zielgruppe: "fachlich interessiertes Publikum",
    visuell: "mittel"
  },
  "#thema": {
    hinweise: "Zusammenhänge verdeutlichen, Ursachen & Folgen benennen. Kurzbeschreibung analytisch. Keywords mit semantischer Tiefe in einer Liste mit Komma getrennt ausgeben.",
    stil: "erklärend, analytisch",
    fokus: "Ursache/Wirkung",
    tiefe: "hoch",
    grammatik: "zusammengesetzt",
    tonalitaet: "rational",
    zielgruppe: "interessierte Öffentlichkeit",
    visuell: "mittel"
  },
  "#reportage": {
    hinweise: "Erzählerisch-emotionaler Fokus. Ton und Sprache dürfen lebendiger sein. Keywords betonen Mensch und Szene in einer Liste mit Komma getrennt ausgeben. Einleitung darf szenisch sein.",
    stil: "szenisch, erzählend",
    fokus: "Alltag, Szenen",
    tiefe: "hoch",
    grammatik: "erzählerisch",
    tonalitaet: "emotional",
    zielgruppe: "kulturinteressierte Zuschauer",
    visuell: "hoch"
  },
  "#portraet": {
    hinweise: "Biografischer Stil. Fokus auf die gezeigte Person. Kurzbeschreibung personalisiert. Keywords betonen Geschichte, Rolle, soziale Einbindung in einer Liste mit Komma getrennt ausgeben.",
    stil: "biografisch, empathisch",
    fokus: "Person",
    tiefe: "hoch",
    grammatik: "personalisiert",
    tonalitaet: "würdigend",
    zielgruppe: "breites Publikum",
    visuell: "mittel"
  },
  "#erklaerung": {
    hinweise: "Faktenbasierte, erklärende Sprache. Keywords aus Zahlen, Konzepten, visuellen Elementen in einer Liste mit Komma getrennt ausgeben. Kurzbeschreibung darf visuelle Hilfe betonen.",
    stil: "instruktiv, sachlich",
    fokus: "Zahlen, Abläufe",
    tiefe: "mittel bis hoch",
    grammatik: "klar, aktiv",
    tonalitaet: "informativ",
    zielgruppe: "Informationssuchende",
    visuell: "hoch"
  },
  "#investigativ": {
    hinweise: "Fakten mit Quellen sichern. Teaser mit Hinweis auf Enthüllung. Keywords betonen Akteure, Methode, Missstand in einer Liste mit Komma getrennt ausgeben.",
    stil: "investigativ",
    fokus: "Recherche, Missstand",
    tiefe: "sehr hoch",
    grammatik: "rechtlich präzise",
    tonalitaet: "kritisch",
    zielgruppe: "aufgeklärte Öffentlichkeit",
    visuell: "mittel"
  },
  "#live": {
    hinweise: "Keine Bearbeitung außer Beschreibung. Teaser mit Live-Charakter. Keywords beschreiben das Geschehen in einer Liste mit Komma getrennt ausgeben.",
    stil: "live-begleitend",
    fokus: "aktuelles Geschehen",
    tiefe: "niedrig",
    grammatik: "kurz, Echtzeitstil",
    tonalitaet: "direkt",
    zielgruppe: "Echtzeit-Zuschauer",
    visuell: "hoch"
  },
  "#social": {
    hinweise: "Sehr kurze, mobiloptimierte Teaser. Keywords auf virale Begriffe und Hashtags optimieren und in einer Liste mit Komma getrennt ausgeben. Emotionen, Zuspitzung erlaubt.",
    stil: "aktiv, schnell",
    fokus: "Pointe, Reiz",
    tiefe: "niedrig",
    grammatik: "einfach, zugespitzt",
    tonalitaet: "laut",
    zielgruppe: "jüngeres Publikum",
    visuell: "hoch"
  },
  "#kontext": {
    hinweise: "Keine spekulativen Aussagen. Nur ableitbare Informationen ausliefern. Keywords neutral und übergeordnet in einer Liste mit Komma getrennt ausgeben.",
    stil: "nüchtern, strukturiert",
    fokus: "Kontext",
    tiefe: "mittel",
    grammatik: "Konjunktiv erlaubt",
    tonalitaet: "neutral",
    zielgruppe: "analytisches Publikum",
    visuell: "niedrig"
  }
};
