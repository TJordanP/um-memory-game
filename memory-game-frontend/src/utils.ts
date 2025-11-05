
export async function delay(ms:number) {
    if (Math.abs(ms) === Infinity)  return ;
    return new Promise((resolve) => {
        setTimeout(resolve,ms);
    });
}