import s from './Main.module.css'
import Header from '../../components/common/Header/Header'
import ProductList from '../../components/product/ProductList/ProductList'
import Menu from '../../components/common/Menu/Menu'
import { productsAll } from '../../mock/products'
import { useGetAdsAllQuery } from '../../services/adsApi'
import { useState } from 'react'

function Main() {
    const { data: adsAllData = [] } = useGetAdsAllQuery()

    const [search, setSearch] = useState('')

    const filterAds = () => {
        let products = adsAllData
        if (search !== '') {
            products = products.filter(({ title }) =>
                title.toLowerCase().includes(search.toLowerCase())
            )
        }
        return products
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Header />
                <main className={s.main}>
                    <Menu ads={filterAds()} setSearch={setSearch} />
                    <div className={s.content}>
                        <h2 className={s.title}>Объявления</h2>
                        <ProductList
                            products={productsAll}
                            isProfilePage={false}
                            ads={filterAds()}
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Main
