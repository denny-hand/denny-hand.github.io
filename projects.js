// ─────────────────────────────────────────────────────────
//  denny — projects
//
//  КАК ДОБАВИТЬ ПРОЕКТ:
//  1. скопируй один блок { ... }
//  2. заполни поля
//  3. положи превью jpg в папку thumbs/
//  4. сохрани файл и сделай git push
//
//  ПОЛЯ:
//  title    — название проекта
//  year     — год (строка)
//  role     — "lead compositor" | "vfx supervisor" | "compositor"
//  desc     — короткое описание (1-2 предложения)
//  thumb    — путь к превью: "thumbs/название.jpg"
//  vimeo    — полная ссылка на vimeo
//  priority — (необязательно) число: 1, 2, 3...
//             если не указано — сортировка по году автоматически
// ─────────────────────────────────────────────────────────

const projects = [
  {
    title: "Nich - Latexfauna",
    year: "2025",
    role: "lead compositor",
    desc: "annual reel. commercial and film work — crowd simulations, sky replacements, cg integration.",
    thumb: "thumbs/nich.jpg",
    vimeo: "https://vimeo.com/123456789",
    priority: 1
  },
  {
    title: "project title",
    year: "2024",
    role: "vfx supervisor",
    desc: "short description of what you did. what was interesting, what tools you used.",
    thumb: "thumbs/project-name.jpg",
    vimeo: "https://vimeo.com/000000000"
  }
];
