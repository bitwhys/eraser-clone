import Header from '@/layouts/Header.tsx'
import EmptyWhiteboardState from '@/components/EmptyWhiteboardState.tsx'
import SplitPane from 'react-split-pane'

function App() {
  const handleDragStarted = () => {
    console.log('Drag started')
  }

  const handleDrag = () => {
    console.log('Dragging')
  }

  const handleDragFinished = () => {
    console.log('Drag finished')
  }

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="relative grow">
        <SplitPane
          minSize={384}
          maxSize={660}
          defaultSize={420}
          split="vertical"
          className="relative grid grow grid-cols-[1fr_2fr]"
          resizerClassName="w-[11px] border-l border-transparent active:border-grey-a7 hover:border-grey-a5 cursor-grab"
          // onDragStarted={handleDragStarted}
          // onDragFinished={handleDragFinished}
          // onDrag={handleDrag}
          onChange={(e) => console.log(e)}
        >
          <div className="border-r h-full bg-white-a12"></div>
          <div className="relative size-full grow py-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                id="grid-pattern"
                className="absolute inset-0 -z-10 bg-[url('/pattern.png')] [background-position:-2px_-2px] [background-size:10px_10px]"
              />
              <EmptyWhiteboardState />
            </div>
          </div>
        </SplitPane>
      </div>
    </div>
  )
}

export default App
