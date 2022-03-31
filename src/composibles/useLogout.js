import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null)

const logout = async () => {
    error.value = null
    try {
        const res = await auth.signOut()
        // console.log(res);  //acutually there is no res comming back
        // if (!res) {
        //     throw new Error('logout failed')
        // }
    } catch (err) {
        console.log(err);
        error.value = err.message
    }

}

const useLogout = () => {
    return { error, logout }
}

export { useLogout }