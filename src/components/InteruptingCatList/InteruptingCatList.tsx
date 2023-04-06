import { CatList, InteruptingCatListProps } from '@/interfaces/cats.interfaces';
import { getRandomItemFromArray } from '@/utils';
import React, { useEffect, useState } from 'react'
import styles from '@/styles/CatList.module.scss'
import Cat from '../Cat/Cat';

const getCats = async (signal: AbortSignal, tag: string) => {
  const response = await fetch(`https://cataas.com/api/cats?tags=${tag}`, { signal })
  const data: CatList = await response.json()
  return data
}

const InteruptingCatList = ({ tags }: InteruptingCatListProps) => {
  const [cats, setCats] = useState<CatList>([])
  const [selectedTag, setselectedTag] = useState('')

  useEffect(() => {
    setselectedTag(getRandomItemFromArray(tags))
  }, [tags])

  useEffect(() => {
    const abortController = new AbortController()

    getCats(abortController.signal, selectedTag)
      .then((data: CatList) => {
        setCats(data)
      })
      .catch((err: Error) => {
        if (err instanceof DOMException && err.name === 'AbortError') {
          console.log('Component unmounted')
        } else {
          console.error(err)
        }
      })

    return () => {
      abortController.abort()
    }
  }, [selectedTag])

  return (
    <div>
      <div>
        {tags.map(tag => (
          <button key={tag} onClick={() => setselectedTag(tag)}>{tag}</button>
        ))}
      </div>
      <div className={styles.cats}>
        {cats.map(cat => (
          <Cat key={cat._id} cat={cat} />
        ))}
      </div>
    </div>
  )
}



export default InteruptingCatList