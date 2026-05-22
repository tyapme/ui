(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/search/client/fetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchClient",
    ()=>fetchClient
]);
//#region src/search/client/fetch.ts
const globalCache = /* @__PURE__ */ new Map();
function fetchClient({ api = "/api/search", locale, tag, cache = globalCache } = {}) {
    return {
        deps: [
            api,
            locale,
            tag
        ],
        async search (query) {
            const url = new URL(api, window.location.origin);
            url.searchParams.set("query", query);
            if (locale) url.searchParams.set("locale", locale);
            if (tag) url.searchParams.set("tag", Array.isArray(tag) ? tag.join(",") : tag);
            const key = url.toString();
            const cached = cache.get(key);
            if (cached) return cached;
            const res = await fetch(url);
            if (!res.ok) throw new Error(await res.text());
            const result = await res.json();
            cache.set(key, result);
            return result;
        }
    };
}
;
}),
]);

//# sourceMappingURL=0x0u_fumadocs-core_dist_search_client_fetch_0y505o1.js.map