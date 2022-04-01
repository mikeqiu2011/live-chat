import { ref, watchEffect } from "vue"
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


    let colRef = db.collection(collection)
        .orderBy("createdAt")

    const unsub = colRef.onSnapshot((snap) => {
        console.log('snapshot');
        let result = []
        snap.docs.forEach(doc => {
            // must wait for the server to create the timestamp & send it back
            // we don't want to edit data until it has done this
            doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
        })

        docs.value = result
        error.value = null
    }, (err) => {
        console.log(err);
        docs.value = null
        error.value = err.message
    })


    watchEffect((onInvalidate) => {
        //unsubscribe from prev collection when watcher is stopped (component unmount)
        onInvalidate(() => {
            unsub()
            console.log('unsubscribed');
        })
    })

    return { error, addDoc, docs }
}

export { useCollection }