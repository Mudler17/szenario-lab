const UMLAUT_REPLACEMENTS = {
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
  Ä: 'ae',
  Ö: 'oe',
  Ü: 'ue',
  ß: 'ss',
};

function normalizeScenarioName(name) {
  return name.replace(/[äöüÄÖÜß]/g, (character) => UMLAUT_REPLACEMENTS[character] ?? character);
}

function createSlugFromName(name) {
  if (typeof name !== 'string') {
    return 'export';
  }

  const slug = normalizeScenarioName(name)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return slug || 'export';
}

function createExportDate(exportedAt) {
  return new Date(exportedAt ?? new Date().toISOString()).toISOString().slice(0, 10);
}

export function createScenarioExportFilename(scenarioDraft, options = {}) {
  const slug = createSlugFromName(scenarioDraft?.name);
  const exportDate = createExportDate(options.exportedAt);

  return `szenario-lab-${slug}-${exportDate}.json`;
}
