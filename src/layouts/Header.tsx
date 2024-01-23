import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils.ts'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button.tsx'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: '/avatar.jpeg',
}
const navigation = [
  { name: 'Notepad', href: '#', current: false },
  { name: 'Both', href: '#', current: true },
  { name: 'Whiteboard', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const Header = () => {
  const [title, setTitle] = useState('👋 Getting Started on Eraser')
  return (
    <Disclosure as="nav" className="shadow-sm bg-[--white-a12]">
      {({ open }) => (
        <>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="h-14 grid grid-cols-[minmax(200px,1fr)_auto_1fr]">
              <div className="flex items-center gap-x-4">
                <a href="/public" className="flex shrink-0 items-center">
                  <svg
                    className="h-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 206 106"
                    fill="none"
                  >
                    <path
                      d="M203 94.6667L203 11.3333L186.333 3M203 94.6667L186.333 103L119.667 69.6667M203 94.6667L136.333 61.3333M186.333 3L186.333 69.6667L153 53L169.667 44.6667L103 78L36.3333 44.6667L53 53L19.6667 69.6667L19.6667 2.99999M186.333 3L103 44.6667L19.6667 2.99999M169.667 61.3333L169.667 28L103 61.3333L36.3333 28L36.3333 61.3333M2.99999 94.6667L2.99999 11.3333L19.6667 2.99999M2.99999 94.6667L19.6667 103L86.3333 69.6667M2.99999 94.6667L69.6667 61.3333"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="min-w-0">
                  <div
                    contentEditable
                    className="max-w-full overflow-hidden text-ellipsis px-0.5 text-sm font-semibold leading-5 focus-visible:outline-0"
                    onInput={(e) => console.log(e)}
                  >
                    {title}
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="hover:bg-grey-3">
                  <DotsHorizontalIcon className="size-6 text-grey-10" />
                </Button>
              </div>
              <div className="hidden sm:flex sm:justify-center">
                <div className="flex gap-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        item.current
                          ? 'border-[--purple-9]'
                          : 'border-transparent text-grey-10 hover:border-grey-8 hover:text-grey-11',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-semibold'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center sm:justify-end">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[--purple-9] focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="size-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[--purple-9] focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="size-8 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white-a12 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={cn(
                                active ? 'bg-zinc-100' : '',
                                'block px-4 py-2 text-sm text-zinc-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block size-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block size-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    item.current
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-transparent text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-800',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-zinc-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="shrink-0">
                  <img
                    className="size-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-zinc-800">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-zinc-500">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="size-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
