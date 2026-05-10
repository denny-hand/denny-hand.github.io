# denny portfolio — context for claude

## что это за проект
Сайт-портфолио digital compositor Дениса (Denny) на GitHub Pages.
Живёт по адресу: https://denny-hand.github.io
Репозиторий: https://github.com/denny-hand/denny-hand.github.io

## структура файлов
```
denny-hand.github.io/
├── index.html          ← весь сайт (один файл)
├── projects.csv        ← база проектов (редактируется в Excel/LibreOffice)
├── thumbs/             ← превью картинки (.jpg)
├── preview/            ← анимации при hover (.webm)
├── video/              ← основные видео (.webm или ссылки)
├── breakdown/          ← брейкдаун видео (.webm)
├── pages/              ← кастомные HTML страницы для модалок
├── logo/               ← логотип (не используется, заменён на SVG руки)
├── deploy.bat          ← загрузить изменения на GitHub одним кликом
├── start-local.bat     ← запустить локальный сервер (http://localhost:8080)
└── convert-to-webm.bat ← конвертировать MOV/MP4 в WebM
```

## как работает сайт

### экран входа
- пароль: `1234` (менять в index.html → `const PASSWORD = "1234"`)
- на фоне игра: падающие ноды Nuke, ловишь мышкой
- ноды разного размера — большие взрываются с кольцами и трясут экран
- счётчик пойманных нод в правом верхнем углу

### главная страница
- хедер: "denny" + SVG рука (машет при наведении)
- hero секция: большой плеер для featured проекта (кнопка "watch showreel")
- фильтры по категориям: all / feature film / animation / 2d animation / commercial / music video
- сетка карточек 16:9, анимация появления при загрузке
- при hover на карточке: зум картинки + появляется описание
- если есть preview webm — при hover показывается анимация
- футер: imdb, linkedin, email (email показывается по клику + копируется)

### модалка
- открывается при клике на карточку
- если в CSV указан `page` → открывает HTML файл в iframe (кастомная страница)
- если указан `video` → показывает плеер (YouTube/Vimeo/webm)
- если указан `breakdown` → показывает второй плеер снизу
- справа: role, studio, year + длинное описание (details)
- закрывается по Escape или клику на фон

## поля projects.csv
```
title      — название проекта
year       — год отображения: 2024
date       — для сортировки: 2024-03 (год-месяц)
role       — lead compositor / vfx supervisor / compositor
studio     — студия или клиент
category   — feature film / animation / 2d animation / commercial / music video
featured   — yes = показывается в hero плеере вверху (только один)
desc       — короткий текст на карточке
details    — длинный текст в модалке справа
thumb      — превью: thumbs/name.jpg
preview    — hover анимация: preview/name.webm
video      — основное видео: ссылка YouTube/Vimeo или video/name.webm
breakdown  — брейкдаун: ссылка или breakdown/name.webm
link       — если указан — клик открывает URL вместо модалки
page       — если указан — модалка открывает HTML: pages/project.html
priority   — число 1/2/3 (фиксирует позицию, иначе сортировка по date/year)
```

## сортировка проектов
1. featured: yes → всегда первый (hero)
2. priority по возрастанию
3. остальные по date (год-месяц) от новых к старым

## технический стек
- чистый HTML/CSS/JS, никаких фреймворков
- данные из projects.csv (fetch при входе)
- шрифт: Inter (Google Fonts)
- иконка и логотип: inline SVG рука (нарисована кодом)
- тёмная/светлая тема через CSS переменные + data-theme атрибут

## что уже сделано хорошо, не трогать
- игра с нодами на экране входа
- логика CSV парсера
- модальное окно и все его режимы
- анимации карточек
- мобильная адаптация
- фильтры по категориям
- hero секция

## контакты Дениса
- email: deniskarucha@gmail.com
- linkedin: https://www.linkedin.com/in/dennyrych/
- imdb: https://www.imdb.com/name/nm13145444/
- github: denny-hand

## важные нюансы
- сайт защищён паролем (клиентская защита, не серверная)
- CSV должен сохраняться именно в формате CSV с разделителями-запятыми
- строки в CSV начинающиеся с # — комментарии, игнорируются
- поля с запятыми внутри оборачиваются в кавычки: "text, with comma"
- локальный просмотр: запустить start-local.bat → http://localhost:8080
- деплой: запустить deploy.bat → изменения на GitHub через 1-2 мин
