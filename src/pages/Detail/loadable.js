import loadable from '@loadable/component'

const MainComponent = loadable(() => import('./'))

function LoadableComponent() {
  return (
    <div>
      <MainComponent />
    </div>
  )
}

export default LoadableComponent

