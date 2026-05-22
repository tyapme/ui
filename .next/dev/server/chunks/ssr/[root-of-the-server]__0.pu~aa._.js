module.exports = [
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/content/docs/components/button.mdx.js?collection=docs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MDXContent,
    "frontmatter",
    ()=>frontmatter,
    "structuredData",
    ()=>structuredData,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
;
let frontmatter = {
    "title": "Button",
    "description": "クリック可能なボタンコンポーネント"
};
let structuredData = {
    "contents": [
        {
            "heading": "variants",
            "content": "variant"
        },
        {
            "heading": "variants",
            "content": "説明"
        },
        {
            "heading": "variants",
            "content": "default"
        },
        {
            "heading": "variants",
            "content": "塗りつぶし"
        },
        {
            "heading": "variants",
            "content": "destructive"
        },
        {
            "heading": "variants",
            "content": "危険なアクション"
        },
        {
            "heading": "variants",
            "content": "outline"
        },
        {
            "heading": "variants",
            "content": "ボーダーのみ"
        },
        {
            "heading": "variants",
            "content": "secondary"
        },
        {
            "heading": "variants",
            "content": "セカンダリカラー"
        },
        {
            "heading": "variants",
            "content": "ghost"
        },
        {
            "heading": "variants",
            "content": "透明背景"
        },
        {
            "heading": "variants",
            "content": "link"
        },
        {
            "heading": "variants",
            "content": "リンクスタイル"
        },
        {
            "heading": "sizes",
            "content": "size"
        },
        {
            "heading": "sizes",
            "content": "説明"
        },
        {
            "heading": "sizes",
            "content": "default"
        },
        {
            "heading": "sizes",
            "content": "標準サイズ"
        },
        {
            "heading": "sizes",
            "content": "sm"
        },
        {
            "heading": "sizes",
            "content": "小さめ"
        },
        {
            "heading": "sizes",
            "content": "lg"
        },
        {
            "heading": "sizes",
            "content": "大きめ"
        },
        {
            "heading": "sizes",
            "content": "icon"
        },
        {
            "heading": "sizes",
            "content": "アイコン用正方形"
        }
    ],
    "headings": [
        {
            "id": "preview",
            "content": "Preview"
        },
        {
            "id": "installation",
            "content": "Installation"
        },
        {
            "id": "usage",
            "content": "Usage"
        },
        {
            "id": "variants",
            "content": "Variants"
        },
        {
            "id": "sizes",
            "content": "Sizes"
        }
    ]
};
let toc = [
    {
        depth: 2,
        url: "#preview",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Preview"
        })
    },
    {
        depth: 2,
        url: "#installation",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Installation"
        })
    },
    {
        depth: 2,
        url: "#usage",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Usage"
        })
    },
    {
        depth: 2,
        url: "#variants",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Variants"
        })
    },
    {
        depth: 2,
        url: "#sizes",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Sizes"
        })
    }
];
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h2: "h2",
        pre: "pre",
        span: "span",
        table: "table",
        tbody: "tbody",
        td: "td",
        th: "th",
        thead: "thead",
        tr: "tr",
        ...props.components
    }, { ButtonPreview, ComponentPreview } = _components;
    if (!ButtonPreview) _missingMdxReference("ButtonPreview", true);
    if (!ComponentPreview) _missingMdxReference("ComponentPreview", true);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "preview",
                children: "Preview"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(ComponentPreview, {
                component: "button",
                example: "preview",
                code: `<ButtonPreview />`,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(ButtonPreview, {})
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "installation",
                children: "Installation"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                        "--shiki-light": "#24292e",
                        "--shiki-dark": "#e1e4e8",
                        "--shiki-light-bg": "#fff",
                        "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.span, {
                            className: "line",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                    },
                                    children: "npx"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: " shadcn"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: " add"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: " https://ui.tyap.me/r/button.json"
                                })
                            ]
                        })
                    })
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "usage",
                children: "Usage"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                        "--shiki-light": "#24292e",
                        "--shiki-dark": "#e1e4e8",
                        "--shiki-light-bg": "#fff",
                        "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.code, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.span, {
                                className: "line",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "import"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " { Button } "
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "from"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " \"@/components/ui/button\""
                                    })
                                ]
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                className: "line"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.span, {
                                className: "line",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "export"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: " default"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: " function"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: " Page"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "() {"
                                    })
                                ]
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.span, {
                                className: "line",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "  return"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " <"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#005CC5",
                                            "--shiki-dark": "#79B8FF"
                                        },
                                        children: "Button"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ">送信</"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#005CC5",
                                            "--shiki-dark": "#79B8FF"
                                        },
                                        children: "Button"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ">"
                                    })
                                ]
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                className: "line",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                    },
                                    children: "}"
                                })
                            })
                        ]
                    })
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "variants",
                children: "Variants"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.table, {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.thead, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.th, {
                                    children: "variant"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.th, {
                                    children: "説明"
                                })
                            ]
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tbody, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "default"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "塗りつぶし"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "destructive"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "危険なアクション"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "outline"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "ボーダーのみ"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "secondary"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "セカンダリカラー"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "ghost"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "透明背景"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "link"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "リンクスタイル"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "sizes",
                children: "Sizes"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.table, {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.thead, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.th, {
                                    children: "size"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.th, {
                                    children: "説明"
                                })
                            ]
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tbody, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "default"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "標準サイズ"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "sm"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "小さめ"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "lg"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "大きめ"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.tr, {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "icon"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.td, {
                                        children: "アイコン用正方形"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
}),
"[project]/content/docs/index.mdx.js?collection=docs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MDXContent,
    "frontmatter",
    ()=>frontmatter,
    "structuredData",
    ()=>structuredData,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
;
let frontmatter = {
    "title": "はじめに",
    "description": "コピー&ペーストで使える、プロダクション対応のUIコンポーネント集。"
};
let structuredData = {
    "contents": [
        {
            "heading": "tyapui-とは",
            "content": "再利用可能な UI コンポーネントのレジストリです。shadcn/ui と同じ仕組みで、`npx shadcn add` コマンドでプロジェクトに直接コンポーネントを追加できます。"
        },
        {
            "heading": "設計方針",
            "content": "**コピー&ペースト** — npm パッケージではなく、コードを直接所有"
        },
        {
            "heading": "設計方針",
            "content": "**カスタマイズ可能** — Tailwind CSS + CSS 変数でスタイルを完全制御"
        },
        {
            "heading": "設計方針",
            "content": "**アクセシブル** — WAI-ARIA に準拠"
        },
        {
            "heading": "設計方針",
            "content": "**TypeScript** — 型安全な props 設計"
        }
    ],
    "headings": [
        {
            "id": "tyapui-とは",
            "content": "tyap/ui とは"
        },
        {
            "id": "インストール",
            "content": "インストール"
        },
        {
            "id": "設計方針",
            "content": "設計方針"
        }
    ]
};
let toc = [
    {
        depth: 2,
        url: "#tyapui-とは",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "tyap/ui とは"
        })
    },
    {
        depth: 2,
        url: "#インストール",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "インストール"
        })
    },
    {
        depth: 2,
        url: "#設計方針",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "設計方針"
        })
    }
];
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h2: "h2",
        li: "li",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong",
        ul: "ul",
        ...props.components
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "tyapui-とは",
                children: "tyap/ui とは"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.p, {
                children: [
                    "再利用可能な UI コンポーネントのレジストリです。shadcn/ui と同じ仕組みで、",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                        children: "npx shadcn add"
                    }),
                    " コマンドでプロジェクトに直接コンポーネントを追加できます。"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "インストール",
                children: "インストール"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                        "--shiki-light": "#24292e",
                        "--shiki-dark": "#e1e4e8",
                        "--shiki-light-bg": "#fff",
                        "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.span, {
                            className: "line",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                    },
                                    children: "npx"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: " shadcn"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: " add"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: " https://ui.tyap.me/r/button.json"
                                })
                            ]
                        })
                    })
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "設計方針",
                children: "設計方針"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "コピー&ペースト"
                            }),
                            " — npm パッケージではなく、コードを直接所有"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "カスタマイズ可能"
                            }),
                            " — Tailwind CSS + CSS 変数でスタイルを完全制御"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "アクセシブル"
                            }),
                            " — WAI-ARIA に準拠"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "TypeScript"
                            }),
                            " — 型安全な props 設計"
                        ]
                    }),
                    "\n"
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
}),
"[project]/.source/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "docs",
    ()=>docs
]);
// @ts-nocheck
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$components$2f$button$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/docs/components/button.mdx.js?collection=docs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$index$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/docs/index.mdx.js?collection=docs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$mdx$40$14$2e$3$2e$2_$40$types$2b$mdast$40$4$2e$0$2e$4_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$40$19$2e$2$2e$15_fumadocs$2d$_fc6c0b92e02dd7cc08f4188ca53f2769$2f$node_modules$2f$fumadocs$2d$mdx$2f$dist$2f$runtime$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-mdx@14.3.2_@types+mdast@4.0.4_@types+mdx@2.0.13_@types+react@19.2.15_fumadocs-_fc6c0b92e02dd7cc08f4188ca53f2769/node_modules/fumadocs-mdx/dist/runtime/server.js [app-rsc] (ecmascript)");
;
;
;
const create = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$mdx$40$14$2e$3$2e$2_$40$types$2b$mdast$40$4$2e$0$2e$4_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$40$19$2e$2$2e$15_fumadocs$2d$_fc6c0b92e02dd7cc08f4188ca53f2769$2f$node_modules$2f$fumadocs$2d$mdx$2f$dist$2f$runtime$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["server"])({
    "doc": {
        "passthroughs": [
            "extractedReferences"
        ]
    }
});
const docs = await create.docs("docs", "content/docs", {}, {
    "index.mdx": __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$index$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    "components/button.mdx": __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$components$2f$button$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/source.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "source",
    ()=>source
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/source/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$loader$2d$DWaWaGZg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__loader$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/loader-DWaWaGZg.js [app-rsc] (ecmascript) <export n as loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$source$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.source/server.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$source$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$source$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$loader$2d$DWaWaGZg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__loader$3e$__["loader"])({
    baseUrl: "/docs",
    source: __TURBOPACK__imported__module__$5b$project$5d2f2e$source$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["docs"].toFumadocsSource()
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/docs/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/source.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function Layout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocsLayout"], {
        tree: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["source"].pageTree,
        nav: {
            title: "tyap/ui"
        },
        sidebar: {
            collapsible: false
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/docs/layout.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/docs/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/docs/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/utils/urls.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isActive",
    ()=>isActive,
    "normalize",
    ()=>normalize
]);
//#region src/utils/urls.ts
function normalize(urlOrPath) {
    if (urlOrPath.length > 1 && urlOrPath.endsWith("/")) return urlOrPath.slice(0, -1);
    return urlOrPath;
}
/**
* @returns if `href` is matching the given pathname
*/ function isActive(href, pathname, nested = false) {
    href = normalize(href);
    pathname = normalize(pathname);
    return href === pathname || nested && pathname.startsWith(`${href}/`);
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkItem",
    ()=>LinkItem,
    "baseSlots",
    ()=>baseSlots
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LinkItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LinkItem() from the server but LinkItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js <module evaluation>", "LinkItem");
const baseSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call baseSlots() from the server but baseSlots is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js <module evaluation>", "baseSlots");
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkItem",
    ()=>LinkItem,
    "baseSlots",
    ()=>baseSlots
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LinkItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LinkItem() from the server but LinkItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js", "LinkItem");
const baseSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call baseSlots() from the server but baseSlots is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js", "baseSlots");
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$shared$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$shared$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$shared$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/utils-BFW0mEx9.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>flattenTree,
    "c",
    ()=>visit,
    "i",
    ()=>findSiblings,
    "n",
    ()=>findParent,
    "o",
    ()=>getPageTreePeers,
    "r",
    ()=>findPath,
    "s",
    ()=>getPageTreeRoots,
    "t",
    ()=>findNeighbour
]);
//#region src/page-tree/utils.ts
/**
* Flatten tree to an array of page nodes
*/ function flattenTree(nodes) {
    const out = [];
    for (const node of nodes)if (node.type === "folder") {
        if (node.index) out.push(node.index);
        out.push(...flattenTree(node.children));
    } else if (node.type === "page") out.push(node);
    return out;
}
/**
* Get neighbours of a page, useful for implementing "previous & next" buttons
*/ function findNeighbour(tree, url, options) {
    const { separateRoot = true } = options ?? {};
    const roots = separateRoot ? getPageTreeRoots(tree) : [
        tree
    ];
    if (tree.fallback) roots.push(tree.fallback);
    for (const root of roots){
        const list = flattenTree(root.children);
        const idx = list.findIndex((item)=>item.url === url);
        if (idx === -1) continue;
        return {
            previous: list[idx - 1],
            next: list[idx + 1]
        };
    }
    return {};
}
function getPageTreeRoots(pageTree) {
    const result = pageTree.children.flatMap((child)=>{
        if (child.type !== "folder") return [];
        const roots = getPageTreeRoots(child);
        if (child.root) roots.push(child);
        return roots;
    });
    if (!pageTree.type || pageTree.type === "root") result.push(pageTree);
    return result;
}
/**
* Get other **page** nodes that lives under the same parent.
*
* note: folders & its index nodes are not considered, use `findSiblings()` for more control.
*/ function getPageTreePeers(treeOrTrees, url) {
    return findSiblings(treeOrTrees, url).filter((item)=>item.type === "page");
}
/**
* Get other tree nodes that lives under the same parent.
*/ function findSiblings(treeOrTrees, url) {
    if ("children" in treeOrTrees) {
        const parent = findParent(treeOrTrees, url);
        if (!parent) return [];
        return parent.children.filter((item)=>item.type !== "page" || item.url !== url);
    }
    for(const lang in treeOrTrees){
        const result = findSiblings(treeOrTrees[lang], url);
        if (result.length > 0) return result;
    }
    return [];
}
function findParent(from, url) {
    let result;
    visit(from, (node, parent)=>{
        if (node.type === "page" && node.url === url) {
            result = parent;
            return "break";
        }
    });
    return result;
}
/**
* Search the path of a node in the tree matched by the matcher.
*
* @returns The path to the target node (from starting root), or null if the page doesn't exist
*/ function findPath(nodes, matcher, options = {}) {
    const { includeSeparator = true } = options;
    function run(nodes) {
        let separator;
        for (const node of nodes){
            if (matcher(node)) {
                const items = [];
                if (separator) items.push(separator);
                items.push(node);
                return items;
            }
            if (node.type === "separator" && includeSeparator) {
                separator = node;
                continue;
            }
            if (node.type === "folder") {
                const items = node.index && matcher(node.index) ? [
                    node.index
                ] : run(node.children);
                if (items) {
                    items.unshift(node);
                    if (separator) items.unshift(separator);
                    return items;
                }
            }
        }
    }
    return run(nodes) ?? null;
}
const VisitBreak = Symbol("VisitBreak");
/**
* Perform a depth-first search on page tree visiting every node.
*
* @param root - the root of page tree to visit.
* @param visitor - function to receive nodes, return `skip` to skip the children of current node, `break` to stop the search entirely.
*/ function visit(root, visitor) {
    function onNode(node, parent) {
        const result = visitor(node, parent);
        switch(result){
            case "skip":
                return node;
            case "break":
                throw VisitBreak;
            default:
                if (result) node = result;
        }
        if ("index" in node && node.index) node.index = onNode(node.index, node);
        if ("fallback" in node && node.fallback) node.fallback = onNode(node.fallback, node);
        if ("children" in node) for(let i = 0; i < node.children.length; i++)node.children[i] = onNode(node.children[i], node);
        return node;
    }
    try {
        return onNode(root);
    } catch (e) {
        if (e === VisitBreak) return root;
        throw e;
    }
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/page-tree/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2d$BFW0mEx9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/utils-BFW0mEx9.js [app-rsc] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/utils-BFW0mEx9.js [app-rsc] (ecmascript) <export r as findPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2d$BFW0mEx9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2d$BFW0mEx9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/utils-BFW0mEx9.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLayoutTabs",
    ()=>getLayoutTabs,
    "isLayoutTabActive",
    ()=>isLayoutTabActive,
    "isLinkItemActive",
    ()=>isLinkItemActive,
    "resolveLinkItems",
    ()=>resolveLinkItems,
    "useLinkItems",
    ()=>useLinkItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$urls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/utils/urls.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$shared$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$page$2d$tree$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/page-tree/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2d$BFW0mEx9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__findPath$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/utils-BFW0mEx9.js [app-rsc] (ecmascript) <export r as findPath>");
;
;
;
;
;
//#region src/layouts/shared/index.tsx
const defaultTransform = (option, node)=>{
    if (!node.icon) return option;
    return {
        ...option,
        icon: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary",
            children: node.icon
        })
    };
};
function getLayoutTabs(tree, { transform = defaultTransform } = {}) {
    const results = [];
    function next(node, unlisted) {
        if ("root" in node && node.root) {
            const url = node.index?.url ?? node.children.find((node)=>node.type === "page")?.url;
            if (url) {
                const option = {
                    title: node.name,
                    icon: node.icon,
                    description: node.description,
                    url,
                    unlisted,
                    $folder: node
                };
                const mapped = transform ? transform(option, node) : option;
                if (mapped) results.push(mapped);
            }
        }
        for (const child of node.children)if (child.type === "folder") next(child, unlisted);
    }
    next(tree);
    if (tree.fallback) next(tree.fallback, true);
    return results;
}
function isLayoutTabActive(tab, pathname) {
    if (tab.$folder) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2d$BFW0mEx9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__findPath$3e$__["findPath"](tab.$folder.children, (node)=>node.type === "page" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$urls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isActive"])(node.url, pathname)) !== null;
    if (tab.urls) return tab.urls.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$urls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"])(pathname));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$urls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isActive"])(tab.url, pathname, true);
}
/**
* Get link items with shortcuts
*/ function resolveLinkItems({ links = [], githubUrl }) {
    const result = [
        ...links
    ];
    if (githubUrl) result.push({
        type: "icon",
        url: githubUrl,
        text: "Github",
        label: "GitHub",
        icon: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("svg", {
            role: "img",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            })
        }),
        external: true
    });
    return result;
}
function useLinkItems({ githubUrl, links }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const all = resolveLinkItems({
            links,
            githubUrl
        });
        const navItems = [];
        const menuItems = [];
        for (const item of all)switch(item.on){
            case "menu":
                menuItems.push(item);
                break;
            case "nav":
                navItems.push(item);
                break;
            default:
                navItems.push(item);
                menuItems.push(item);
        }
        return {
            navItems,
            menuItems,
            all
        };
    }, [
        links,
        githubUrl
    ]);
}
function isLinkItemActive(link, pathname) {
    if (link.type === "custom" || !link.url) return false;
    if (link.active === "none") return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$urls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isActive"])(link.url, pathname, link.active === "nested-url");
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutBody",
    ()=>LayoutBody,
    "useDocsLayout",
    ()=>useDocsLayout,
    "useIsDocsLayout",
    ()=>useIsDocsLayout
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LayoutBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LayoutBody() from the server but LayoutBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js <module evaluation>", "LayoutBody");
const useDocsLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocsLayout() from the server but useDocsLayout is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js <module evaluation>", "useDocsLayout");
const useIsDocsLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useIsDocsLayout() from the server but useIsDocsLayout is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js <module evaluation>", "useIsDocsLayout");
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutBody",
    ()=>LayoutBody,
    "useDocsLayout",
    ()=>useDocsLayout,
    "useIsDocsLayout",
    ()=>useIsDocsLayout
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LayoutBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LayoutBody() from the server but LayoutBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js", "LayoutBody");
const useDocsLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocsLayout() from the server but useDocsLayout is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js", "useDocsLayout");
const useIsDocsLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useIsDocsLayout() from the server but useIsDocsLayout is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js", "useIsDocsLayout");
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocsLayout",
    ()=>DocsLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/shared/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@16.9.0_@tailwindcss+oxide@4.3.0_@types+mdx@2.0.13_@types+react-dom@19.2.3_@_c0cf950547e79d65518747bb209faa01/node_modules/fumadocs-ui/dist/layouts/docs/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
//#region src/layouts/docs/index.tsx
function DocsLayout({ tree, sidebar: { tabs: _tabs, tabMode: _tabMode, ...sidebarProps } = {}, tabs: layoutTabs = _tabs, tabMode = _tabMode, children, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LayoutBody"], {
        tree,
        tabs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            if (Array.isArray(layoutTabs)) return layoutTabs;
            if (typeof layoutTabs === "object") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLayoutTabs"])(tree, layoutTabs);
            if (layoutTabs !== false) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$16$2e$9$2e$0_$40$tailwindcss$2b$oxide$40$4$2e$3$2e$0_$40$types$2b$mdx$40$2$2e$0$2e$13_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$_c0cf950547e79d65518747bb209faa01$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLayoutTabs"])(tree);
            return [];
        }, [
            tree,
            layoutTabs
        ]),
        tabMode,
        sidebar: sidebarProps,
        ...props,
        children
    });
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/chunk-CYJPkc-J.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>__exportAll,
    "r",
    ()=>__toESM,
    "t",
    ()=>__commonJSMin
]);
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod)=>()=>(mod || (cb((mod = {
            exports: {}
        }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols)=>{
    let target = {};
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
    if (!no_symbols) __defProp(target, Symbol.toStringTag, {
        value: "Module"
    });
    return target;
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") for(var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++){
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ((k)=>from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/path-CPgAF5cw.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>normalize,
    "i",
    ()=>joinPath,
    "n",
    ()=>dirname,
    "o",
    ()=>path_exports,
    "r",
    ()=>extname,
    "t",
    ()=>basename
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$CYJPkc$2d$J$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/chunk-CYJPkc-J.js [app-rsc] (ecmascript)");
;
//#region src/source/path.ts
var path_exports = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$CYJPkc$2d$J$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])({
    basename: ()=>basename,
    dirname: ()=>dirname,
    extname: ()=>extname,
    joinPath: ()=>joinPath,
    normalize: ()=>normalize,
    slash: ()=>slash,
    splitPath: ()=>splitPath
});
function basename(path, ext) {
    const idx = path.lastIndexOf("/");
    return path.substring(idx === -1 ? 0 : idx + 1, ext ? path.length - ext.length : path.length);
}
function extname(path) {
    for(let i = path.length - 1; i >= 0; i--){
        const c = path[i];
        if (c === ".") return path.substring(i);
        if (c === "/") return "";
    }
    return "";
}
function dirname(path) {
    const idx = path.lastIndexOf("/");
    if (idx === -1) return "";
    return path.substring(0, idx);
}
/**
* Split path into segments, trailing/leading slashes are removed
*/ function splitPath(path) {
    return path.split("/").filter((p)=>p.length > 0);
}
/**
* Resolve paths, slashes within the path will be ignored
* @param paths - Paths to join
* @example
* ```
* ['a','b'] // 'a/b'
* ['/a'] // 'a'
* ['a', '/b'] // 'a/b'
* ['a', '../b/c'] // 'b/c'
* ```
*/ function joinPath(...paths) {
    const out = [];
    for (const path of paths)for (const seg of path.split("/"))switch(seg){
        case "..":
            out.pop();
            break;
        case "":
        case ".":
            break;
        default:
            out.push(seg);
    }
    return out.join("/");
}
function slash(path) {
    if (path.startsWith("\\\\?\\")) return path;
    return path.replaceAll("\\", "/");
}
/**
* Convert (relative) file path to virtual file path.
*
* @param path - Relative path
* @returns Normalized path, with no trailing/leading slashes
* @throws Throws error if path starts with `./` or `../`
*/ function normalize(path) {
    const segments = path.split(/\/|\\/).filter((v)=>v.length > 0);
    if (segments[0] === "." || segments[0] === "..") throw new Error("It must not start with './' or '../'");
    return segments.join("/");
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/normalize-url-J3kqKlu4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>normalizeUrl
]);
//#region src/utils/normalize-url.tsx
/**
* normalize URL into the Fumadocs standard form (`/slug-1/slug-2`).
*
* This includes URLs with trailing slashes.
*/ function normalizeUrl(url) {
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    if (!url.startsWith("/")) url = "/" + url;
    if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);
    return url;
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/source/plugins/slugs.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSlugs",
    ()=>getSlugs,
    "slugsFromData",
    ()=>slugsFromData,
    "slugsPlugin",
    ()=>slugsPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/path-CPgAF5cw.js [app-rsc] (ecmascript)");
;
//#region src/source/plugins/slugs.ts
/**
* Generate slugs for pages if missing
*/ function slugsPlugin(slugFn) {
    function isIndex(file) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(file, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(file)) === "index";
    }
    return {
        name: "fumadocs:slugs",
        transformStorage ({ storage }) {
            const indexFiles = [];
            const taken = /* @__PURE__ */ new Set();
            for (const path of storage.getFiles()){
                const file = storage.read(path);
                if (!file || file.format !== "page" || file.slugs) continue;
                const customSlugs = slugFn?.(file);
                if (customSlugs === void 0 && isIndex(path)) {
                    indexFiles.push(path);
                    continue;
                }
                file.slugs = customSlugs ?? getSlugs(path);
                const key = file.slugs.join("/");
                if (taken.has(key)) throw new Error(`Duplicated slugs: ${key}`);
                taken.add(key);
            }
            for (const path of indexFiles){
                const file = storage.read(path);
                if (file?.format !== "page") continue;
                file.slugs = getSlugs(path);
                if (taken.has(file.slugs.join("/"))) file.slugs.push("index");
            }
        }
    };
}
/**
* Generate slugs from file data (e.g. frontmatter).
*
* @param key - the property name in file data to generate slugs, default to `slug`.
*/ function slugsFromData(key = "slug") {
    return (file)=>{
        const k = key;
        if (k in file.data && typeof file.data[k] === "string") return file.data[k].split("/").filter((v)=>v.length > 0);
    };
}
const GroupRegex = /^\(.+\)$/;
/**
* Convert file path into slugs, also encode non-ASCII characters, so they can work in pathname
*/ function getSlugs(file) {
    const dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(file);
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(file, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(file));
    const slugs = [];
    for (const seg of dir.split("/"))if (seg.length > 0 && !GroupRegex.test(seg)) slugs.push(encodeURI(seg));
    if (GroupRegex.test(name)) throw new Error(`Cannot use folder group in file names: ${file}`);
    if (name !== "index") slugs.push(encodeURI(name));
    return slugs;
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/icon-BbWo08Fw.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>iconPlugin
]);
//#region src/source/plugins/icon.ts
function iconPlugin(resolveIcon) {
    function replaceIcon(node) {
        if (node.icon === void 0 || typeof node.icon === "string") node.icon = resolveIcon(node.icon);
        return node;
    }
    return {
        name: "fumadocs:icon",
        transformPageTree: {
            file: replaceIcon,
            folder: replaceIcon,
            separator: replaceIcon
        }
    };
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/loader-DWaWaGZg.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>multiple,
    "c",
    ()=>FileSystem,
    "i",
    ()=>isStaticSource,
    "n",
    ()=>loader,
    "o",
    ()=>source,
    "r",
    ()=>isDynamicSource,
    "s",
    ()=>update,
    "t",
    ()=>createGetUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$normalize$2d$url$2d$J3kqKlu4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/normalize-url-J3kqKlu4.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2d$BFW0mEx9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/utils-BFW0mEx9.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/path-CPgAF5cw.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$plugins$2f$slugs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/source/plugins/slugs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$icon$2d$BbWo08Fw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/icon-BbWo08Fw.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
;
;
;
;
//#region src/source/storage/file-system.ts
/**
* In memory file system.
*/ var FileSystem = class {
    constructor(inherit){
        this.files = /* @__PURE__ */ new Map();
        this.folders = /* @__PURE__ */ new Map();
        if (inherit) {
            for (const [k, v1] of inherit.folders)this.folders.set(k, v1);
            for (const [k, v1] of inherit.files)this.files.set(k, v1);
        } else this.folders.set("", []);
    }
    read(path) {
        return this.files.get(path);
    }
    /**
	* get the direct children of folder (in virtual file path)
	*/ readDir(path) {
        return this.folders.get(path);
    }
    write(path, file) {
        if (!this.files.has(path)) {
            const dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(path);
            this.makeDir(dir);
            this.readDir(dir)?.push(path);
        }
        this.files.set(path, file);
    }
    /**
	* Delete files at specified path.
	*
	* @param path - the target path.
	* @param [recursive=false] - if set to `true`, it will also delete directories.
	*/ delete(path, recursive = false) {
        if (this.files.delete(path)) return true;
        if (recursive) {
            const folder = this.folders.get(path);
            if (!folder) return false;
            this.folders.delete(path);
            for (const child of folder)this.delete(child);
            return true;
        }
        return false;
    }
    getFiles() {
        return Array.from(this.files.keys());
    }
    makeDir(path) {
        const cur = [];
        let parentPath = "";
        for (const seg of path.split("/")){
            cur.push(seg);
            const curPath = cur.join("/");
            if (!this.folders.has(curPath)) {
                this.folders.set(curPath, []);
                this.folders.get(parentPath).push(curPath);
            }
            parentPath = curPath;
        }
    }
};
//#endregion
//#region src/source/source.ts
/**
* @deprecated you can directly pass a record of source objects to `loader()`.
*/ function multiple(sources) {
    const out = {};
    for(const k in sources)out[k] = {
        files: sources[k].files.map((file)=>({
                ...file,
                data: {
                    ...file.data,
                    type: k
                }
            }))
    };
    return out;
}
function source(config) {
    return {
        files: [
            ...config.pages,
            ...config.metas
        ]
    };
}
/**
* update a source object in-place.
*/ function update(source) {
    return {
        files (fn) {
            source.files = fn(source.files);
            return this;
        },
        page (fn) {
            for(let i = 0; i < source.files.length; i++){
                const file = source.files[i];
                if (file.type === "page") source.files[i] = fn(file);
            }
            return this;
        },
        meta (fn) {
            for(let i = 0; i < source.files.length; i++){
                const file = source.files[i];
                if (file.type === "meta") source.files[i] = fn(file);
            }
            return this;
        },
        build () {
            return source;
        }
    };
}
function isStaticSource(s) {
    return "files" in s && Array.isArray(s.files);
}
function isDynamicSource(s) {
    return "files" in s && typeof s.files === "function";
}
//#endregion
//#region src/source/storage/content.ts
const EmptyLang = Symbol();
/**
* convert input files into virtual file system.
*
* in the storage, locale codes are removed from file paths, hence the same file will have same file paths in every storage.
*/ function createContentStorageBuilder(loaderConfig) {
    const { input, plugins, i18n } = loaderConfig;
    let parser;
    if (!i18n) parser = (path)=>[
            path
        ];
    else if (i18n.parser === "dir") {
        const langSet = new Set(i18n.languages);
        parser = (path)=>{
            const [locale, ...segs] = path.split("/");
            if (!locale || segs.length === 0) return [
                path
            ];
            if (langSet.has(locale)) return [
                segs.join("/"),
                locale
            ];
            if (locale === "$") return [
                segs.join("/"),
                i18n.languages
            ];
            return [
                path
            ];
        };
    } else {
        const langSet = new Set(i18n.languages);
        parser = (path)=>{
            const segs = path.split("/");
            const base = segs.pop();
            if (!base) return [
                path
            ];
            const parts = base.split(".");
            if (parts.length < 3) return [
                path
            ];
            const [locale] = parts.splice(parts.length - 2, 1);
            segs.push(parts.join("."));
            if (langSet.has(locale)) return [
                segs.join("/"),
                locale
            ];
            if (locale === "$") return [
                segs.join("/"),
                i18n.languages
            ];
            return [
                path
            ];
        };
    }
    const fileMap = /* @__PURE__ */ new Map();
    function scan(type, source) {
        for (const inputFile of source.files){
            let file;
            if (inputFile.type === "page") file = {
                format: "page",
                type,
                path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(inputFile.path),
                slugs: inputFile.slugs,
                data: inputFile.data,
                absolutePath: inputFile.absolutePath
            };
            else file = {
                format: "meta",
                type,
                path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(inputFile.path),
                absolutePath: inputFile.absolutePath,
                data: inputFile.data
            };
            const [storageKey, locale = i18n ? i18n.defaultLanguage : EmptyLang] = parser(file.path);
            const entry = [
                storageKey,
                file
            ];
            if (Array.isArray(locale)) for (const item of locale)pushMapList(fileMap, item, entry);
            else pushMapList(fileMap, locale, entry);
        }
    }
    if (isStaticSource(input)) scan(void 0, input);
    else for(const k in input)scan(k, input[k]);
    function makeStorage(locale, inherit) {
        const storage = new FileSystem(inherit);
        for (const [storageKey, file] of fileMap.get(locale) ?? [])storage.write(storageKey, file);
        const context = {
            storage
        };
        for (const plugin of plugins)plugin.transformStorage?.(context);
        return storage;
    }
    return {
        i18n () {
            const storages = {};
            if (!i18n) return storages;
            const fallbackLang = i18n.fallbackLanguage !== null ? i18n.fallbackLanguage ?? i18n.defaultLanguage : null;
            function scan(lang) {
                if (storages[lang]) return storages[lang];
                return storages[lang] = makeStorage(lang, fallbackLang && fallbackLang !== lang ? scan(fallbackLang) : void 0);
            }
            for (const lang of i18n.languages)scan(lang);
            return storages;
        },
        single () {
            return makeStorage(EmptyLang);
        }
    };
}
function pushMapList(map, k, v1) {
    let list = map.get(k);
    if (!list) {
        list = [];
        map.set(k, list);
    }
    list.push(v1);
}
//#endregion
//#region src/source/page-tree/transformer-fallback.ts
function transformerFallback() {
    const addedFiles = /* @__PURE__ */ new Set();
    function shouldIgnore(context) {
        return context.custom?._fallback === true;
    }
    return {
        root (root) {
            if (shouldIgnore(this)) return root;
            const isolatedStorage = new FileSystem();
            if (addedFiles.size === this.storage.files.size) return root;
            for (const file of this.storage.getFiles()){
                if (addedFiles.has(file)) continue;
                isolatedStorage.write(file, this.storage.read(file));
            }
            root.fallback = createPageTreeBuilder(isolatedStorage, {
                ...this.options,
                idPrefix: this.options.idPrefix ? `fallback:${this.options.idPrefix}` : "fallback",
                generateFallback: false,
                context: {
                    ...this.custom,
                    _fallback: true
                }
            }).root();
            addedFiles.clear();
            return root;
        },
        file (node, file) {
            if (shouldIgnore(this)) return node;
            if (file) addedFiles.add(file);
            return node;
        },
        folder (node, _dir, metaPath) {
            if (shouldIgnore(this)) return node;
            if (metaPath) addedFiles.add(metaPath);
            return node;
        }
    };
}
//#endregion
//#region src/source/page-tree/builder.ts
const group = /^\((?<name>.+)\)$/;
const link = /^(?<external>external:)?(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/;
const separator = /^---(?:\[(?<icon>[^\]]+)])?(?<name>.+)---|^---$/;
const rest = "...";
const restReversed = "z...a";
const extractPrefix = "...";
const excludePrefix = "!";
const SymbolUnfinished = Symbol("unfinished");
const SymbolName = Symbol("name");
const SymbolOwner = Symbol("owner");
function createPageTreeBuilder(input, options) {
    const flattenPathToFullPath = /* @__PURE__ */ new Map();
    const transformers = [];
    /** virtual file path -> output page tree node (if cached) */ const pathToNode = /* @__PURE__ */ new Map();
    let _nextId = 0;
    const { noRef = false, idPrefix, url: getUrl, generateFallback = true, sort: { by: sortBy = "path", locales: sortLocales, options: sortOptions } = {} } = options;
    /** passed as additional information to transformers */ let ctx;
    if (options.transformers) transformers.push(...options.transformers);
    if (generateFallback) transformers.push(transformerFallback());
    if (Array.isArray(input)) {
        const [locale, storages] = input;
        ctx = {
            get builder () {
                return builder;
            },
            storage: storages[locale],
            storages,
            locale,
            transformers,
            custom: options.context,
            options
        };
    } else ctx = {
        get builder () {
            return builder;
        },
        storage: input,
        transformers,
        custom: options.context,
        options
    };
    const { storage, locale } = ctx;
    for (const file of storage.getFiles()){
        const content = storage.read(file);
        const flattenPath = file.substring(0, file.length - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(file).length);
        flattenPathToFullPath.set(flattenPath + "." + content.format, file);
    }
    function resolveFlattenPath(name, format) {
        return flattenPathToFullPath.get(name + "." + format) ?? name;
    }
    /**
	* try to register as the owner of `node`.
	*
	* when a node is referenced by multiple folders, this determines which folder they should belong to.
	*
	* @returns whether the owner owns the node.
	*/ function own(ownerPath, node, priority) {
        if (node[SymbolUnfinished]) return false;
        const existing = node[SymbolOwner];
        if (!existing) {
            node[SymbolOwner] = {
                owner: ownerPath,
                priority
            };
            return true;
        }
        if (existing.owner === ownerPath) {
            existing.priority = Math.max(existing.priority, priority);
            return true;
        }
        if (existing.priority >= priority) return false;
        const folder = pathToNode.get(existing.owner);
        if (folder && folder.type === "folder") if (folder.index === node) delete folder.index;
        else {
            const idx = folder.children.indexOf(node);
            if (idx !== -1) folder.children.splice(idx, 1);
        }
        existing.owner = ownerPath;
        existing.priority = priority;
        return true;
    }
    function transferOwner(ownerPath, node) {
        const existing = node[SymbolOwner];
        if (existing) existing.owner = ownerPath;
    }
    function generateId(localId = `_${_nextId++}`) {
        let id = localId;
        if (locale) id = `${locale}:${id}`;
        if (idPrefix) id = `${idPrefix}:${id}`;
        return id;
    }
    function buildPaths(paths, filter, reversed = false) {
        const nodeToPath = /* @__PURE__ */ new Map();
        let indexNode;
        for (const path of paths){
            if (filter && !filter(path)) continue;
            const fileNode = buildFile(path);
            if (fileNode) {
                nodeToPath.set(fileNode, path);
                if (!indexNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(path, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(path)) === "index") indexNode = fileNode;
                continue;
            }
            const dirNode = buildFolder(path);
            if (dirNode) nodeToPath.set(dirNode, path);
        }
        const factor = reversed ? -1 : 1;
        const useName = sortBy === "name";
        return Array.from(nodeToPath.keys()).sort((a, b)=>{
            if (a === indexNode) return -100;
            if (b === indexNode) return 100;
            const aT = useName && a[SymbolName] || nodeToPath.get(a);
            const bT = useName && b[SymbolName] || nodeToPath.get(b);
            const aK = a.type === "folder" ? 10 : 0;
            const bK = b.type === "folder" ? 10 : 0;
            return factor * (aT.localeCompare(bT, sortLocales, sortOptions) + (aK - bK));
        });
    }
    function resolveFolderItem(folderPath, item, outputArray, excludedPaths) {
        if (item === rest || item === restReversed) {
            outputArray.push(item);
            return;
        }
        let match = separator.exec(item);
        if (match?.groups) {
            let node = {
                $id: generateId(),
                type: "separator",
                icon: match.groups.icon,
                name: match.groups.name
            };
            for (const transformer of transformers){
                if (!transformer.separator) continue;
                node = transformer.separator.call(ctx, node);
            }
            outputArray.push(node);
            return;
        }
        match = link.exec(item);
        if (match?.groups) {
            const { icon, url, name, external } = match.groups;
            let node = {
                $id: generateId(),
                type: "page",
                icon,
                name,
                url
            };
            if (external) node.external = true;
            for (const transformer of transformers){
                if (!transformer.file) continue;
                node = transformer.file.call(ctx, node);
            }
            outputArray.push(node);
            return;
        }
        if (item.startsWith(excludePrefix)) {
            const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(folderPath, item.slice(1));
            excludedPaths.add(path);
            excludedPaths.add(resolveFlattenPath(path, "page"));
            return;
        }
        if (item.startsWith(extractPrefix)) {
            const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(folderPath, item.slice(3));
            const node = buildFolder(path);
            if (!node) return;
            const children = node.index ? [
                node.index,
                ...node.children
            ] : node.children;
            if (own(folderPath, node, 2)) {
                for (const child of children){
                    transferOwner(folderPath, child);
                    outputArray.push(child);
                }
                excludedPaths.add(path);
            } else for (const child of children)if (own(folderPath, child, 2)) outputArray.push(child);
            return;
        }
        let path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(folderPath, item);
        let node = buildFolder(path);
        if (!node) {
            path = resolveFlattenPath(path, "page");
            node = buildFile(path);
        }
        if (!node || !own(folderPath, node, 2)) return;
        outputArray.push(node);
        excludedPaths.add(path);
    }
    function buildFolder(folderPath) {
        const cached = pathToNode.get(folderPath);
        if (cached) return cached;
        const files = storage.readDir(folderPath);
        if (!files) return;
        const isGlobalRoot = folderPath === "";
        const metaPath = resolveFlattenPath((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(folderPath, "meta"), "meta");
        const indexPath = resolveFlattenPath((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(folderPath, "index"), "page");
        let meta = storage.read(metaPath);
        if (meta && meta.format !== "meta") meta = void 0;
        const metadata = meta?.data ?? {};
        let node = {
            type: "folder",
            name: null,
            root: metadata.root,
            defaultOpen: metadata.defaultOpen,
            description: metadata.description,
            collapsible: metadata.collapsible,
            children: [],
            $id: generateId(folderPath),
            $ref: !noRef && meta ? metaPath : void 0,
            [SymbolUnfinished]: true
        };
        pathToNode.set(folderPath, node);
        if (!(metadata.root ?? isGlobalRoot)) {
            const fileNode = buildFile(indexPath);
            if (fileNode && own(folderPath, fileNode, 0)) node.index = fileNode;
        }
        if (metadata.pages) {
            const outputArray = [];
            const excludedPaths = /* @__PURE__ */ new Set();
            for (const item of metadata.pages)resolveFolderItem(folderPath, item, outputArray, excludedPaths);
            if (excludedPaths.has(indexPath)) delete node.index;
            else if (node.index) excludedPaths.add(indexPath);
            for (const item of outputArray){
                if (item !== rest && item !== restReversed) {
                    node.children.push(item);
                    continue;
                }
                const resolvedItem = buildPaths(files, (file)=>!excludedPaths.has(file), item === restReversed);
                for (const child of resolvedItem)if (own(folderPath, child, 0)) node.children.push(child);
            }
        } else for (const item of buildPaths(files, node.index ? (file)=>file !== indexPath : void 0))if (own(folderPath, item, 0)) node.children.push(item);
        node.icon = metadata.icon ?? node.index?.icon;
        node.name = metadata.title ?? node.index?.name;
        node[SymbolName] = metadata.title ?? node.index?.[SymbolName];
        if (!node.name) {
            const folderName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(folderPath);
            node.name = pathToName(group.exec(folderName)?.[1] ?? folderName);
        }
        for (const transformer of transformers){
            if (!transformer.folder) continue;
            node = transformer.folder.call(ctx, node, folderPath, meta ? metaPath : void 0);
        }
        pathToNode.set(folderPath, node);
        delete node[SymbolUnfinished];
        return node;
    }
    function buildFile(path) {
        const cached = pathToNode.get(path);
        if (cached) return cached;
        const page = storage.read(path);
        if (!page || page.format !== "page") return;
        const { title, description, icon } = page.data;
        let item = {
            $id: generateId(path),
            type: "page",
            name: title ?? pathToName((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(path, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(path))),
            description,
            icon,
            url: getUrl(page.slugs, ctx.locale),
            $ref: !noRef ? path : void 0,
            [SymbolName]: title
        };
        for (const transformer of transformers){
            if (!transformer.file) continue;
            item = transformer.file.call(ctx, item, path);
        }
        pathToNode.set(path, item);
        return item;
    }
    const builder = {
        resolveFlattenPath,
        root (id = "root", path = "") {
            const node = buildFolder(path);
            let root = {
                type: "root",
                $ref: node?.$ref,
                $id: generateId(id),
                name: node?.name || "Docs",
                description: node?.description,
                children: node ? node.children : []
            };
            for (const transformer of transformers){
                if (!transformer.root) continue;
                root = transformer.root.call(ctx, root);
            }
            for (const node of pathToNode.values()){
                delete node[SymbolName];
                delete node[SymbolOwner];
            }
            return root;
        }
    };
    return builder;
}
/**
* Get item name from file name
*
* @param name - file name
*/ function pathToName(name) {
    const result = [];
    for (const c of name)if (result.length === 0) result.push(c.toLocaleUpperCase());
    else if (c === "-") result.push(" ");
    else result.push(c);
    return result.join("");
}
//#endregion
//#region src/source/loader.ts
function createPageIndexer({ url }) {
    const pages = /* @__PURE__ */ new Map();
    const pathToMeta = /* @__PURE__ */ new Map();
    const pathToPage = /* @__PURE__ */ new Map();
    return {
        scan (storage, lang) {
            for (const filePath of storage.getFiles()){
                const item = storage.read(filePath);
                const prefix = lang ? `${lang}.` : ".";
                const path = prefix + filePath;
                if (item.format === "meta") {
                    pathToMeta.set(path, {
                        type: item.type,
                        path: item.path,
                        absolutePath: item.absolutePath,
                        data: item.data
                    });
                    continue;
                }
                const page = {
                    type: item.type,
                    path: item.path,
                    absolutePath: item.absolutePath,
                    url: url(item.slugs, lang),
                    slugs: item.slugs,
                    data: item.data,
                    locale: lang
                };
                pathToPage.set(path, page);
                pages.set(prefix + page.slugs.join("/"), page);
            }
        },
        getPage (path, lang = "") {
            return pathToPage.get(`${lang}.${path}`);
        },
        getMeta (path, lang = "") {
            return pathToMeta.get(`${lang}.${path}`);
        },
        getPageBySlugs (slugs, lang = "") {
            let page = pages.get(`${lang}.${slugs.join("/")}`);
            if (page) return page;
            page = pages.get(`${lang}.${slugs.map(decodeURI).join("/")}`);
            if (page) return page;
        },
        /** do not filter by language if `lang` is not specified */ getPages (lang) {
            const out = [];
            for (const [key, value] of pages.entries())if (lang === void 0 || key.startsWith(`${lang}.`)) out.push(value);
            return out;
        }
    };
}
function createGetUrl(baseUrl, i18n) {
    const baseSlugs = baseUrl.split("/");
    return (slugs, locale)=>{
        const hideLocale = i18n?.hideLocale ?? "never";
        let urlLocale;
        if (hideLocale === "never") urlLocale = locale;
        else if (hideLocale === "default-locale" && locale !== i18n?.defaultLanguage) urlLocale = locale;
        const paths = [
            ...baseSlugs,
            ...slugs
        ];
        if (urlLocale) paths.unshift(urlLocale);
        return `/${paths.filter((v1)=>v1.length > 0).join("/")}`;
    };
}
function loader(...args) {
    const loaderConfig = args.length === 2 ? resolveConfig(args[0], args[1]) : resolveConfig(args[0].source, args[0]);
    const { i18n } = loaderConfig;
    const storage = i18n ? createContentStorageBuilder(loaderConfig).i18n() : createContentStorageBuilder(loaderConfig).single();
    const indexer = createPageIndexer(loaderConfig);
    if (storage instanceof FileSystem) indexer.scan(storage);
    else for(const locale in storage)indexer.scan(storage[locale], locale);
    let pageTrees;
    function getPageTrees() {
        if (pageTrees) return pageTrees;
        const { plugins, url, pageTree: pageTreeConfig } = loaderConfig;
        const transformers = [];
        if (pageTreeConfig?.transformers) transformers.push(...pageTreeConfig.transformers);
        for (const plugin of plugins)if (plugin.transformPageTree) transformers.push(plugin.transformPageTree);
        const options = {
            url,
            ...pageTreeConfig,
            transformers
        };
        if (storage instanceof FileSystem) return pageTrees = createPageTreeBuilder(storage, options).root();
        else {
            const out = {};
            for(const locale in storage)out[locale] = createPageTreeBuilder([
                locale,
                storage
            ], options).root();
            return pageTrees = out;
        }
    }
    return {
        _i18n: i18n,
        get pageTree () {
            return getPageTrees();
        },
        set pageTree (v){
            pageTrees = v;
        },
        getPageByHref (href, { dir = "", language = i18n?.defaultLanguage } = {}) {
            const [value, hash] = href.split("#", 2);
            let target;
            if (value.startsWith("./") || value.startsWith("../")) {
                const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(dir, value);
                target = indexer.getPage(path, language);
            } else target = this.getPages(language).find((item)=>item.url === value);
            if (target) return {
                page: target,
                hash
            };
        },
        resolveHref (href, parent) {
            if (href.startsWith("./") || href.startsWith("../")) {
                const target = this.getPageByHref(href, {
                    dir: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(parent.path),
                    language: parent.locale
                });
                if (target) return target.hash ? `${target.page.url}#${target.hash}` : target.page.url;
            }
            return href;
        },
        getPages (language) {
            return indexer.getPages(language);
        },
        getLanguages () {
            const list = [];
            if (!i18n) return list;
            for (const language of i18n.languages)list.push({
                language,
                pages: this.getPages(language)
            });
            return list;
        },
        getPage (slugs = [], language = i18n?.defaultLanguage) {
            return indexer.getPageBySlugs(slugs, language);
        },
        getNodeMeta (node, language = i18n?.defaultLanguage) {
            const ref = node.$ref;
            if (!ref) return;
            return indexer.getMeta(ref, language);
        },
        getNodePage (node, language = i18n?.defaultLanguage) {
            const ref = node.$ref;
            if (!ref) return;
            return indexer.getPage(ref, language);
        },
        getPageTree (locale) {
            if (i18n) {
                const trees = getPageTrees();
                if (locale && trees[locale]) return trees[locale];
                return trees[i18n.defaultLanguage];
            }
            return getPageTrees();
        },
        generateParams (slug, lang) {
            if (i18n) return this.getLanguages().flatMap((entry)=>entry.pages.map((page)=>({
                        [slug ?? "slug"]: page.slugs,
                        [lang ?? "lang"]: entry.language
                    })));
            return this.getPages().map((page)=>({
                    [slug ?? "slug"]: page.slugs
                }));
        },
        async serializePageTree (tree) {
            const { renderToString } = await __turbopack_context__.A("[project]/node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react-dom/server.edge.js [app-rsc] (ecmascript, async loader)");
            return {
                $fumadocs_loader: "page-tree",
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2d$BFW0mEx9$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(tree, (node)=>{
                    node = {
                        ...node
                    };
                    if ("icon" in node && node.icon) node.icon = renderToString(node.icon);
                    if (node.name) node.name = renderToString(node.name);
                    if ("children" in node) node.children = [
                        ...node.children
                    ];
                    return node;
                })
            };
        }
    };
}
function resolveConfig(input, { slugs, icon, plugins = [], baseUrl, url, ...base }) {
    let config = {
        ...base,
        url: url ? (...args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$normalize$2d$url$2d$J3kqKlu4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(url(...args)) : createGetUrl(baseUrl, base.i18n),
        input,
        plugins: buildPlugins([
            icon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$icon$2d$BbWo08Fw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(icon),
            ...typeof plugins === "function" ? plugins({
                typedPlugin: (plugin)=>plugin
            }) : plugins,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$plugins$2f$slugs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["slugsPlugin"])(slugs)
        ])
    };
    for (const plugin of config.plugins){
        const result = plugin.config?.(config);
        if (result) config = result;
    }
    return config;
}
const priorityMap = {
    pre: 1,
    default: 0,
    post: -1
};
function buildPlugins(plugins, sort = true) {
    const flatten = [];
    for (const plugin of plugins)if (Array.isArray(plugin)) flatten.push(...buildPlugins(plugin, false));
    else if (plugin) flatten.push(plugin);
    if (sort) return flatten.sort((a, b)=>priorityMap[b.enforce ?? "default"] - priorityMap[a.enforce ?? "default"]);
    return flatten;
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/source/llms.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "llms",
    ()=>llms
]);
//#region src/source/llms.ts
function llms(loader, config = {}) {
    const { TAB = "  ", renderName = (node, ctx)=>{
        if (node.type === "page") {
            const page = loader.getNodePage(node, ctx.lang);
            if (page?.data.title) return page.data.title;
        } else if (node.type !== "separator") {
            const meta = loader.getNodeMeta(node, ctx.lang);
            if (meta?.data.title) return meta.data.title;
        }
        return typeof node.name === "string" ? node.name : "";
    }, renderDescription = (node, ctx)=>{
        if (node.type === "page") {
            const page = loader.getNodePage(node, ctx.lang);
            if (page?.data.description) return page.data.description;
        } else {
            const meta = loader.getNodeMeta(node, ctx.lang);
            if (meta?.data.description) return meta.data.description;
        }
        return typeof node.description === "string" ? node.description : "";
    } } = config;
    function formatListItem(name, description, indent) {
        const prefix = TAB.repeat(indent);
        description = description.trim();
        if (description.length > 0) return `${prefix}- ${name}: ${description}`;
        return `${prefix}- ${name}`;
    }
    function formatNode(node, indent, ctx) {
        switch(node.type){
            case "page":
                return formatListItem(formatMarkdownLink(renderName(node, ctx), node.url), renderDescription(node, ctx), indent);
            case "folder":
                {
                    const out = [];
                    out.push(formatListItem(renderName(node, ctx), renderDescription(node, ctx), indent));
                    if (node.index) out.push(formatNode(node.index, indent + 1, ctx));
                    for (const child of node.children)out.push(formatNode(child, indent + 1, ctx));
                    return out.join("\n");
                }
            case "separator":
                return "\n" + formatListItem(`**${renderName(node, ctx) || "Separator"}**`, "", indent);
        }
    }
    function index(lang) {
        if (loader._i18n && lang === void 0) {
            const { languages } = loader._i18n;
            return languages.map(index).join("\n\n");
        }
        const pageTree = loader.getPageTree(lang);
        const out = [];
        const ctx = {
            lang
        };
        out.push(`# ${renderName(pageTree, ctx)}`, "");
        const description = renderDescription(pageTree, ctx);
        if (description) out.push(`> ${description}`, "");
        for (const child of pageTree.children)out.push(formatNode(child, 0, ctx));
        return out.join("\n");
    }
    return {
        /**
		* generate `llms.txt` content in Markdown format.
		*
		* use `indexNode(node)` instead for more control (e.g. add extra sections to output).
		*/ index,
        /**
		* generate `llms.txt` content for a single page tree node.
		*/ indexNode (node, lang) {
            return formatNode(node, 0, {
                lang
            });
        }
    };
}
function formatMarkdownLink(title, url) {
    return `[${title.replace(/([[\]])/g, "\\$1")}](${url.replace(/([()])/g, "\\$1")})`;
}
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/source/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$path$2d$CPgAF5cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/path-CPgAF5cw.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$loader$2d$DWaWaGZg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/loader-DWaWaGZg.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$plugins$2f$slugs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/source/plugins/slugs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$llms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/source/llms.js [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/loader-DWaWaGZg.js [app-rsc] (ecmascript) <export n as loader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$loader$2d$DWaWaGZg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$16$2e$9$2e$0_$40$mdx$2d$js$2b$mdx$40$3$2e$1$2e$1_$40$types$2b$estree$2d$jsx$40$1$2e$0$2e$5_$40$types$2b$hast$40$3$2e$0$2e$4_$40$types_cbbc23da0e261440b4c4368d5cd39631$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$loader$2d$DWaWaGZg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@16.9.0_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.4_@types_cbbc23da0e261440b4c4368d5cd39631/node_modules/fumadocs-core/dist/loader-DWaWaGZg.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/fumadocs-mdx@14.3.2_@types+mdast@4.0.4_@types+mdx@2.0.13_@types+react@19.2.15_fumadocs-_fc6c0b92e02dd7cc08f4188ca53f2769/node_modules/fumadocs-mdx/dist/runtime/server.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "server",
    ()=>server,
    "toFumadocsSource",
    ()=>toFumadocsSource
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
//#region src/runtime/server.ts
function server(options = {}) {
    const { doc: { passthroughs: docPassthroughs = [] } = {} } = options;
    function fileInfo(file, base) {
        if (file.startsWith("./")) file = file.slice(2);
        return {
            path: file,
            fullPath: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"](base, file)
        };
    }
    function mapDocData(entry) {
        const data = {
            body: entry.default,
            toc: entry.toc,
            structuredData: entry.structuredData,
            _exports: entry
        };
        for (const key of docPassthroughs)data[key] = entry[key];
        return data;
    }
    return {
        async doc (_name, base, glob) {
            return await Promise.all(Object.entries(glob).map(async ([k, v])=>{
                const data = typeof v === "function" ? await v() : v;
                return {
                    ...mapDocData(data),
                    ...data.frontmatter,
                    ...createDocMethods(fileInfo(k, base), ()=>data)
                };
            }));
        },
        async docLazy (_name, base, head, body) {
            return await Promise.all(Object.entries(head).map(async ([k, v])=>{
                const data = typeof v === "function" ? await v() : v;
                const content = body[k];
                return {
                    ...data,
                    ...createDocMethods(fileInfo(k, base), content),
                    async load () {
                        return mapDocData(await content());
                    }
                };
            }));
        },
        async meta (_name, base, glob) {
            return await Promise.all(Object.entries(glob).map(async ([k, v])=>{
                const data = typeof v === "function" ? await v() : v;
                return {
                    info: fileInfo(k, base),
                    ...data
                };
            }));
        },
        async docs (name, base, metaGlob, docGlob) {
            return {
                docs: await this.doc(name, base, docGlob),
                meta: await this.meta(name, base, metaGlob),
                toFumadocsSource () {
                    return toFumadocsSource(this.docs, this.meta);
                }
            };
        },
        async docsLazy (name, base, metaGlob, docHeadGlob, docBodyGlob) {
            return {
                docs: await this.docLazy(name, base, docHeadGlob, docBodyGlob),
                meta: await this.meta(name, base, metaGlob),
                toFumadocsSource () {
                    return toFumadocsSource(this.docs, this.meta);
                }
            };
        }
    };
}
function toFumadocsSource(pages, metas) {
    const files = [];
    for (const entry of pages)files.push({
        type: "page",
        path: entry.info.path,
        absolutePath: entry.info.fullPath,
        data: entry
    });
    for (const entry of metas)files.push({
        type: "meta",
        path: entry.info.path,
        absolutePath: entry.info.fullPath,
        data: entry
    });
    return {
        files
    };
}
function createDocMethods(info, load) {
    return {
        info,
        async getText (type) {
            if (type === "raw") return await (await __turbopack_context__.A("[externals]/node:fs/promises [external] (node:fs/promises, cjs, async loader)")).readFile(info.fullPath, "utf-8");
            const data = await load();
            if (typeof data._markdown !== "string") throw new Error("getText('processed') requires `includeProcessedMarkdown` to be enabled in your collection config.");
            return data._markdown;
        },
        async getMDAST () {
            const data = await load();
            if (!data._mdast) throw new Error("getMDAST() requires `includeMDAST` to be enabled in your collection config.");
            return JSON.parse(data._mdast);
        }
    };
}
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0.pu~aa._.js.map