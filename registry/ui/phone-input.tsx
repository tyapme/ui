"use client"

import * as React from "react"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"

import { cn } from "@/registry/bases/base/lib/utils"
import { Button } from "@/registry/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/ui/combobox"
import { Input } from "@/registry/ui/input"
import { ScrollArea } from "@/registry/ui/scroll-area"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

type PhoneInputSize = "sm" | "default" | "lg"

/** UI strings used by the country picker. Defaults are English. */
export interface PhoneInputMessages {
  /** Placeholder for the country search box. */
  searchPlaceholder: string
  /** Shown when no country matches the search. */
  noResults: string
}

const DEFAULT_MESSAGES: PhoneInputMessages = {
  searchPlaceholder: "Search country…",
  noResults: "No country found.",
}

const PhoneInputContext = React.createContext<{
  size: PhoneInputSize
  popupClassName?: string
  messages: PhoneInputMessages
}>({
  size: "default",
  messages: DEFAULT_MESSAGES,
})

const SIZE_HEIGHT: Record<PhoneInputSize, string> = {
  sm: "h-8",
  default: "h-9",
  lg: "h-10",
}

export type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "onChange" | "value" | "ref"
> &
  Omit<
    RPNInput.Props<typeof RPNInput.default>,
    "onChange" | "variant" | "popupClassName"
  > & {
    onChange?: (value: RPNInput.Value) => void
    variant?: PhoneInputSize
    popupClassName?: string
    /** Custom UI strings for localization. */
    messages?: Partial<PhoneInputMessages>
  }

function PhoneInput({
  className,
  variant = "default",
  popupClassName,
  messages,
  onChange,
  value,
  ...props
}: PhoneInputProps) {
  const mergedMessages = { ...DEFAULT_MESSAGES, ...messages }

  return (
    <PhoneInputContext.Provider
      value={{ size: variant, popupClassName, messages: mergedMessages }}
    >
      <RPNInput.default
        className={cn(
          "flex w-full items-stretch",
          props["aria-invalid"] &&
            "[&_*[data-slot=combobox-trigger]]:border-destructive [&_*[data-slot=combobox-trigger]]:ring-destructive/50",
          className
        )}
        flagComponent={CountryFlag}
        countrySelectComponent={CountryPicker}
        inputComponent={PhoneNumberField}
        smartCaret={false}
        value={value || undefined}
        onChange={(next) => onChange?.(next || ("" as RPNInput.Value))}
        {...props}
      />
    </PhoneInputContext.Provider>
  )
}

function PhoneNumberField({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  const { size } = React.useContext(PhoneInputContext)

  return (
    <Input
      className={cn("min-w-0 flex-1 rounded-s-none focus:z-1", SIZE_HEIGHT[size], className)}
      {...props}
    />
  )
}

type CountryOption = {
  label: string
  value: RPNInput.Country | undefined
}

type CountryPickerProps = {
  disabled?: boolean
  value: RPNInput.Country
  options: CountryOption[]
  onChange: (country: RPNInput.Country) => void
}

function CountryPicker({
  disabled,
  value: selected,
  options,
  onChange,
}: CountryPickerProps) {
  const { size, popupClassName, messages } = React.useContext(PhoneInputContext)
  const [query, setQuery] = React.useState("")

  const results = React.useMemo(() => {
    const list = options.filter((c): c is CountryOption & { value: RPNInput.Country } =>
      Boolean(c.value)
    )
    if (!query) return list
    const q = query.toLowerCase()
    return list.filter((c) => c.label.toLowerCase().includes(q))
  }, [options, query])

  return (
    <Combobox
      items={results}
      value={selected || ""}
      onValueChange={(country: RPNInput.Country | null) => {
        if (country) onChange(country)
      }}
    >
      <ComboboxTrigger
        render={
          <Button
            variant="outline"
            size={size}
            disabled={disabled}
            className={cn(
              "flex gap-1.5 rounded-e-none border-e-0 px-2.5 leading-none hover:bg-transparent focus:z-10 data-pressed:bg-transparent",
              SIZE_HEIGHT[size],
              disabled && "opacity-50"
            )}
          >
            <span className="sr-only">
              <ComboboxValue />
            </span>
            <CountryFlag country={selected} countryName={selected} />
            <IconPlaceholder
              lucide="ChevronDownIcon"
              tabler="IconChevronDown"
              hugeicons="ArrowDown01Icon"
              phosphor="CaretDownIcon"
              remixicon="RiArrowDownSLine"
              className="size-3.5 opacity-50"
            />
          </Button>
        }
      />
      <ComboboxContent
        className={cn("w-xs *:data-[slot=input-group]:bg-transparent", popupClassName)}
      >
        <ComboboxInput
          placeholder={messages.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          showTrigger={false}
          className="rounded-none border-0 shadow-none ring-0! outline-none! focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <ComboboxSeparator />
        <ComboboxEmpty className="px-4 py-2.5 text-sm">
          {messages.noResults}
        </ComboboxEmpty>
        <ComboboxList>
          <ScrollArea className="flex max-h-[min(var(--available-height),20rem)] w-full flex-col overscroll-contain **:data-[slot=scroll-area-scrollbar]:m-0 [&_[data-slot=scroll-area-viewport]]:h-full">
            {results.map((country) => (
              <ComboboxItem
                key={country.value}
                value={country.value}
                className="flex items-center gap-2.5 px-3 py-2"
              >
                <CountryFlag country={country.value} countryName={country.label} />
                <span className="flex-1 truncate text-sm">{country.label}</span>
                <span className="text-muted-foreground text-sm tabular-nums">
                  +{RPNInput.getCountryCallingCode(country.value)}
                </span>
              </ComboboxItem>
            ))}
          </ScrollArea>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function CountryFlag({ country, countryName }: RPNInput.FlagProps) {
  const Flag = country ? flags[country] : undefined

  return (
    <span className="flex size-4 items-center justify-center overflow-hidden rounded-[4px] [&_svg:not([class*='size-'])]:size-full!">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <IconPlaceholder
          lucide="GlobeIcon"
          tabler="IconWorld"
          hugeicons="Globe02Icon"
          phosphor="GlobeSimpleIcon"
          remixicon="RiGlobalLine"
          className="size-4 opacity-60"
        />
      )}
    </span>
  )
}

export { PhoneInput }
