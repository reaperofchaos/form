import { ReactNode } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const ReactDndWrapper = ({children, hasDragging}: {children: ReactNode, hasDragging: boolean, })=>{
    if(hasDragging){
        <DndProvider backend={HTML5Backend}>
            {children}
        </DndProvider>
    }

    return (<>{children}</>)
}

export default ReactDndWrapper;