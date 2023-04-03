var isDev: boolean
interface Item {
    id: number
    user_id: number
    amount: number
    note?: string
    tag_ids: number[]
    kind: 'expenses' | 'incomes'
    happened_at: string
    created_at: string
    updated_at: string
    deleted_at?: string
}
interface User {
    id: number
    email: string
    name?: string
    created_at: string
    updated_at: string
}
