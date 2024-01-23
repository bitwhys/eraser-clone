import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config.ts'
import Header from '@/layouts/Header.tsx'
import EmptyWhiteboardState from '@/components/EmptyWhiteboardState.tsx'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

const fullConfig = resolveConfig(config)

function App() {
  return (
    <div className="flex min-h-full flex-col">
      <header>
        <Header />
      </header>
      <div className="relative grow py-10">
        <div className="absolute inset-0 pt-64">
          <div
            id="grid-pattern"
            className="absolute inset-0 -z-10 bg-[url('/pattern.png')] [background-position:-2px_-2px] [background-size:10px_10px]"
          />
          <EmptyWhiteboardState />
        </div>
      </div>
    </div>
  )
}

export default App
