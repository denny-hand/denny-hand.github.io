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
//  ratio     — соотношение сторон карточки (необязательно, по умолчанию "4/3")
//              варианты: "16/9" | "4/3" | "3/2" | "2/3" | "1/1" | "9/16"
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
    ratio: "16/9",
    thumb: "thumbs/showreel-2024.jpg",
    preview: "thumbs/showreel-2024.webm",
    video: "https://vimeo.com/123456789",
    priority: 1
  },
  {
    title: "project title",
    year: "2024",
    date: "2024-03",
    role: "vfx supervisor",
    studio: "Studio Name",
    desc: "short description for the card. keep it brief.",
    details: "",
    ratio: "4/3",
    thumb: "thumbs/project-name.jpg",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];
