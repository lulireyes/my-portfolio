#!/usr/bin/env node
/**
 * Fail the build if Helpling (or any required Work card) is missing from dist.
 * Prevents shipping a homepage with 3 cards or a 404 at /projects/helpling/.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const indexPath = path.join(dist, 'index.html');
const requiredPages = ['helpling', 'anymove', 'beelinguapp', 'yoona'];

function fail(message) {
  console.error(`verify-dist: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  fail(`missing ${indexPath}`);
}

const indexHtml = fs.readFileSync(indexPath, 'utf8');
const workSection = indexHtml.match(/id="work"[\s\S]*?<\/section>/)?.[0] ?? '';
const titles = [...workSection.matchAll(/class="work-title">([^<]+)/g)].map((m) => m[1]);

const expected = ['Helpling', 'AnyMove', 'Beelinguapp', 'Yoona.ai'];
if (titles.length !== expected.length || expected.some((t, i) => titles[i] !== t)) {
  fail(`Work cards mismatch. Expected ${JSON.stringify(expected)}, got ${JSON.stringify(titles)}`);
}

if (!workSection.includes('projects/helpling/')) {
  fail('Helpling Work card href missing projects/helpling/');
}

if (!workSection.includes('View case studies')) {
  fail('Helpling CTA "View case studies" missing from Work section');
}

for (const id of requiredPages) {
  const page = path.join(dist, 'projects', id, 'index.html');
  if (!fs.existsSync(page)) {
    fail(`missing case study page ${page} (would 404 on GitHub Pages)`);
  }
}

const journeyOk = indexHtml.includes('projects/helpling/') && /journey[\s\S]*Helpling/i.test(indexHtml);
if (!journeyOk) {
  fail('Journey section missing Helpling case study link');
}

console.log('verify-dist: OK — 4 Work cards (Helpling first) + all case study pages present');
