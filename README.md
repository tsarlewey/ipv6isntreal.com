# IPv6 ISN'T REAL

## THEY DON'T WANT YOU TO READ THIS

You found us. That means you're asking questions. Good. Keep asking.

This repository contains the source code for [ipv6isntreal.com](http://ipv6isntreal.com) - a documentary project tracking the global IPv6 agenda and the forces behind it.

## WHAT THEY TOLD YOU

> "We're running out of IPv4 addresses. IPv6 is the natural evolution of the internet. It's just a technical upgrade. Nothing to worry about."

## WHAT THEY DIDN'T TELL YOU

- **128 bits** = 340 undecillion unique addresses = ONE FOR EVERY ATOM ON EARTH
- **No more NAT** = No more hiding behind your router = EVERY DEVICE GLOBALLY ADDRESSABLE
- **Permanent identifiers** = Your devices carry the same address prefix EVERYWHERE
- **Extension headers** = Inspection points built INTO THE PROTOCOL
- **"Adoption"** = They don't ask permission. They just enable it.

## THE EVIDENCE

We track every announcement. Every "upgrade." Every mandate. The pattern is clear to those who look.

Visit the site. Read the reports. Connect the dots.

## RUNNING LOCALLY

They made us use their protocol to expose their protocol. The irony is not lost on us.

```bash
# You'll need Node.js - yes, we know, JavaScript is also suspect
npm install

# Development server - IPv6 ONLY (http://[::1]:4321)
npm run dev

# Build the static site
npm run build

# Preview the build
npm run preview
```

### REQUIREMENTS

- Node.js 18+ (the runtime knows your machine ID)
- An IPv6-capable network (they've already got you)
- Eyes that are OPEN

## CONTRIBUTING

See something? Report something.

Add new announcements to `src/content/announcements/` as Markdown files:

```markdown
---
title: "The Headline They Published"
source: "Their Mouthpiece"
url: "https://link.to"
announcedAt: 2025-01-01
severity: critical  # low | medium | high | critical
---

What they said vs. what it MEANS.
```

## THE TECH STACK

- **Astro** - Static site generator (your data stays local... for now)
- **Markdown** - Plain text (they can't hide tracking pixels in plain text)
- **Zero JavaScript on the client** - Nothing phoning home
- **IPv6-only server** - If you're going to expose the beast, ride the beast

## FREQUENTLY ASKED QUESTIONS

### Is this satire?

Define "satire."

### Do you actually believe IPv6 is a conspiracy?

We believe in asking questions. We believe in documenting patterns. We believe the best way to understand a technology is to look at who benefits from it.

Also: yes, obviously IPv6 is real and this is satire. The protocol is fine. The surveillance capitalism that runs on top of it is the actual problem. But that's less fun to write about.

### Why IPv6-only?

Because it's funny. And because if you can't access this site, you've already been assimilated.

## LEGAL

This is a parody/satire project. All "announcements" are dramatized interpretations of real technology news. No actual conspiracy is alleged.

The real conspiracy is that we convinced you to read a README file.

## FINAL TRANSMISSION

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334

They say it's just an address.
We say it's a number.
YOUR number.
In THEIR system.

Stay vigilant.
Stay skeptical.
Stay IPv4.

(just kidding, you can't anymore)
```

---

*This site is served exclusively over IPv6 because we contain multitudes (approximately 3.4×10³⁸ of them).*
# ipv6isntreal.com
