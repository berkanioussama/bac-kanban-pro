"use client"

import { Class } from "@/app/data/classes"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import classState from "@/lib/state"
import { useSnapshot } from "valtio"
export function ClassSwitcher({classes}: {classes: Class[]}) {
  const snap = useSnapshot(classState)
  return (
    <Select
      defaultValue={snap.classId}
      onValueChange={(value) => (classState.classId = value)}
    >
      <SelectTrigger className="w-[200px] h-10 font-bold text-lg" dir="rtl">
        <SelectValue placeholder={classes[0].name} defaultValue={classes[0].id} dir="rtl"/>
      </SelectTrigger>
      <SelectContent dir="rtl">
        <SelectGroup>
        <SelectItem value="0">كل المواد</SelectItem>
          {classes.map((cls) => (
            <SelectItem key={cls.id} value={cls.id}>
              {cls.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
