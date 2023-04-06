'use client'

import React from 'react'
import styles from '@/styles/NavBar.module.scss'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={styles.navBar}>
        <h2>Navigation</h2>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/cats'>Fetch Cats Single</Link>
            </li>
            <li>
                <Link href='/interupting-cats'>Fetch Cats With Interrupting Query</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar