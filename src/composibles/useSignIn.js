import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null)

const signIn = async (email, password) => {
    try {
        const res = await auth.signInWithEmailAndPassword(email, password)
        if (!res) {
            throw Error('login failed')
        }
        // console.log(res);
        error.value = null
        console.log(res);

        return res
    } catch (err) {
        console.log(err.message);
        error.value = err.message
    }
}

const useSignIn = () => {
    return { error, signIn }
}

export { useSignIn }