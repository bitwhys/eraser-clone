import {
  DocumentIcon,
  VideoCameraIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils.ts'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CopyIcon, Link2Icon } from '@radix-ui/react-icons'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'

export type EmptyWhiteboardStateProps = {}

const items = [
  {
    title: 'Import a Video',
    description: 'Another to-do system you’ll try but eventually give up on.',
    icon: VideoCameraIcon,
    background: 'bg-[--crimson-9]',
  },
  {
    title: 'Import a Document',
    description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
    icon: DocumentIcon,
    background: 'bg-[--amber-9]',
  },
  {
    title: 'Import a Website',
    description: 'Great for mood boards and inspiration.',
    icon: GlobeAltIcon,
    background: 'bg-[--orange-9]',
  },
]

const EmptyWhiteboardState = ({}: EmptyWhiteboardStateProps) => {
  return (
    <Dialog>
      <p className="">
        Draw, Diagram, start from a{' '}
        <DialogTrigger
          className={cn('hover:underline font-medium text-[--purple-9]')}
        >
          template,
        </DialogTrigger>{' '}
        or make an{' '}
        <span className="text-[--purple-9] font-medium hover:underline">
          AI Diagram
        </span>
      </p>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import a video</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Link2Icon className="size-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
          <Button variant="primary">Select a file</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EmptyWhiteboardState
