import { ScrollArea } from '@radix-ui/themes'

import { CommentType } from '@/types'

import { CommentItem } from '../CommentItem'
import styles from './CommentList.module.css'

type CommentListPropsType = {
  comments: CommentType[]
}

export const CommentList = ({ comments }: CommentListPropsType) => {
  return (
    <ScrollArea
      className={styles.commentListWrapper}
      type="always"
      scrollbars="vertical"

    >
      {comments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </ScrollArea>
  )
}
