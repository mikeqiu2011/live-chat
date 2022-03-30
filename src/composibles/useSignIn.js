import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null)

const signIn = async (email, password) => {
    try {
        const res = await auth.signInWithEmailAndPassword(email, password)
        console.log(res);
    } catch (err) {
        console.log(err.message);
        error.value = 'incorrect login credential'
    }
}

const useSignIn = () => {
    return { error, signIn }
}

export { useSignIn }