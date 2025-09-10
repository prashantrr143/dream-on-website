"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

interface MultiSelectProps {
  options: Option[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  className?: string
  maxCount?: number
  disabled?: boolean
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select items...",
  className,
  maxCount = 3,
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")

  const handleSelect = React.useCallback((value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((s) => s !== value))
    } else {
      onChange([...selected, value])
    }
    setSearchValue("")
  }, [onChange, selected])

  const handleUnselect = React.useCallback((value: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    onChange(selected.filter((s) => s !== value))
  }, [onChange, selected])

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = e.target as HTMLInputElement
    if (input.value === "" && selected.length > 0) {
      if (e.key === "Delete" || e.key === "Backspace") {
        onChange(selected.slice(0, -1))
      }
      if (e.key === "Escape") {
        input.blur()
        setOpen(false)
      }
    }
  }, [onChange, selected])

  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex min-h-12 w-full cursor-pointer items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:border-accent/50 transition-colors",
            open && "ring-2 ring-ring ring-offset-2",
            className
          )}
          onClick={() => !disabled && setOpen(!open)}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <div className="flex flex-wrap items-center gap-1 flex-1 min-w-0">
            {selected.length === 0 && (
              <span className="text-muted-foreground select-none">{placeholder}</span>
            )}
            {selected.length > 0 && (
              <>
                {selected.slice(0, maxCount).map((value) => {
                  const option = options.find((option) => option.value === value)
                  const IconComponent = option?.icon
                  return (
                    <Badge
                      variant="secondary"
                      key={value}
                      className="rounded-md px-2 py-1 text-xs font-medium bg-accent/10 hover:bg-accent/20 transition-colors group"
                    >
                      {IconComponent && (
                        <IconComponent className="mr-1 h-3 w-3 text-accent" />
                      )}
                      <span className="max-w-[100px] truncate">{option?.label}</span>
                      <button
                        type="button"
                        className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-accent/30 p-0.5 transition-colors"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            handleUnselect(value)
                          }
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleUnselect(value, e)
                        }}
                        aria-label={`Remove ${option?.label}`}
                      >
                        <X className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </button>
                    </Badge>
                  )
                })}
                {selected.length > maxCount && (
                  <Badge
                    variant="secondary"
                    className="rounded-md px-2 py-1 text-xs font-medium bg-muted/50"
                  >
                    +{selected.length - maxCount} more
                  </Badge>
                )}
              </>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50 ml-2" />
        </div>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[var(--radix-popover-trigger-width)] p-0" 
        align="start"
        onEscapeKeyDown={() => setOpen(false)}
        onInteractOutside={() => setOpen(false)}
      >
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search services..."
            value={searchValue}
            onValueChange={setSearchValue}
            onKeyDown={handleKeyDown}
            className="h-9"
          />
          <CommandList className="max-h-[200px]">
            <CommandEmpty>No services found.</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => {
                const IconComponent = option.icon
                const isSelected = selected.includes(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                    className="cursor-pointer aria-selected:bg-accent aria-selected:text-accent-foreground"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 text-accent transition-opacity",
                        isSelected ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="flex items-center gap-2 flex-1">
                      {IconComponent && (
                        <IconComponent className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="flex-1">{option.label}</span>
                    </div>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}