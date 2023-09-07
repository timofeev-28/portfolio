# Портфолио верстальщика Дмитрия Тимофеева

---
**В проекте используется сборка Сергея Артёмова ([Firefoxic](https://github.com/firefoxic/project-template-2)).

В корне проекта находятся только его конфиги. А также [Contributing.md](Contributing.md) — полезное руководство по внесению изменений.

**Исходные файлы вёрстки должны лежать в `source/`.**

Собирается проект в `build/`.

---

## Установка зависимостей проекта

Сложная сборка в этом проекте не заведётся без дополнительных инструментов — зависимостей. Поэтому их необходимо установить.

### 1. Терминал

Для установки зависимостей понадобится терминал. В Linux и macOS он уже есть, а в Windows лучше установить _git-bash_, который идёт в комплекте с самим [Git](https://git-scm.com/download/windows).

### 2. Node.js

Зависимости работают в среде _node.js_, которую тоже нужно установить, но лучше не с помощью установщика с сайта, а через менеджер версий ноды. Есть разные менеджеры, но проще всего установить и использовать [_volta_](https://volta.sh/).

Для установки _volta_ в Linux и macOS в терминале выполни:

```shell
curl https://get.volta.sh | bash
```

В Windows проще скачать и запустить [установщик](https://github.com/volta-cli/volta/releases/download/v1.1.1/volta-1.1.1-windows-x86_64.msi).

После установки _volta_ перезапусти (или просто открой новый) терминал и выполни установку _node.js_ свежей LTS версии (на данный момент 18.16.0):

```shell
volta install node
```

После этого в терминале в директории проекта запусти:

```shell
node -v
```

Это проверка версии _node.js_, но так как в проекте для _volta_ указана необходимая версия 18.16.0, _volta_ сначала запустит установку этой версии (если ещё не установлена) и только после этого выдаст её номер.

После этого любые npm-команды будут выполняться в требуемой проекту версии (18.16.0), а вне этого проекта будет запускаться более свежая версия.

### 3. Зависимости

Вместе с нодой стал доступен её менеджер пакетов — _npm_. Можно было бы использовать его, но лучше воспользоваться его альтернативой — _pnpm_. Установи его через _volta_:

```shell
volta install pnpm
```

> В Windows эта команда может завершиться с ошибкой (_pnpm_ не установится). В таком случае в настройках системы нужно включить режим «Для разработчика» (официальная [инструкция](https://learn.microsoft.com/ru-ru/windows/apps/get-started/enable-your-device-for-development#accessing-settings-for-developers)), перезагрузиться и заново запустить команду.

После этого для установки зависимостей проекта в терминале, находясь в директории проекта, выполни:

```shell
pnpm i --frozen-lockfile
```

> **Не** обращай внимание на предупреждения во время установки.

После установки зависимостей становится доступным любой npm-скрипт проекта. Все доступные скрипты можно посмотреть выполнив:

```shell
npm run
```

Но чаще остальных используются два:

1. Линтинг — последовательная проверка кода пятью линтерами:

	```shell
	npm run lint
	```

2. Cборка для разработки, при которой запустится и локальный сервер в папке `build/`, в которую собирается проект из папки `source/`, а в брауезере откроется разрабатываемый сайт и будет обновляться при обновлении файлов в проекте:

	```shell
	npm run start
	```

> Кстати, в этих командах тоже можно использовать _pnpm_ вместо _npm_, но не обязательно. Необхоим _pnpm_ только при установке зависимостей.

---
