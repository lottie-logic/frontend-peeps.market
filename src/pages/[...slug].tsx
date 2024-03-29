

import { useRouter } from 'next/router'
import { StoreGetProductsParams } from "@medusajs/medusa"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import { NextPageWithLayout } from "types/global"

const Store: NextPageWithLayout = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const router = useRouter()
  const slug = (router.query.slug as string[]) || []
  return (
    <>
      <div className='snoop'>
      <Head title={slug.join('/')} description="Explore all of our products." />
    
      {/* <h1 className='capitalize m-auto creator-title'>Snoop's Fan Store</h1> */}
      <div className="flex flex-col small:flex-row small:items-start py-6">
        <RefinementList refinementList={params} setRefinementList={setParams} />
        <InfiniteProducts params={params}  type="origin" />
      </div>
      </div>
    </>
  )
}

Store.getLayout = (page) => <Layout>{page}</Layout>

export default Store
