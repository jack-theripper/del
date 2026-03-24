import {
  HomeIcon,
  PlayIcon,
  LightBulbIcon,
  BookOpenIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { parse } from "node:path";
import { TS_STABLE, type TSVersion } from "./LanguageStore";

// Build a TypeScript SDK reference path. Stable version gets versionless
// paths; non-stable gets a version prefix.
function tsRef(version: TSVersion, path: string): string {
  if (version === TS_STABLE) {
    return `/docs/reference/typescript/${path}`;
  }
  return `/docs/reference/typescript/${version}/${path}`;
}

// A basic link in the nav
export type NavLink = {
  title: string;
  href: string;
  className?: string;
  tag?: string;
  target?: string;
};

export type NavLinkGroup = {
  title: string;
  className?: string;
};
// A group nested of nav links with a header
export type NavGroup = {
  title: string;
  href?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  links: (NavGroup | NavLink | NavSection | NavLinkGroup)[];
  /* Whether group should be open when there is no active group */
  defaultOpen?: boolean;
  tag?: string;
  target?: string;
};
// A nav section with a nested navigation section
export type NavSection = NavLink & {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  matcher?: RegExp | Function;
  tag?: string;
  target?: string;
  sectionLinks: {
    title: string;
    links: NavLink[];
  }[];
};

// =============================================================================
// REFERENCE SECTION
// =============================================================================
const sectionReference: (NavGroup | NavLink)[] = [
  {
    title: "TypeScript SDK v3",
    links: [
      {
        title: "Введение",
        href: tsRef("v3", "intro"),
      },
      {
        title: "Создание клиента",
        href: tsRef("v3", "client/create"),
      },
      {
        title: "Создание функции",
        href: tsRef("v3", "functions/create"),
      },
      {
        title: "Отправка событий",
        href: tsRef("v3", "events/send"),
      },
      {
        title: "Ошибки",
        href: `/docs/reference/typescript/functions/errors`,
      },
      {
        title: "Обработка сбоев",
        href: tsRef("v3", "functions/handling-failures"),
      },
      {
        title: "Отмена по условию",
        href: tsRef("v3", "functions/cancel-on"),
      },
      {
        title: "Конкурентность",
        href: `/docs/functions/concurrency`,
      },
      {
        title: "Ограничение частоты",
        href: tsRef("v3", "functions/rate-limit"),
      },
      {
        title: "Синглтон",
        href: tsRef("v3", "functions/singleton"),
      },
      {
        title: "Дебаунс",
        href: tsRef("v3", "functions/debounce"),
      },
      {
        title: "Приоритет запуска функции",
        href: tsRef("v3", "functions/run-priority"),
      },
      {
        title: "Расширенные трассировки",
        href: tsRef("v3", "extended-traces"),
      },
      {
        title: "Ссылки на функции",
        href: `/docs/functions/references`,
      },
      {
        title: "Тестирование",
        href: tsRef("v3", "testing"),
      },
      {
        title: "Устойчивые конечные точки",
        href: tsRef("v3", "durable-endpoints"),
        tag: "new",
      },
      {
        title: "Шаги",
        links: [
          {
            title: "step.run()",
            href: tsRef("v3", "functions/step-run"),
            className: "font-mono",
          },
          {
            title: "step.sleep()",
            href: tsRef("v3", "functions/step-sleep"),
            className: "font-mono",
          },
          {
            title: "step.sleepUntil()",
            href: tsRef("v3", "functions/step-sleep-until"),
            className: "font-mono",
          },
          {
            title: "step.invoke()",
            href: tsRef("v3", "functions/step-invoke"),
            className: "font-mono",
          },
          {
            title: "step.waitForEvent()",
            href: tsRef("v3", "functions/step-wait-for-event"),
            className: "font-mono",
          },
          {
            title: "step.waitForSignal()",
            href: tsRef("v3", "functions/step-wait-for-signal"),
            className: "font-mono",
          },
          {
            title: "step.sendEvent()",
            href: tsRef("v3", "functions/step-send-event"),
            className: "font-mono",
          },
        ],
      },
      {
        title: "Обслуживание",
        links: [
          {
            title: "Обработчики фреймворков",
            href: `/docs/learn/serving-inngest-functions`,
          },
          {
            title: "Конфигурация",
            href: tsRef("v3", "serve"),
          },
          {
            title: "Потоковая передача",
            href: `/docs/streaming`,
          },
        ],
      },
      {
        title: "Middleware",
        links: [
          {
            title: "Жизненный цикл",
            href: tsRef("v3", "middleware/lifecycle"),
          },
          {
            title: "Примеры",
            href: tsRef("v3", "middleware/examples"),
          },
          {
            title: "TypeScript",
            href: `/docs/reference/middleware/typescript`,
          },
        ],
      },
      {
        title: "Использование SDK",
        links: [
          {
            title: "Переменные окружения",
            href: `/docs/sdk/environment-variables`,
          },
          {
            title: "Использование TypeScript",
            href: `/docs/typescript`,
          },
          {
            title: "ESLint plugin",
            href: `/docs/sdk/eslint`,
          },
          {
            title: "Обновление до v3",
            href: tsRef("v3", "migrations/v2-to-v3"),
          },
        ],
      },
    ],
  },
  {
    title: "TypeScript SDK v4",
    tag: "new",
    links: [
      {
        title: "Введение",
        href: tsRef("v4", "intro"),
      },
      {
        title: "Создание клиента",
        href: tsRef("v4", "client/create"),
      },
      {
        title: "Создание функции",
        href: tsRef("v4", "functions/create"),
      },
      {
        title: "Вспомогательные триггеры",
        href: tsRef("v4", "functions/triggers"),
      },
      {
        title: "Отправка событий",
        href: tsRef("v4", "events/send"),
      },
      {
        title: "Ошибки",
        href: `/docs/reference/typescript/functions/errors`,
      },
      {
        title: "Обработка сбоев",
        href: tsRef("v4", "functions/handling-failures"),
      },
      {
        title: "Отмена по условию",
        href: tsRef("v4", "functions/cancel-on"),
      },
      {
        title: "Конкурентность",
        href: tsRef("v4", "functions/concurrency"),
      },
      {
        title: "Ограничение частоты",
        href: tsRef("v4", "functions/rate-limit"),
      },
      {
        title: "Синглтон",
        href: tsRef("v4", "functions/singleton"),
      },
      {
        title: "Дебаунс",
        href: tsRef("v4", "functions/debounce"),
      },
      {
        title: "Приоритет запуска функции",
        href: tsRef("v4", "functions/run-priority"),
      },
      {
        title: "Логирование",
        href: tsRef("v4", "logging"),
      },
      {
        title: "Расширенные трассировки",
        href: tsRef("v4", "extended-traces"),
      },
      {
        title: "Ссылки на функции",
        href: tsRef("v4", "functions/references"),
      },
      {
        title: "Тестирование",
        href: tsRef("v4", "testing"),
      },
      {
        title: "Устойчивые конечные точки",
        href: tsRef("v4", "durable-endpoints"),
        tag: "new",
      },
      {
        title: "Шаги",
        links: [
          {
            title: "step.run()",
            href: tsRef("v4", "functions/step-run"),
            className: "font-mono",
          },
          {
            title: "step.sleep()",
            href: tsRef("v4", "functions/step-sleep"),
            className: "font-mono",
          },
          {
            title: "step.sleepUntil()",
            href: tsRef("v4", "functions/step-sleep-until"),
            className: "font-mono",
          },
          {
            title: "step.invoke()",
            href: tsRef("v4", "functions/step-invoke"),
            className: "font-mono",
          },
          {
            title: "step.waitForEvent()",
            href: tsRef("v4", "functions/step-wait-for-event"),
            className: "font-mono",
          },
          {
            title: "step.waitForSignal()",
            href: tsRef("v4", "functions/step-wait-for-signal"),
            className: "font-mono",
          },
          {
            title: "step.sendEvent()",
            href: tsRef("v4", "functions/step-send-event"),
            className: "font-mono",
          },
        ],
      },
      {
        title: "Обслуживание",
        links: [
          {
            title: "Обработчики фреймворков",
            href: `/docs/learn/serving-inngest-functions`,
          },
          {
            title: "Конфигурация",
            href: tsRef("v4", "serve"),
          },
          {
            title: "Потоковая передача",
            href: tsRef("v4", "serve/streaming"),
          },
        ],
      },
      {
        title: "Middleware",
        links: [
          {
            title: "Жизненный цикл",
            href: tsRef("v4", "middleware/lifecycle"),
          },
          {
            title: "Примеры",
            href: tsRef("v4", "middleware/examples"),
          },
          {
            title: "Настраиваемая сериализация",
            href: tsRef("v4", "middleware/serialization"),
          },
          {
            title: "Шифрование",
            href: tsRef("v4", "middleware/encryption"),
          },
          {
            title: "Sentry",
            href: tsRef("v4", "middleware/sentry"),
          },
        ],
      },
      {
        title: "Миграции",
        links: [
          {
            title: "v3 to v4",
            href: tsRef("v4", "migrations/v3-to-v4"),
          },
        ],
      },
      {
        title: "Использование SDK",
        links: [
          {
            title: "Переменные окружения",
            href: `/docs/sdk/environment-variables`,
          },
          {
            title: "Использование TypeScript",
            href: `/docs/typescript`,
          },
          {
            title: "ESLint plugin",
            href: `/docs/sdk/eslint`,
          },
        ],
      },
    ],
  },
  {
    title: "Python SDK",
    links: [
      {
        title: "Введение",
        href: `/docs/reference/python`,
      },
      {
        title: "Быстрый старт",
        href: `/docs/reference/python/overview/quick-start`,
      },
      {
        title: "Inngest Client",
        href: `/docs/reference/python/client/overview`,
      },
      {
        title: "Создание функции",
        href: `/docs/reference/python/functions/create`,
      },
      {
        title: "Отправка событий",
        href: `/docs/reference/python/client/send`,
      },
      {
        title: "Переменные окружения",
        href: `/docs/reference/python/overview/env-vars`,
      },
      {
        title: "Режим продакшена",
        href: `/docs/reference/python/overview/prod-mode`,
      },
      {
        title: "Шаги",
        links: [
          {
            title: "invoke",
            href: `/docs/reference/python/steps/invoke`,
          },
          {
            title: "invoke_by_id",
            href: `/docs/reference/python/steps/invoke_by_id`,
          },
          {
            title: "parallel",
            href: `/docs/reference/python/steps/parallel`,
          },
          {
            title: "run",
            href: `/docs/reference/python/steps/run`,
          },
          {
            title: "send_event",
            href: `/docs/reference/python/steps/send-event`,
          },
          {
            title: "sleep",
            href: `/docs/reference/python/steps/sleep`,
          },
          {
            title: "sleep_until",
            href: `/docs/reference/python/steps/sleep-until`,
          },
          {
            title: "wait_for_event",
            href: `/docs/reference/python/steps/wait-for-event`,
          },
        ],
      },
      {
        title: "Middleware",
        links: [
          {
            title: "Обзор",
            href: `/docs/reference/python/middleware/overview`,
          },
          {
            title: "Жизненный цикл",
            href: `/docs/reference/python/middleware/lifecycle`,
          },
        ],
      },
      {
        title: "Руководства",
        links: [
          {
            title: "Тестирование",
            href: `/docs/reference/python/guides/testing`,
          },
          {
            title: "Modal",
            href: `/docs/reference/python/guides/modal`,
          },
          {
            title: "Pydantic",
            href: `/docs/reference/python/guides/pydantic`,
          },
        ],
      },
      {
        title: "Миграции",
        links: [
          {
            title: "v0.4 to v0.5",
            href: `/docs/reference/python/migrations/v0.4-to-v0.5`,
          },
          {
            title: "v0.3 to v0.4",
            href: `/docs/reference/python/migrations/v0.3-to-v0.4`,
          },
        ],
      },
    ],
  },
  {
    title: "Go SDK",
    links: [
      {
        title: "Справочник",
        href: "https://pkg.go.dev/github.com/inngest/inngestgo",
      },
      {
        title: "Миграции",
        links: [
          {
            title: "v0.8 to v0.11",
            href: `/docs/reference/go/migrations/v0.8-to-v0.11`,
          },
          {
            title: "v0.7 to v0.8",
            href: `/docs/reference/go/migrations/v0.7-to-v0.8`,
          },
        ],
      },
    ],
  },
  {
    title: "REST API",
    href: "https://api-docs.inngest.com/docs/inngest-api/1j9i5603g5768-introduction",
  },
  {
    title: "Системные события",
    links: [
      {
        title: "function.failed",
        href: "/docs/reference/system-events/inngest-function-failed",
        className: "font-mono",
      },
      {
        title: "function.cancelled",
        href: "/docs/reference/system-events/inngest-function-cancelled",
        className: "font-mono",
      },
    ],
  },
  {
    title: "Самостоятельный хостинг",
    href: `/docs/self-hosting`,
  },
];

// =============================================================================
// LEARN SECTION
// =============================================================================
const sectionLearn: (NavGroup | NavLink)[] = [
  { title: "Главная", href: "/docs" },
  {
    title: "Быстрый старт",
    defaultOpen: true,
    links: [
      {
        title: "Next.js",
        href: "/docs/getting-started/nextjs-quick-start",
      },
      {
        title: "Node.js",
        links: [
          {
            title: "Express",
            href: "/docs/getting-started/express-quick-start",
          },
          {
            title: "Astro",
            href: "/docs/getting-started/astro-quick-start",
          },
          {
            title: "H3",
            href: "/docs/getting-started/h3-quick-start",
          },
          {
            title: "NestJS",
            href: "/docs/getting-started/nestjs-quick-start",
          },
          {
            title: "TanStack Start",
            href: "/docs/getting-started/tanstack-start-quick-start",
          },
          {
            title: "Другие фреймворки",
            href: "/docs/getting-started/nodejs-quick-start",
          },
        ],
      },
      {
        title: "Python",
        href: "/docs/getting-started/python-quick-start",
      },
    ],
  },
  {
    title: "Концепции",
    defaultOpen: true,
    links: [
      {
        title: "Как работает устойчивое выполнение",
        href: `/docs/learn/how-functions-are-executed`,
      },
      {
        title: "Устойчивые функции",
        links: [
          {
            title: "Обзор",
            href: `/docs/learn/inngest-functions`,
          },
          {
            title: "Обслуживание функций Inngest",
            href: "/docs/learn/serving-inngest-functions",
          },
          {
            title: "Запуск функций",
            href: `/docs/features/events-triggers`,
          },
          {
            title: "Идемпотентность",
            href: `/docs/guides/handling-idempotency`,
          },
        ],
      },
      {
        title: "Устойчивые конечные точки",
        href: `/docs/learn/durable-endpoints`,
        tag: "new",
      },
      {
        title: "Шаги",
        links: [
          {
            title: "Построение с использованием шагов",
            href: `/docs/learn/inngest-steps`,
          },
          {
            title: "Ожидание (sleep)",
            href: "/docs/features/inngest-functions/steps-workflows/sleeps",
          },
          {
            title: "Ожидание события",
            href: "/docs/features/inngest-functions/steps-workflows/wait-for-event",
          },
          {
            title: "Ожидание сигнала",
            href: "/docs/features/inngest-functions/steps-workflows/wait-for-signal",
          },
          {
            title: "Вызов других функций",
            href: `/docs/guides/invoking-functions-directly`,
          },
          {
            title: "AI-шаги (вызовы LLM)",
            href: "/docs/features/inngest-functions/steps-workflows/step-ai-orchestration",
          },
          {
            title: "Устойчивый Fetch",
            href: "/docs/features/inngest-functions/steps-workflows/fetch",
          },
        ],
      },
      {
        title: "Обработка ошибок",
        links: [
          {
            title: "Обзор",
            href: `/docs/guides/error-handling`,
          },
          {
            title: "Повторные попытки",
            href: "/docs/features/inngest-functions/error-retries/retries",
          },
          {
            title: "Откаты",
            href: "/docs/features/inngest-functions/error-retries/rollbacks",
          },
          {
            title: "Обработчики сбоев",
            href: "/docs/features/inngest-functions/error-retries/failure-handlers",
          },
          {
            title: "Ошибки Inngest",
            href: "/docs/features/inngest-functions/error-retries/inngest-errors",
          },
        ],
      },
      {
        title: "Управление потоком",
        links: [
          {
            title: "Обзор",
            href: `/docs/guides/flow-control`,
          },
          {
            title: "Конкурентность",
            href: `/docs/guides/concurrency`,
          },
          {
            title: "Дросселирование",
            href: `/docs/guides/throttling`,
          },
          {
            title: "Пакетная обработка",
            href: `/docs/guides/batching`,
          },
          {
            title: "Ограничение частоты",
            href: `/docs/guides/rate-limiting`,
          },
          {
            title: "Синглтон",
            href: `/docs/guides/singleton`,
          },
          {
            title: "Дебаунс",
            href: `/docs/guides/debounce`,
          },
          {
            title: "Приоритет",
            href: `/docs/guides/priority`,
          },
        ],
      },
      {
        title: "Отмена",
        links: [
          {
            title: "Обзор",
            href: `/docs/features/inngest-functions/cancellation`,
          },
          {
            title: "Отмена по таймауту",
            href: `/docs/features/inngest-functions/cancellation/cancel-on-timeouts`,
          },
          {
            title: "Отмена по событию",
            href: `/docs/features/inngest-functions/cancellation/cancel-on-events`,
          },
          {
            title: "Массовая отмена",
            href: `/docs/guides/cancel-running-functions`,
          },
        ],
      },
      {
        title: "В реальном времени",
        tag: "new",
        links: [
          {
            title: "Обзор",
            href: "/docs/features/realtime",
          },
          {
            title: "React hooks / Next.js",
            href: "/docs/features/realtime/react-hooks",
          },
        ],
      },
      {
        title: "Окружения и приложения",
        href: "/docs/apps",
        links: [
          {
            title: "Обзор",
            href: "/docs/apps",
          },
          {
            title: "Окружения",
            href: `/docs/platform/environments`,
          },
          {
            title: "Приложения",
            href: `/docs/platform/manage/apps`,
          },
          {
            title: "Ключи событий",
            href: `/docs/events/creating-an-event-key`,
          },
          {
            title: "Ключи подписи",
            href: `/docs/platform/signing-keys`,
          },
        ],
      },
    ],
  },
  {
    title: "Руководства",
    defaultOpen: true,
    links: [
      {
        title: "Локальная разработка",
        href: `/docs/local-development`,
      },
      {
        title: "Паттерны",
        links: [
          {
            title: "Многошаговые функции",
            href: "/docs/guides/multi-step-functions",
          },
          {
            title: "Параллельные шаги",
            href: "/docs/guides/step-parallelism",
          },
          {
            title: "Разветвление (Fan-out)",
            href: `/docs/guides/fan-out-jobs`,
          },
          {
            title: "Работа с циклами",
            href: "/docs/guides/working-with-loops",
          },
          {
            title: "Отложенные функции",
            href: `/docs/guides/delayed-functions`,
          },
          {
            title: "Cron-функции",
            href: `/docs/guides/scheduled-functions`,
          },
          {
            title: "Фоновые задачи",
            href: `/docs/guides/background-jobs`,
          },
          {
            title: "Множественные триггеры и шаблоны",
            href: `/docs/guides/multiple-triggers`,
          },
          {
            title: "Отправка событий из функций",
            href: `/docs/guides/sending-events-from-functions`,
          },
          {
            title: "Пользовательские рабочие процессы",
            href: `/docs/guides/user-defined-workflows`,
          },
          {
            title: "Руководство по миграции с Mergent",
            href: `/docs/guides/mergent-migration`,
          },
          {
            title: "Workflow Kit",
            links: [
              {
                title: "Введение",
                href: `/docs/reference/workflow-kit`,
              },
              {
                title: "Создание действий рабочего процесса",
                href: `/docs/reference/workflow-kit/actions`,
              },
              {
                title: "Использование движка рабочих процессов",
                href: `/docs/reference/workflow-kit/engine`,
              },
              {
                title: "Формат экземпляра рабочего процесса",
                href: `/docs/reference/workflow-kit/workflow-instance`,
              },
              {
                title: "API компонентов (React)",
                href: `/docs/reference/workflow-kit/components-api`,
              },
            ],
          },
        ],
      },
      {
        title: "AI-паттерны",
        links: [
          {
            title: "Циклы инструментов агента",
            href: `/docs/ai-patterns/agent-tool-loops`,
          },
          {
            title: "Человек в контуре",
            href: `/docs/ai-patterns/human-in-the-loop`,
          },
          {
            title: "Вспомогательные агенты",
            href: `/docs/ai-patterns/sub-agent-delegation`,
          },
        ],
      },
      {
        title: "Развёртывание",
        defaultOpen: true,
        links: [
          {
            title: "Обзор",
            href: `/docs/platform/deployment`,
          },
          {
            title: "Синхронизация приложения",
            href: `/docs/apps/cloud`,
          },
          {
            title: "Подключение",
            href: `/docs/setup/connect`,
            tag: "beta",
          },
          {
            title: "Контрольные точки",
            href: `/docs/setup/checkpointing`,
            tag: "new",
          },
          {
            title: "Облачные провайдеры",
            links: [
              {
                title: "Vercel",
                href: "/docs/deploy/vercel",
              },
              {
                title: "DigitalOcean",
                href: "/docs/deploy/digital-ocean",
                tag: "new",
              },
              {
                title: "Cloudflare Pages",
                href: `/docs/deploy/cloudflare`,
              },
              {
                title: "Netlify",
                href: `/docs/deploy/netlify`,
              },
              {
                title: "Render",
                href: `/docs/deploy/render`,
              },
              {
                title: "Лимиты использования облачных провайдеров",
                href: `/docs/usage-limits/providers`,
              },
            ],
          },
        ],
      },
      {
        title: "События и триггеры",
        links: [
          {
            title: "Обзор",
            href: `/docs/features/events-triggers`,
          },
          {
            title: "Отправка событий",
            href: `/docs/events`,
          },
          {
            title: "Формат полезной нагрузки события",
            href: `/docs/features/events-triggers/event-format`,
          },
          {
            title: "Написание выражений",
            href: `/docs/guides/writing-expressions`,
          },
          {
            title: "Обработка событий вебхуков",
            href: `/docs/platform/webhooks`,
          },
        ],
      },
      {
        title: "Оптимизация производительности",
        href: `/docs/improve-performance`,
      },
      {
        title: "Версионирование",
        href: `/docs/learn/versioning`,
      },
      {
        title: "Логирование",
        href: "/docs/guides/logging",
      },
      {
        title: "Middleware",
        links: [
          {
            title: "Обзор",
            href: `/docs/features/middleware`,
          },
          {
            title: "Создание middleware",
            href: `/docs/features/middleware/create`,
          },
          {
            title: "Внедрение зависимостей",
            href: "/docs/features/middleware/dependency-injection",
          },
          {
            title: "Middleware шифрования",
            href: "/docs/features/middleware/encryption-middleware",
          },
          {
            title: "Middleware Sentry",
            href: "/docs/features/middleware/sentry-middleware",
          },
        ],
      },
    ],
  },
  {
    title: "Платформа",
    links: [
      {
        title: "Управление",
        links: [
          {
            title: "Массовый повтор",
            href: "/docs/platform/replay",
          },
          {
            title: "Массовая отмена",
            href: "/docs/platform/manage/bulk-cancellation",
          },
          {
            title: "Приостановка",
            href: "/docs/guides/pause-functions",
          },
        ],
      },
      {
        title: "Мониторинг",
        links: [
          {
            title: "Просмотр запусков",
            href: "/docs/platform/monitor/inspecting-function-runs",
          },
          {
            title: "Трассировки",
            href: "/docs/platform/monitor/traces",
            tag: "new",
          },
          {
            title: "Наблюдаемость и метрики",
            href: "/docs/platform/monitor/observability-metrics",
          },
          {
            title: "Аналитика",
            href: "/docs/platform/monitor/insights",
            tag: "new",
          },
          {
            title: "События",
            href: "/docs/platform/monitor/inspecting-events",
          },
        ],
      },
      {
        title: "Интеграции",
        links: [
          {
            title: "Neon",
            href: `/docs/features/events-triggers/neon`,
          },
          {
            title: "Datadog",
            href: "/docs/platform/monitor/datadog-integration",
          },
          {
            title: "Prometheus",
            href: "/docs/platform/monitor/prometheus-metrics-export-integration",
          },
        ],
      },
    ],
  },
  {
    title: "AI",
    links: [
      {
        title: "Dev Server MCP",
        href: "/docs/ai-dev-tools/mcp",
      },
      {
        title: "AgentKit",
        href: "https://agentkit.inngest.com",
        target: "_blank",
      },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      {
        title: "Безопасность",
        href: "/docs/learn/security",
      },
      {
        title: "Глоссарий",
        href: `/docs/learn/glossary`,
      },
      {
        title: "Фазы релиза",
        href: `/docs/release-phases`,
      },
      {
        title: "FAQ",
        href: `/docs/faq`,
      },
      {
        title: "Ограничения",
        href: `/docs/usage-limits/inngest`,
      },
    ],
  },
];

// =============================================================================
// EXAMPLES SECTION (kept for backwards compatibility)
// =============================================================================
const sectionExamples: NavGroup[] = [
  {
    title: "Примеры",
    defaultOpen: true,
    links: [
      { title: "Все примеры", href: `/docs/examples/` },
      {
        title: "AI-агенты и RAG",
        href: `/docs/examples/ai-agents-and-rag`,
      },
      {
        title: "Серия email-писем",
        href: `/docs/examples/email-sequence`,
      },
      {
        title: "Планирование разовой функции",
        href: `/docs/examples/scheduling-one-off-function`,
      },
      {
        title: "Получение статуса и вывода запуска",
        href: `/docs/examples/fetch-run-status-and-output`,
      },
      {
        title: "Отслеживание сбоев функций в Datadog",
        href: `/docs/examples/track-failures-in-datadog`,
      },
      {
        title: "Очистка после отмены функции",
        href: `/docs/examples/cleanup-after-function-cancellation`,
      },
      {
        title: "Fetch: Устойчивые HTTP-запросы",
        href: `/docs/examples/fetch`,
      },
      {
        title: "Потоковые обновления из функций",
        href: `/docs/examples/realtime`,
      },
      {
        title: "Настройка OpenTelemetry с Inngest",
        href: `/docs/examples/open-telemetry`,
      },
      {
        title: "Устойчивые конечные точки",
        href: `/docs/examples/durable-endpoints`,
      },
      {
        title: "Запуск рабочих процессов из Retool",
        href: `/docs/guides/trigger-your-code-from-retool`,
      },
      {
        title: "Инструментирование GraphQL",
        href: `/docs/guides/instrumenting-graphql`,
      },
      {
        title: "Обработка вебхуков Clerk",
        href: `/docs/guides/clerk-webhook-events`,
      },
      {
        title: "Обработка вебхуков Resend",
        href: `/docs/guides/resend-webhook-events`,
      },
    ],
  },
  {
    title: "Middleware",
    defaultOpen: true,
    links: [
      {
        title: "Переменные окружения Cloudflare Workers и Hono",
        href: `/docs/examples/middleware/cloudflare-workers-environment-variables`,
      },
    ],
  },
];

// =============================================================================
// TYPE GUARDS
// =============================================================================
export const isNavGroup = (
  item: NavGroup | NavLink | NavSection | NavLinkGroup
): item is NavGroup => {
  return !!(item as NavGroup).links;
};
export const isNavSection = (
  item: NavGroup | NavLink | NavSection | NavLinkGroup
): item is NavSection => {
  return !!(item as NavSection).sectionLinks;
};
export const isNavLinkGroup = (
  item: NavGroup | NavLink | NavSection | NavLinkGroup
): item is NavLinkGroup => {
  return item.title && !(item as NavGroup).links && !(item as NavLink).href;
};
export const isNavLink = (
  item: NavGroup | NavLink | NavSection | NavLinkGroup
): item is NavLink => {
  return !!item.title && !!(item as NavLink).href;
};

// =============================================================================
// LINK SEARCH HELPERS
// =============================================================================
function linkSearch(groups: (NavGroup | NavLink)[], pathname) {
  return groups.find((item) =>
    isNavGroup(item)
      ? recursiveLinkSearch(item, pathname)
      : item.href === pathname
  );
}

function recursiveLinkSearch(group: NavGroup, pathname) {
  if (group.href === pathname) {
    return true;
  }
  return group.links.find((link) => {
    return isNavLink(link)
      ? link.href === pathname
      : "links" in link && recursiveLinkSearch(link, pathname);
  });
}

// =============================================================================
// MATCHERS
// =============================================================================
const matchers: Record<string, (pathname: string) => any> = {
  docs: (pathname) => pathname === "/docs" || pathname === "/docs/",
  examples: (pathname) =>
    /^\/docs\/examples/.test(pathname) || linkSearch(sectionExamples, pathname),
  reference: (pathname) =>
    /^\/docs\/reference/.test(pathname) ||
    linkSearch(sectionReference, pathname),
  learn: (pathname) => linkSearch(sectionLearn, pathname),
};
matchers.default = matchers.learn;

// =============================================================================
// MENU TABS (Top navigation)
// =============================================================================
export const menuTabs = [
  {
    title: "Документация",
    icon: PlayIcon,
    href: "/docs",
    matcher: matchers.default,
  },
  {
    title: "Примеры",
    icon: LightBulbIcon,
    href: "/docs/examples/",
    matcher: matchers.examples,
  },
];

// =============================================================================
// SIDEBAR TABS (Sidebar navigation)
// =============================================================================
export const sidebarMenuTabs = [
  {
    title: "Изучение",
    icon: BookOpenIcon,
    href: "/docs",
    matcher: matchers.learn,
  },
  {
    title: "Справочник",
    icon: CodeBracketIcon,
    href: "/docs/reference/typescript",
    matcher: matchers.reference,
  },
];

// =============================================================================
// TOP LEVEL NAV
// =============================================================================
export const topLevelNav = [
  {
    title: "Изучение",
    icon: BookOpenIcon,
    href: `/docs`,
    sectionLinks: sectionLearn,
    matcher: matchers.learn,
  },
  {
    title: "Справочник",
    icon: CodeBracketIcon,
    href: "/docs/reference/typescript",
    matcher: matchers.reference,
    sectionLinks: sectionReference,
  },
  {
    title: "Примеры",
    icon: LightBulbIcon,
    href: "/docs/examples/",
    sectionLinks: sectionExamples,
    matcher: matchers.examples,
  },
];