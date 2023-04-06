import Head from 'next/head'
import CatList from '@/components/CatList/CatList'

export default function Cats() {
    return (
        <>
            <Head>
                <title>Cats - paddy/Byte</title>
                <meta name="description" content="Use Effect used correctly single fetch example" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <CatList />
            </main>
        </>
    )
}
