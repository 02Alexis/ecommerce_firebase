import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollTop() {
    const { pathname } = useLocation()
    
    useEffect(() => {
        // console.log(pathname)
        /* SetTimeOut Asegúrese de que se haya ejecutado esta ejecución después de que se hayan presentado. Esto ayudará a solucionar el error para algunas vistas donde el desplazamiento a la parte superior no funcione perfectamente */
        setTimeout(() => {
            // window.scrollTo({ top: 0, behavior: 'smooth' })
            window.scrollTo(0, 0)
        }, 0)
    }, [pathname])
    return null
}

export default ScrollTop