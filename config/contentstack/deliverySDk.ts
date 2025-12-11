import Contentstack from '@contentstack/delivery-sdk'
export const Stack = Contentstack.stack({
    apiKey: process.env.CONTENTSTACK_API_KEY as string,
    deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN as string,
    environment: process.env.CONTENTSTACK_ENVIRONMENT as string,
    branch: process.env.CONTENTSTACK_BRANCH,
    host: process.env.CONTENTSTACK_HOST
})

export const isLivePreviewEnabled = process.env.isLivePreviewEnabled === 'true'
export const isEditButtonsEnabled = process.env.isEditButtonsEnabled === 'true'

let onEntryChange: (callback: () => void) => void = (callback) => {
    callback()
}

let VB_EmptyBlockParentClass: string = ''


export { onEntryChange, VB_EmptyBlockParentClass }