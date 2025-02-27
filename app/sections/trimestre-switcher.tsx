"use client"

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

const TrimestreSwitcher = () => {
  const snap = useSnapshot(classState)

  const trimestres = [
    {
      name: "🍂 الفصل الأول",
      number: "1"
    },
    {
      name: "❄️ الفصل الثاني",
      number: "2"
    },
    {
      name: "🌸 الفصل الثالث",
      number: "3"
    },
    
  ]
  return (
    <Select
      defaultValue={snap.trimestre}
      onValueChange={(value) => (classState.trimestre = value)}
    >
      <SelectTrigger className="w-[200px] h-10 font-bold text-lg" dir="rtl">
        <SelectValue placeholder={trimestres[0].name} defaultValue={trimestres[0].number} dir="rtl"/>
      </SelectTrigger>
      <SelectContent dir="rtl">
        <SelectGroup>
          <SelectItem value="0">⏳ كل الفصول</SelectItem>
          {trimestres.map((trimestre) => (
            <SelectItem key={trimestre.number} value={trimestre.number}>
              {trimestre.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
 
export default TrimestreSwitcher;