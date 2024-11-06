import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resovle => {
        setTimeout(() => {resovle(`Iphone ${params.productId}`)}, 100)
    })
    return {title: `Product ${title}`}
}

export default function ProductDetails({params}:{params: {productId: string}}) {
    return <h1>Product detail {params.productId}</h1>
};

//fetch data
// import type { Metadata, ResolvingMetadata } from 'next'
 
// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
 
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id
 
//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }
 
// export default function Page({ params, searchParams }: Props) {}