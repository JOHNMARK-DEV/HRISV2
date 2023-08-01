// import CryptoJS from 'crypto-js'
// const plaintext = 'My secret message'
// const key = '12345678901234567890123456789012' // 256-bit key
// const iv = '1234567890123456' // 128-bit IV

const stateRehydrationPlugin = (store) => {
    // Try to load the state from local storage

    // const decryptedBytes = CryptoJS.AES.decrypt(localStorage.getItem('myApp:state'), key, { iv: iv })
    // const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8)
    const savedState = localStorage.getItem('myApp:state')

    if (savedState) {
        // Replace the initial state with the saved state
        store.replaceState(JSON.parse(savedState))
    }

    // Save the state to local storage before the page is unloaded
    window.addEventListener('beforeunload', () => {

        // const state = JSON.stringify(store.state) 
        // const ciphertext = CryptoJS.AES.encrypt(state, key, { iv: iv }).toString()
        // localStorage.setItem('myApp:state', ciphertext)

        const state = JSON.stringify(store.state)
        localStorage.setItem('myApp:state', state)
    })
}

export default stateRehydrationPlugin