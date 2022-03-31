import { ref } from "vue"
import { db } from "../firebase/config"

const useCollection = (collection) => {
    const error = ref(null)
    const docs = ref([])

    const addDoc = async (doc) => {
        error.value = null
        try {
            await db.collection(collection).add(doc)
        } catch (err) {
            console.log(err.message);
            error.value = 'could not send the message'
        }
    }

    const getRealtime = () => {
        db.collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                docs.value = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
            })
    }

    return { error, addDoc, getRealtime, docs }
}

export { useCollection }