export const sleep = (time: number) => {
    return new Promise<void>((resolve) => {
        return setTimeout(function () {
            resolve();
        }, time)
    })
}
