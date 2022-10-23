import { ref } from "vue";

export default function useNotification() {
    const status = ref({
        type: "success",
        text: "",
    });

    function close() {
        status.value.text = "";
    }

    return { status, close };
}