module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/docs/[[...slug]]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/source.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/../../mdx-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
async function Page(props) {
    const params = await props.params;
    const page = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["source"].getPage(params.slug);
    if (!page) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const MDX = page.data.body;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocsPage"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocsTitle"], {
                children: page.data.title
            }, void 0, false, {
                fileName: "[project]/src/app/docs/[[...slug]]/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocsDescription"], {
                children: page.data.description
            }, void 0, false, {
                fileName: "[project]/src/app/docs/[[...slug]]/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocsBody"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MDX, {
                    components: getMDXComponents()
                }, void 0, false, {
                    fileName: "[project]/src/app/docs/[[...slug]]/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/docs/[[...slug]]/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/docs/[[...slug]]/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["source"].generateParams();
}
async function generateMetadata(props) {
    const params = await props.params;
    const page = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["source"].getPage(params.slug);
    if (!page) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return {
        title: page.data.title,
        description: page.data.description
    };
}
}),
"[project]/src/app/docs/[[...slug]]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/docs/[[...slug]]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0b-7n60._.js.map