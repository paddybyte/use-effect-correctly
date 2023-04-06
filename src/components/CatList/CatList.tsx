'use client'

import { CatList } from '@/interfaces/cats.interfaces'
import React, { useEffect, useState } from 'react'
import Cat from '../Cat/Cat'
import styles from '@/styles/CatList.module.scss'

const getCats = async (signal: AbortSignal) => {
    const response = await fetch('https://cataas.com/api/cats?tags=cute', { signal })
    const data: CatList = await response.json()
    return data
}

const CatList = () => {
    const [cats, setCats] = useState<CatList>([])

    useEffect(() => {
        const abortController = new AbortController()

        getCats(abortController.signal)
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
    }, [])

    return (
        <div className={styles.catList}>
            <h1>CatList 1</h1>
            <div className={styles.cats}>
                {cats.map(cat => (
                    <Cat key={cat._id} cat={cat} />
                ))}
            </div>
        </div>
    )
}

export default CatList
