import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";

const publicRoot = resolve("public");
const sourceExtensions = new Set([".html", ".js"]);
const ignoredPrefixes = ["#", "data:", "http://", "https://", "mailto:", "tel:"];
const referencePatterns = [
  /(?:href|src)=["']([^"']+)["']/g,
  /window\.location\.href\s*=\s*["']([^"']+)["']/g,
  /content=["'][^"']*?url=([^;"']+)["']/g,
];

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve(directory, entry.name);
      return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
    }),
  );

  return files.flat();
}

function isLocalReference(reference) {
  return !ignoredPrefixes.some((prefix) => reference.startsWith(prefix));
}

function resolveReference(sourceFile, reference) {
  const cleanReference = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  return cleanReference.startsWith("/")
    ? resolve(publicRoot, `.${cleanReference}`)
    : resolve(dirname(sourceFile), cleanReference);
}

async function targetExists(target) {
  try {
    const targetStat = await stat(target);
    if (targetStat.isDirectory()) {
      await stat(resolve(target, "index.html"));
    }
    return true;
  } catch {
    return false;
  }
}

const sourceFiles = (await listFiles(publicRoot)).filter((file) =>
  sourceExtensions.has(extname(file)),
);
const missingReferences = [];

for (const sourceFile of sourceFiles) {
  const content = await readFile(sourceFile, "utf8");

  for (const pattern of referencePatterns) {
    for (const match of content.matchAll(pattern)) {
      const reference = match[1].trim();
      if (!reference || !isLocalReference(reference)) {
        continue;
      }

      const target = resolveReference(sourceFile, reference);
      if (!(await targetExists(target))) {
        missingReferences.push({ sourceFile, reference });
      }
    }
  }
}

if (missingReferences.length > 0) {
  console.error("Referências locais inexistentes:");
  for (const { sourceFile, reference } of missingReferences) {
    console.error(`- ${sourceFile}: ${reference}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Referências locais válidas em ${sourceFiles.length} arquivos.`);
}
