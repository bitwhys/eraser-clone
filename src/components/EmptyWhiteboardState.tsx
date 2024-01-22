import React from 'react'
import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
  DocumentIcon,
  VideoCameraIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils.ts'

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
    <div>
      <h2 className="text-base font-semibold leading-6">Welcome</h2>
      <p className="mt-1 text-sm text-[--sand-11]">
        You haven’t created a project yet. Get started by selecting a template
        or start from an empty project.
      </p>
      <ul role="list" className="mt-6 grid grid-cols-1 gap-6 border-y py-6">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-[--purple-9] hover:bg-[--sand-2]">
              <div
                className={cn(
                  item.background,
                  'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                )}
              >
                <item.icon
                  className="size-6 text-[--white-a12]"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[--sand-12]">
                  <a href="#" className="focus:outline-none whitespace-nowrap">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-[--sand-11]">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a
          href="#"
          className="text-sm font-medium text-[--purple-11] hover:text-[--purple-9]"
        >
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  )
}

export default EmptyWhiteboardState
