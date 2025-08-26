import {Loader2} from "lucide-react"

export default function DefaultLoader() {
  return (
      <div className="flex justify-center items-center align-middle h-screen w-full">
        <Loader2 className="h-16 w-16 animate-spin text-muted-foreground"/>
      </div>
  )
}