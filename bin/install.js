#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'sidekick';
const SKILL_FILE = path.join(__dirname, '..', 'skills', `${SKILL_NAME}.skill`);

const args = process.argv.slice(2);
const isProject = args.includes('--project') || args.includes('-p');

console.log(`\nsidekick installer\n`);

if (!fs.existsSync(SKILL_FILE)) {
  console.error('Skill file not found in package. Try reinstalling.');
  process.exit(1);
}

// Claude Code reads ~/.agents/skills/, Claude.ai reads ~/.claude/skills/.
// Install to both so it works wherever you are.
const targets = isProject
  ? [
      path.join(process.cwd(), '.agents', 'skills'),
      path.join(process.cwd(), '.claude', 'skills'),
    ]
  : [
      path.join(os.homedir(), '.agents', 'skills'),
      path.join(os.homedir(), '.claude', 'skills'),
    ];

let anySuccess = false;

for (const targetDir of targets) {
  const targetFile = path.join(targetDir, `${SKILL_NAME}.skill`);
  try {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(SKILL_FILE, targetFile);
    console.log(`installed: ${targetFile}`);
    anySuccess = true;
  } catch (err) {
    if (err.code === 'EEXIST' || err.message.includes('identical')) {
      console.log(`already in place: ${targetFile}`);
      anySuccess = true;
    } else {
      console.warn(`could not install to ${targetDir}: ${err.message}`);
    }
  }
}

if (!anySuccess) {
  console.error('Installation failed. Check folder permissions.');
  process.exit(1);
}

if (isProject) {
  console.log(`\nTip: commit .agents/skills/ and .claude/skills/ to share with your team.`);
}

console.log(`\nHow to use:`);
console.log(`   Say "/sidekick" plus what you need to learn, and by when`);
console.log(`   Or "quiz me on X", "spar with me", "what reviews are due?"`);
console.log(`   Records live in ~/.claude/sidekick/, one file per topic`);
console.log(`\nAlso installable as a Claude Code plugin:`);
console.log(`  /plugin marketplace add jainulabudeenm/sidekick`);
console.log(`  /plugin install sidekick`);

console.log(`\nTo update later: npx @jainulabudeenm/sidekick@latest\n`);
