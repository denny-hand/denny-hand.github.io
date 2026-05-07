// ─────────────────────────────────────────────────────────
//  denny — projects
//
//  ПОЛЯ:
//  title     — название (на карточке и в модалке)
//  year      — год для отображения на карточке: "2024"
//  date      — год и месяц для сортировки: "2024-03" (необязательно, если не указан — сортировка по year)
//  role      — "lead compositor" | "vfx supervisor" | "compositor"
//  studio    — студия / клиент (необязательно)
//  desc      — короткий текст на карточке (1-2 предложения)
//  details   — длинный текст в модалке справа (необязательно, любой длины)
//  thumb     — превью картинка: "thumbs/name.jpg"
//  preview   — анимация при hover: "thumbs/name.webm" (необязательно)
//  video     — основное видео: YouTube / Vimeo ссылка или "thumbs/name.webm"
//  breakdown — брейкдаун: YouTube / Vimeo ссылка или "thumbs/name.webm" (необязательно)
//  priority  — число 1, 2, 3... (необязательно, фиксирует позицию)
// ─────────────────────────────────────────────────────────

const projects = [
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
  {
    title: "showreel 2024",
    year: "2024",
    date: "2024-11",
    role: "lead compositor",
    studio: "Blacksmith VFX",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    details: "A collection of compositing work from 2024 spanning commercial and narrative projects. Tools used: Nuke, Houdini, DaVinci Resolve. Includes crowd simulations for a large-scale live event broadcast, sky replacements across a 3-week commercial shoot, and CG vehicle integration for an automotive campaign.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "thumbs/brakedown_V025.webm",
    priority: 1
  },
];
