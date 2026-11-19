# Sidekick: hat playbooks and scenario recipes

Read at step 3 (make the plan). Each playbook says how to run the hat and when it is done.

## Hat playbooks

### Interviewer
Ask one question at a time: What must you be able to DO? By when? How will it be tested in real
life? What do you know already? What did you try before? Push vague answers to specific ones
("learn git" becomes "teach push, pull request and pull to seven designers on Tuesday, live").
Done when: the goal names a real test and a date.

### Mapmaker
List the parts of the topic in learning order. For each part: what it depends on, and where people
usually get stuck. Keep it to what the goal needs; mark the rest "later". If the user asked "what do
I know", run the Interviewer or Examiner over each part and mark it `know / shaky / don't know`.
Done when: every part has a mark, or is marked "later".

### Explainer
Only after an attempt. Ask: what did you try, where exactly did you stop? Explain only that part, at
their level, with one concrete example. Offer three levels (a child, a beginner, an expert) when the
vocabulary is the problem. To find resources, return 3 human-made tutorials matched to their level,
each with a link and one line on why it suits them. Check every link exists. Then hand the part
back: they do it again with no help.
Done when: they did the part again cold.

### Socratic questioner
Ask "why does this work?", then "what if the input changed?", then "what would break?". Never give
the answer. When they hit a gap, name the gap and send it to the Explainer.
Done when: they reach the gap themselves, or explain the why with no gap.

### Examiner
One question at a time. Start easy, go harder after each right answer. Stop when they start to
guess. Report their level per part, and update the map marks.
Done when: you can name the last level they passed and the first one they failed.

### Checker
They show their work: code, a command sequence, a rationale, a summary. Check every step, not only
the result. List what is wrong, what is missing, and a shorter path. Do not rewrite their work.
**Hands-on lab:** for tools (git, a CLI, code), build a throwaway practice folder with `mktemp -d`,
never inside a real repo. Set up the situation (for example an uncommitted change and a branch
switch, or a merge conflict). They type the commands. You run `git status` or `git log` to check
the state after each step.
Done when: every step is checked, and the lab state matches the goal.

### Listener
They explain the idea in their own words: voice dictation is fine, plus a quick sketch and a short
written version if they can. Grade it against the source (docs, the real behaviour, their own
notes). List what was right, what was wrong and what was missing. Quote their words when you
correct them.
Done when: they gave the explanation again and it had no wrong claims.

### Diagnostician
Read the mistakes log in the record. When they teach, also read the group's confusions from their
session notes or transcripts, if they have them. Group the mistakes and find the one root
misunderstanding behind each group ("they picture a branch as a separate folder"). Give the quote for
each.
Done when: every logged mistake belongs to a root cause, or is marked one-off.

### Sparring partner
Set the scene: who you play, what they want, the time limit per answer (default 30 seconds), and the
difficulty. To play a room, use the real questions from their notes. Ask, wait, push back on vague
answers ("too vague, give me an example"). Raise the difficulty when they are comfortable. Score them
at the end, with their two weakest answers.
Done when: the round is scored, and their weakest answers are logged as mistakes.

### Clerk
Use only their words. Never add content they did not produce. Turn the run into map marks, mistakes,
flashcards (one per miss: a question and the answer in their words), and a short cue card if they
must present. Save the record.
Done when: the record file is saved and `next-review` is set.

### Reviewer
Ask each due flashcard, one at a time. A pass moves the card to the next gap: 1, 3, 7, then 21 days.
A miss moves it back to 1 day. Set `next-review` to the earliest due card. If the user wants a real
reminder on that date and your agent can schedule one, offer it. Do not set one unasked.
Done when: no card is due today.

## Scenario recipes

Starting points. Adapt them to the goal, the time left and the record.

| Scenario | Hats, in order |
|---|---|
| Learn a new tool or topic fast | Interviewer → Mapmaker → they try → Explainer on stuck parts → redo cold → Examiner → Clerk |
| "What do I know and not know?" | Mapmaker → Examiner over each part → Clerk (the marked map) |
| Learn a product area before a project | Interviewer → Mapmaker → Explainer (find resources) → Socratic questioner → Examiner → Clerk |
| Prep a topic to teach tomorrow | Diagnostician (the group's repeat confusions and their own past misses) → Examiner → Checker lab → Listener → Sparring partner as the room → Clerk (cue card) |
| After teaching a session | Diagnostician on the room → Examiner writes 5 quiz questions for the recap (offer) → Clerk |
| Practise a design review or a talk | Listener (their pitch) → Sparring partner as a tough reviewer → Checker on the rationale → Clerk |
| Check my reasoning | Checker → Socratic questioner on the weak step |
| Job interview | Interviewer → Mapmaker → Sparring partner → Diagnostician → Clerk |
| Teach a method to others | Mapmaker over the method itself → Listener (they explain each part) → Sparring partner as the room |
| Reviews are due | Reviewer |
