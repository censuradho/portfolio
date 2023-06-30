import { resolvePath } from "@/utils/helpers";
import { TagsProps } from "./types";
import { paths } from "@/constants/paths";
import { Icon, Tag } from "@/components";

import styles from './styles.module.css'

export function Tags (props: TagsProps) {
  const { data } = props

  const renderTags = data?.map((value, index) => (
    <Tag href={resolvePath(paths.tags, { slug: value.slug })} key={index}>{value.name}</Tag>
  ))

  if (!renderTags || renderTags.length === 0) return null

  return (
    <div className={styles.tags}>
      <Icon name="tag" />
      {renderTags}
    </div>
  )

}