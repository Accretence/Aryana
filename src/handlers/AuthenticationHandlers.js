import { burnToast } from '../helpers/index.js'

export async function loginHandler({
    response,
    setLoading,
    setToast,
    setLocalAuthentication,
    router,
    toast,
}) {
    setLoading(true)

    try {
        if (response && response.status && response.status == 200) {
            burnToast(setToast, toast)
            setLocalAuthentication(true)
            router.replace('/user')
        }
    } catch (error) {
        setLoading(false)
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }
}

export async function registerHandler({
    response,
    setLoading,
    setToast,
    setLocalAuthentication,
    router,
}) {
    setLoading(true)

    try {
        if (response && response.status && response.status == 200) {
            setLocalAuthentication(true)
            router.replace('/user')
        }
    } catch (error) {
        setLoading(false)
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }
}

export async function verifyHandler({
    response,
    setLoading,
    setToast,
    router,
    toast,
}) {
    setLoading(true)

    try {
        if (response && response.status && response.status == 200) {
            burnToast(setToast, toast)
            router.replace('/')
        }
    } catch (error) {
        setLoading(false)
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }
}

export async function logoutHandler({
    response,
    setToast,
    setLocalAuthentication,
    router,
    toast,
}) {
    try {
        if (response && response.status && response.status == 200) {
            setLocalAuthentication(false)
            router.replace('/')
            burnToast(setToast, toast)
        }
    } catch (error) {
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }
}

export async function unsubscribeHandler({
    response,
    setLoading,
    setToast,
    toast,
}) {
    setLoading(true)

    try {
        if (response && response.status && response.status == 200) {
            router.replace('/')
            burnToast(setToast, toast)
        }
    } catch (error) {
        setLoading(false)
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }
}

export async function subscribeHandler({
    response,
    setLoading,
    setToast,
    toast,
}) {
    setLoading(true)

    try {
        if (response && response.status && response.status == 200) {
            router.replace('/')
            burnToast(setToast, toast)
        }
    } catch (error) {
        setLoading(false)
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }
}

export async function forgotHandler({
    response,
    setLoading,
    setToast,
    setNextStage,
    toast,
}) {
    setLoading(true)

    try {
        if (response && response.status && response.status == 200) {
            setLoading(false)
            setNextStage(true)
            burnToast(setToast, toast)
        }
    } catch (error) {
        setLoading(false)
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }
}

export async function resetHandler({
    response,
    setLoading,
    setToast,
    router,
    toast,
}) {
    setLoading(true)

    try {
        if (response && response.status && response.status == 200) {
            router.replace('/')
            burnToast(setToast, toast)
        }
    } catch (error) {
        setLoading(false)
        burnToast(
            setToast,
            error && error.response && error.response.data
                ? error.response.data
                : 'Error'
        )
    }
}
