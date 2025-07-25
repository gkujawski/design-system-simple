"use client"

import type React from "react"
import { useState } from "react"
import styles from "./Accordion.module.css"

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = true, className = "" }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      const newOpenItems = new Set(openItems)
      if (newOpenItems.has(itemId)) {
        newOpenItems.delete(itemId)
      } else {
        newOpenItems.add(itemId)
      }
      setOpenItems(newOpenItems)
    } else {
      // Single item mode - close others when opening new one
      setOpenItems(openItems.has(itemId) ? new Set() : new Set([itemId]))
    }
  }

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item, index) => (
        <div key={item.id} className={styles.accordionItem}>
          <input
            type="checkbox"
            id={item.id}
            className={styles.accordionInput}
            checked={openItems.has(item.id)}
            onChange={() => toggleItem(item.id)}
          />
          <label className={styles.accordionItemTitle} htmlFor={item.id}>
            {item.title}
          </label>
          <div className={styles.accordionItemContent}>
            <div className={styles.accordionItemContentInner}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
