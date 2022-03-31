import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null)

const logout = async () => {
    error.value = null
    try {
        const res = await auth.signOut()
    } catch (err) {
        console.log(err);
        error.value = err.message
    }

}

const useLogout = () => {
    return { error, logout }
}

export { useLogout }