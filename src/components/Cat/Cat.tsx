'use client'

import Image from 'next/image'
import { CatComponentProps } from "@/interfaces/cats.interfaces";
import styles from '@/styles/Cat.module.scss'

const Cat = ({ cat: { _id, tags, owner, createdAt, updatedAt } }: CatComponentProps) => {
    return (
        <div className={styles.cat}>
            <Image src={`https://cataas.com/cat/${_id}`} alt={`Image for cataas.com record with id: ${_id}`} width={100} height={100}/>
            <div>
                <p>ID: {_id}</p>
                <p>Tag: {tags.slice(0, 1).join(", ")}</p>
                <p>Owner: {owner || "N/A"}</p>
                <p>Created At: {new Date(createdAt).toDateString()}</p>
                <p>Updated At: {new Date(updatedAt).toDateString()}</p>
            </div>
        </div>
    );
};

export default Cat;