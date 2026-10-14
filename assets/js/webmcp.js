(function () {
  function visibleText() {
    var root = document.querySelector("main, article, .container-fluid") || document.body;
    return (root.textContent || "").replace(/\s+/g, " ").trim();
  }

  function canonicalUrl() {
    var canonical = document.querySelector('link[rel="canonical"]');
    return canonical && canonical.href ? canonical.href : window.location.href;
  }

  function pageSummary() {
    return {
      title: document.title || "amritamaz.net",
      url: canonicalUrl(),
      summary: visibleText().slice(0, 1200)
    };
  }

  function pageLinks() {
    return Array.prototype.slice.call(document.querySelectorAll("a[href]"))
      .map(function (anchor) {
        return {
          text: (anchor.textContent || "").replace(/\s+/g, " ").trim(),
          href: anchor.href
        };
      })
      .filter(function (link) {
        return link.href && /^https?:/.test(link.href);
      })
      .slice(0, 100);
  }

  function findText(query) {
    var text = visibleText();
    var needle = String(query || "").trim().toLowerCase();
    if (!needle) return [];

    var lower = text.toLowerCase();
    var matches = [];
    var index = lower.indexOf(needle);
    while (index !== -1 && matches.length < 10) {
      var start = Math.max(0, index - 120);
      var end = Math.min(text.length, index + needle.length + 120);
      matches.push(text.slice(start, end).trim());
      index = lower.indexOf(needle, index + needle.length);
    }
    return matches;
  }

  function tools() {
    return [
      {
        name: "get-site-summary",
        description: "Return the current amritamaz.net page title, canonical URL, and visible text summary.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false
        },
        execute: async function () {
          return pageSummary();
        }
      },
      {
        name: "list-site-links",
        description: "Return public links visible on the current amritamaz.net page.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false
        },
        execute: async function () {
          return pageLinks();
        }
      },
      {
        name: "find-page-text",
        description: "Search visible text on the current amritamaz.net page and return matching snippets.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Case-insensitive text to search for on the current page."
            }
          },
          required: ["query"],
          additionalProperties: false
        },
        execute: async function (input) {
          return {
            query: input.query,
            matches: findText(input.query)
          };
        }
      }
    ];
  }

  async function registerWebMcpTools() {
    var modelContext = document.modelContext || (navigator && navigator.modelContext);
    if (!modelContext) return;

    var siteTools = tools();
    if (typeof modelContext.registerTool === "function") {
      var controller = new AbortController();
      window.addEventListener("pagehide", function () {
        controller.abort();
      }, { once: true });

      await Promise.all(siteTools.map(function (tool) {
        return modelContext.registerTool(tool, { signal: controller.signal }).catch(function () {});
      }));
      return;
    }

    if (typeof modelContext.provideContext === "function") {
      await Promise.resolve(modelContext.provideContext({ tools: siteTools })).catch(function () {});
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", registerWebMcpTools, { once: true });
  } else {
    registerWebMcpTools();
  }
}());
