import { useEffect, useRef } from 'react'

function MapView() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'mapmyvisitors'
    script.src = 'https://mapmyvisitors.com/map.js?cl=d4d4d4&w=a&t=n&d=Y_J2sAY7ejKa1acMX20tvHXhnO23ojjj4UNpQ0At4MA&co=ffffff&ct=808080&cmo=84b5e3&cmn=f0747b'

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="map-section">
  <div className="map-container" ref={containerRef} />
  </div>
  )
}

export default MapView
