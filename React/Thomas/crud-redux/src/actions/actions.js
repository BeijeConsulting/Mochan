export const FbLogin = {
    type : 'FB_LOGIN',
    data : true
}

export function onChange(key, value) {
    return (
        {
            type : 'ON_CHANGE',
           data: { [key] : value}
        }
    )
}