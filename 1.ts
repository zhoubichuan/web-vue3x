// export type NodeType = { row: Record<string, unknown>; handleExpand?: () => void; expand?: boolean }
export type NodeType<T extends Record<string, any> = Record<string, any>> = T & {
    children?: NodeType<T>[]
}

export type NodeState = {
    isFold?: boolean
    isLoading: boolean
}

export type NodeExposeProps = {
    node: NodeType
    index: number
    data: NodeType[]
    level: number
    nodeState: NodeState
}
