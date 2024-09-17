import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

export default function JobCardSkeleton() {
  return (
    <Card className="w-full p-6 grid gap-6">
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-md" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-20 w-full" />
      <div className="flex flex-wrap gap-2 justify-start">
        {[1, 2, 3].map((_, index) => (
          <Skeleton key={index} className="h-6 w-16 rounded-full" />
        ))}
      </div>
      <div className="flex justify-between items-end">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-20" />
      </div>
    </Card>
  )
}