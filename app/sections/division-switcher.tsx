"use client"

import { Division } from "@/app/data/divisions"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import divisionState from "@/lib/state"
import { useSnapshot } from "valtio"
export function DivisionSwitcher({divisions}: {divisions: Division[]}) {
  const snap = useSnapshot(divisionState)
  return (
    <Select
      defaultValue={snap.divisionId}
      onValueChange={(value) => (divisionState.divisionId = value)}
    >
      <SelectTrigger className="w-[240px] h-10 font-bold text-lg" dir="rtl">
        <SelectValue placeholder={divisions[0].name} defaultValue={divisions[0].id} dir="rtl"/>
      </SelectTrigger>
      <SelectContent dir="rtl">
        <SelectGroup>
          {divisions.map((cls) => (
            <SelectItem key={cls.id} value={cls.id}>
              {cls.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
