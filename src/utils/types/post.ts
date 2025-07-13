import {Database} from '@/utils/types/database.types'

type PostEntity = Database['public']['Tables']['posts']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Post = PostEntity & {
    user: UserEntity
}


