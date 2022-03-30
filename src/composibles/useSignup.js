// import { ref } from "vue";
import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null)

const signUp = async (email, password, displayName) => {
    // error.value = null

    try {
        const res = await auth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw Error('user creation failed')
        }
        // console.log(res);
        await res.user.updateProfile({ displayName: displayName })
        error.value = null

        console.log(res.user);

        return res
    } catch (err) {
        console.log(err.message);
        error.value = err.message
    }
}

const useSignup = () => {
    return { error, signUp }
}

export { useSignup }