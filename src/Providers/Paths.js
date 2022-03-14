

export const ProviderPaths = async () => {

    const unicID = (new Date().getTime()).toString(36);

    let storage = `/storage/collection_1_${unicID}`
    let linkPrivate = `/private/collection_1_${unicID}`
    let linkPublic = `/public/collection_1_${unicID}`


    return {
        storage,
        linkPrivate,
        linkPublic
    }
};
