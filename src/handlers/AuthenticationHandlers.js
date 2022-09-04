import { burnToast } from '../helpers/index.js'

export async function loginHandler({
    response,
    setLoading,
    setToast,
    setLocalAuthentication,
    router,
    toast,
}) {
    try {
        setLoading(true)

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
    try {
        setLoading(true)

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
    try {
        setLoading(true)

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
    try {
        setLoading(true)

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
    try {
        setLoading(true)

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
    try {
        setLoading(true)

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
    try {
        setLoading(true)

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
