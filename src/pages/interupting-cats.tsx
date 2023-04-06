import Head from 'next/head'
import InteruptingCatList from '@/components/InteruptingCatList/InteruptingCatList'
import { InteruptingCatListProps, Tag } from '@/interfaces/cats.interfaces'
import { GetServerSideProps } from 'next'

export default function InteruptingCats({ tags }: InteruptingCatListProps) {
    return (
        <>
            <Head>
                <title>Interupting Cats - paddy/Byte</title>
                <meta name="description" content="Use Effect used correctly interupted query fetch example" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <InteruptingCatList tags={tags} />
            </main>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch('https://cataas.com/api/tags')
    const tags: Tag[] = await response.json()
    return {
        props: { tags }
    };
}