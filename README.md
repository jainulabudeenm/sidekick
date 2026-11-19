# Sidekick

A Claude skill that helps you learn by making you do the work. It asks before it explains, quizzes
you one question at a time, and keeps a record of what you know, what is shaky and what you keep
getting wrong.

Reading a good explanation feels like learning. Most of it is gone a week later. What sticks is
the stuff you had to recall, predict, explain or build yourself. Sidekick is built around that: you
are the one doing the reps, and it is the one handing them to you.

The idea comes from Nick Saraev's video
["How I Learn Complex Skills & Difficult Subjects So Fast with AI"](https://www.youtube.com/watch?v=FSXHk4hMrY8).
The roles below are his, restated in my own words.

## Install

In Claude Code, as a plugin:

```
/plugin marketplace add jainulabudeenm/sidekick
/plugin install sidekick
```

From npm, which also covers Claude.ai and anywhere outside Claude Code:

```
npx @jainulabudeenm/sidekick
```

Add `--project` to install into the current repo instead of your home directory.

## Use

```
> /sidekick I have to teach git to my team on Tuesday
> quiz me on SQL joins
> what do I actually know about Kubernetes?
> spar with me, play a tough design reviewer
> what reviews are due?
```

It asks what you need to be able to do and by when, then shows a short plan and waits for "go".

## The hats

Sidekick switches between a few roles, and says which one it is using and why each time it
switches.

| Hat | What it does |
|---|---|
| Interviewer | Pins down the goal, the deadline and how it will be tested in real life |
| Mapmaker | Splits the topic into parts and marks each one know, shaky or don't know |
| Explainer | Explains only the part you got stuck on, then makes you redo it with no help |
| Socratic questioner | Asks why and what if until you find the gap yourself |
| Examiner | Quizzes you, harder each time, until you start guessing |
| Checker | Checks your work step by step, and can set up a throwaway git or CLI lab |
| Listener | You explain it back in your own words, and it grades you against the source |
| Diagnostician | Finds the one misunderstanding behind a pile of repeat mistakes |
| Sparring partner | Plays the room, the reviewer or the interviewer, with a timer and a score |
| Clerk | Saves the record and makes flashcards from your misses, in your words |
| Reviewer | Runs the due flashcards on a 1, 3, 7, 21 day schedule |

## A few rules it keeps

- You try first. A guess counts.
- A part is only marked `know` after you redo it cold, with no help.
- If you say "just tell me", it does. That part gets marked shaky and goes back in the plan.
- It checks facts against docs or by running things, and says so when it is not sure.

## The record

One markdown file per topic in `~/.claude/sidekick/`. It holds the map, your mistakes, your
flashcards and the next review date. It lives in your home directory so a record of your weak spots
never ends up committed to a repo. See `record.example.md` for a filled one.

There is no setup step. The first run creates the folder.

## Not for

Writing your essay or your code for you. It will check your work and point at what is wrong, but it
will not rewrite it.

## License

MIT
