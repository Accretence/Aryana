import burnToast from './burnToast'

export async function fetchHandler({
    router,
    response,
    setLoading,
    setToast,
    setState,
    success_toast,
    failure_toast,
    success_redirect_uri,
    failure_redirect_uri,
}) {
    try {
        if (response && response.status && response.status == 200) {
            console.log('Status 200')
            if (success_toast) burnToast(setToast, success_toast)
            if (success_redirect_uri) router.replace(success_redirect_uri)

            if (setState && response.data) setState(response.data)
            if (setState && !response.data) setState(true)
            if (setLoading) setLoading(false)
        } else {
            console.log('Status not 200')

            if (setLoading) setLoading(false)
            if (failure_toast) burnToast(setToast, failure_toast)
            if (!failure_toast) burnToast(setToast, response.data)
            if (failure_redirect_uri) router.replace(failure_redirect_uri)
        }
    } catch (error) {
        console.log('Error')

        if (setLoading) setLoading(false)
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )

        if (failure_redirect_uri) router.replace(failure_redirect_uri)
    }
}
