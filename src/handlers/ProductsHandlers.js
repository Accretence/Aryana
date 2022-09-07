import { burnToast } from '../helpers/index.js'

export async function handleProductsData({
    response,
    router,
    setTotalPages,
    setProducts,
    setToast,
    noDataToast,
}) {
    const { data, error } = response

    if (error) {
        router.replace('/')
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }

    const { page, pages, products } = data

    if (!data || !products || !page || !pages) {
        router.replace('/')
        burnToast(setToast, noDataToast)
    }

    setTotalPages(pages)
    setProducts(products)
}

export async function handleProductData({
    response,
    router,
    setMeta,
    setProduct,
    setToast,
    noDataToast,
    setListingID,
}) {
    const { data, error } = response

    if (error) {
        router.replace('/')
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }

    if (!data) {
        router.replace('/')
        burnToast(setToast, noDataToast)
    }

    const { title, description, covers, listings } = data

    setMeta({
        title,
        description,
        image: covers[0],
    })
    setProduct(data)
    setListingID(listings[0]['_id'])
}
