# denny — portfolio

## структура файлов

```
/
├── index.html       ← сайт (не трогать)
├── projects.js      ← здесь добавляешь проекты
└── thumbs/
    ├── showreel-2024.jpg
    ├── project-name.jpg
    └── ...          ← превью проектов кладёшь сюда
```

---

## как добавить проект

1. открой `projects.js`
2. скопируй блок `{ ... }` и вставь перед последней `]`
3. заполни поля
4. положи превью jpg в папку `thumbs/`
5. сохрани и сделай git push

**поля:**
- `title` — название
- `year` — год
- `role` — `"lead compositor"` / `"vfx supervisor"` / `"compositor"`
- `desc` — 1-2 предложения
- `thumb` — `"thumbs/имя-файла.jpg"`
- `vimeo` — полная ссылка
- `priority` — число (необязательно). фиксирует место в сетке. без него — сортировка по году

---

## как сменить пароль

открой `index.html`, найди строку:
```js
const PASSWORD = "1234";
```
замени `1234` на свой пароль.

---

## как выложить на github pages

**первый раз:**
1. зайди на github.com → New repository
2. назови репозиторий: `твойник.github.io`
3. загрузи все файлы (index.html, projects.js, папку thumbs/)
4. Settings → Pages → Branch: main → Save
5. сайт будет на `https://твойник.github.io`

**обновить после изменений** — три команды в терминале:
```bash
git add .
git commit -m "add project"
git push
```

или редактируй файлы прямо на github.com через кнопку карандаш.

---

## рекомендуемый размер превью

**1280 × 720 px** (16:9), формат jpg, до 500 КБ.
