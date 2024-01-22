import Header from '@/components/layouts/Header.tsx'
import EmptyWhiteboardState from '@/components/layouts/EmptyWhiteboardState.tsx'

function App() {
  return (
    <div className="flex min-h-full flex-col">
      <header>
        <Header />
      </header>
      <div className="relative grow py-10">
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-lg">
            <EmptyWhiteboardState />
          </div>
        </div>
      </div>
    </div>
  )
}

const OldContent = () => (
  <>
    <header>
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Dashboard
        </h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Your content */}
        <div className="px-4 py-8 sm:px-0">
          <div className="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
            <svg
              className="absolute inset-0 size-full stroke-gray-900/10"
              fill="none"
            >
              <defs>
                <pattern
                  id="pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                </pattern>
              </defs>
              <rect
                stroke="none"
                fill="url(#pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9)"
                width="100%"
                height="100%"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </main>
  </>
)
export default App
