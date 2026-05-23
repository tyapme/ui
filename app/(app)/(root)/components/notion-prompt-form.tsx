"use client"

import { useMemo, useState } from "react"
import {
  IconApps,
  IconArrowUp,
  IconAt,
  IconBook,
  IconCircleDashedPlus,
  IconPaperclip,
  IconPlus,
  IconWorld,
  IconX,
} from "@tabler/icons-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-nova/ui/avatar"
import { Badge } from "@/styles/base-nova/ui/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/styles/base-nova/ui/command"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/styles/base-nova/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"
import { Switch } from "@/styles/base-nova/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-nova/ui/tooltip"

const SAMPLE_DATA = {
  mentionable: [
    { type: "page", title: "会議メモ", image: "📝" },
    { type: "page", title: "プロジェクトダッシュボード", image: "📊" },
    { type: "page", title: "アイデア・ブレインストーミング", image: "💡" },
    { type: "page", title: "カレンダー・イベント", image: "📅" },
    { type: "page", title: "ドキュメント", image: "📚" },
    { type: "page", title: "ゴール・目標", image: "🎯" },
    { type: "page", title: "予算計画", image: "💰" },
    { type: "page", title: "チームディレクトリ", image: "👥" },
    { type: "page", title: "技術仕様", image: "🔧" },
    { type: "page", title: "分析レポート", image: "📈" },
    {
      type: "user",
      title: "TYAP.ME",
      image: "/avatars/01.png",
      workspace: "プロダクト",
    },
    {
      type: "user",
      title: "maxleiter",
      image: "https://github.com/maxleiter.png",
      workspace: "ワークスペース",
    },
    {
      type: "user",
      title: "evilrabbit",
      image: "https://github.com/evilrabbit.png",
      workspace: "ワークスペース",
    },
  ],
  models: [
    { name: "自動" },
    { name: "エージェントモード", badge: "Beta" },
    { name: "プランモード" },
  ],
}

function MentionableIcon({
  item,
}: {
  item: (typeof SAMPLE_DATA.mentionable)[0]
}) {
  return item.type === "page" ? (
    <span className="flex size-4 items-center justify-center">
      {item.image}
    </span>
  ) : (
    <Avatar className="size-4">
      <AvatarImage src={item.image} />
      <AvatarFallback>{item.title[0]}</AvatarFallback>
    </Avatar>
  )
}

export function NotionPromptForm() {
  const [mentions, setMentions] = useState<string[]>([])
  const [mentionPopoverOpen, setMentionPopoverOpen] = useState(false)
  const [modelPopoverOpen, setModelPopoverOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState<
    (typeof SAMPLE_DATA.models)[0]
  >(SAMPLE_DATA.models[0])
  const [scopeMenuOpen, setScopeMenuOpen] = useState(false)

  const grouped = useMemo(() => {
    return SAMPLE_DATA.mentionable.reduce(
      (acc, item) => {
        const isAvailable = !mentions.includes(item.title)

        if (isAvailable) {
          if (!acc[item.type]) {
            acc[item.type] = []
          }
          acc[item.type].push(item)
        }
        return acc
      },
      {} as Record<string, typeof SAMPLE_DATA.mentionable>
    )
  }, [mentions])

  const hasMentions = mentions.length > 0

  return (
    <form>
      <Field>
        <FieldLabel htmlFor="notion-prompt" className="sr-only">
          プロンプト
        </FieldLabel>
        <InputGroup className="rounded-xl">
          <InputGroupTextarea
            id="notion-prompt"
            placeholder="質問、検索、何でも作れます..."
          />
          <InputGroupAddon align="block-start" className="pt-3">
            <Popover
              open={mentionPopoverOpen}
              onOpenChange={setMentionPopoverOpen}
            >
              <Tooltip>
                <TooltipTrigger
                  onFocusCapture={(e) => e.stopPropagation()}
                  render={
                    <PopoverTrigger
                      render={
                        <InputGroupButton
                          variant="outline"
                          size={!hasMentions ? "sm" : "icon-sm"}
                          className="transition-transform"
                        />
                      }
                    >
                      <IconAt /> {!hasMentions && "コンテキストを追加"}
                    </PopoverTrigger>
                  }
                />
                <TooltipContent>ページ、ユーザー、日付をメンション</TooltipContent>
              </Tooltip>
              <PopoverContent className="p-0" align="start">
                <Command>
                  <CommandInput placeholder="ページを検索..." />
                  <CommandList>
                    <CommandEmpty>ページが見つかりません</CommandEmpty>
                    {Object.entries(grouped).map(([type, items]) => (
                      <CommandGroup
                        key={type}
                        heading={type === "page" ? "ページ" : "ユーザー"}
                      >
                        {items.map((item) => (
                          <CommandItem
                            key={item.title}
                            value={item.title}
                            onSelect={(currentValue) => {
                              setMentions((prev) => [...prev, currentValue])
                              setMentionPopoverOpen(false)
                            }}
                            className="rounded-lg"
                          >
                            <MentionableIcon item={item} />
                            {item.title}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <div className="-m-1.5 no-scrollbar flex gap-1 overflow-y-auto p-1.5">
              {mentions.map((mention) => {
                const item = SAMPLE_DATA.mentionable.find(
                  (item) => item.title === mention
                )

                if (!item) {
                  return null
                }

                return (
                  <InputGroupButton
                    key={mention}
                    size="sm"
                    variant="secondary"
                    className="rounded-full pl-2!"
                    onClick={() => {
                      setMentions((prev) => prev.filter((m) => m !== mention))
                    }}
                  >
                    <MentionableIcon item={item} />
                    {item.title}
                    <IconX />
                  </InputGroupButton>
                )
              })}
            </div>
          </InputGroupAddon>
          <InputGroupAddon align="block-end" className="gap-1">
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    size="icon-sm"
                    className="rounded-full"
                    aria-label="ファイルを添付"
                  />
                }
              >
                <IconPaperclip />
              </TooltipTrigger>
                <TooltipContent>ファイルを添付</TooltipContent>
            </Tooltip>
            <DropdownMenu
              open={modelPopoverOpen}
              onOpenChange={setModelPopoverOpen}
            >
              <Tooltip>
                <DropdownMenuTrigger render={<InputGroupButton size="sm" className="rounded-full" />}>
                  {selectedModel.name}
                </DropdownMenuTrigger>
                <TooltipContent>AIモデルを選択</TooltipContent>
              </Tooltip>
              <DropdownMenuContent
                side="top"
                align="start"
                className="min-w-48"
              >
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    エージェントモードを選択
                  </DropdownMenuLabel>
                  {SAMPLE_DATA.models.map((model) => (
                    <DropdownMenuCheckboxItem
                      key={model.name}
                      checked={model.name === selectedModel.name}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedModel(model)
                        }
                      }}
                      className="pl-2 *:[span:first-child]:right-2 *:[span:first-child]:left-auto"
                    >
                      {model.name}
                      {model.badge && (
                        <Badge
                          variant="secondary"
                          className="h-5 rounded-sm bg-blue-100 px-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                        >
                          {model.badge}
                        </Badge>
                      )}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu open={scopeMenuOpen} onOpenChange={setScopeMenuOpen}>
              <DropdownMenuTrigger render={<InputGroupButton size="sm" className="rounded-full" />}>
                <IconWorld /> すべてのソース
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="end" className="w-72">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    render={<label htmlFor="web-search" />}
                    onSelect={(e) => e.preventDefault()}
                  >
                    <IconWorld /> Web検索{" "}
                    <Switch
                      id="web-search"
                      className="ml-auto"
                      defaultChecked
                    />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    render={<label htmlFor="apps" />}
                    onSelect={(e) => e.preventDefault()}
                  >
                      <IconApps /> アプリと連携サービス
                      <Switch id="apps" className="ml-auto" defaultChecked />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconCircleDashedPlus /> アクセスできるすべてのソース
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Avatar className="size-4">
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>TM</AvatarFallback>
                      </Avatar>
                      TYAP.ME
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-72 p-0 [--radius:1rem]">
                      <Command>
                        <CommandInput
                          placeholder="ノレッジを検索..."
                          autoFocus
                        />
                        <CommandList>
                          <CommandEmpty>ノレッジが見つかりません</CommandEmpty>
                          <CommandGroup>
                            {SAMPLE_DATA.mentionable
                              .filter((item) => item.type === "user")
                              .map((user) => (
                                <CommandItem
                                  key={user.title}
                                  value={user.title}
                                  onSelect={() => {
                                    // Handle user selection here
                                    console.log("Selected user:", user.title)
                                  }}
                                >
                                  <Avatar className="size-4">
                                    <AvatarImage src={user.image} />
                                    <AvatarFallback>
                                      {user.title[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                  {user.title}{" "}
                                  <span className="text-muted-foreground">
                                    - {user.workspace}
                                  </span>
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <IconBook /> ヘルプセンター
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <IconPlus /> アプリを連携
                  </DropdownMenuItem>
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    選択したソースのみ検索します。
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupButton
              aria-label="送信"
              className="ml-auto rounded-full"
              variant="default"
              size="icon-sm"
            >
              <IconArrowUp />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  )
}
