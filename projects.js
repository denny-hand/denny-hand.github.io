// ─────────────────────────────────────────────────────────
//  denny — projects
//
//  ПОЛЯ:
//  title    — название проекта
//  year     — год (строка)
//  role     — "lead compositor" | "vfx supervisor" | "compositor"
//  desc     — короткое описание (1-2 предложения)
//  thumb    — статичная картинка: "thumbs/name.jpg"
//  preview  — анимация при hover: "thumbs/name.webm"  (необязательно)
//  video    — ссылка на YouTube или Vimeo (открывается в модальном окне)
//  priority — число 1, 2, 3... (необязательно, фиксирует позицию в сетке)
// ─────────────────────────────────────────────────────────

const projects = [
  {
    title: "showreel 2024",
    year: "2024",
    role: "lead compositor",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    thumb: "thumbs/nich.jpg",
    preview: "thumbs/brakedown_V025.webm",
    video: "https://www.youtube.com/watch?v=04qpTNRC5-0",
    priority: 1
  },
  {
    title: "project title",
    year: "2024",
    role: "vfx supervisor",
    desc: "short description of what you did. what was interesting, what tools you used.",
    thumb: "thumbs/project-name.jpg",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];
