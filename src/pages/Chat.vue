<template>
    <section class="container-md">
        <h1 class="mb-3">Chat global (Proveedores)</h1>
        <div class="row">
            <div class="col-8 bg-dark p-4 mh-fix mb-4">
                <div class="messages">
                    <div v-if="isLoading">
                        <Loader />
                    </div>
                    <div v-else>
                        <ul class="p-0">
                            <li v-for="message in messages" class="list-unstyled mb-4 ">
                                <span class="fw-bold p-2 d-flex align-items-center">  
                                    <span class="badge bg-primary me-2">({{ formatDate(message.created_at) }})</span>
                                    <router-link v-if="message.userId !== user.id" :to="`/user/${message.userId}`" class="text-reset">
                                        {{ message.displayName }}: {{ message.text }}</router-link>
                                    <template v-else>{{ message.displayName }}: {{ message.text }}</template>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <h2 class="mb-3">Escribir un mensaje</h2>
                <form action="#" id="form-chat" method="post" @submit.prevent="save">
                    <div class="mb-3">
                        <span class="form-label d-block">Nombre</span>
                        <span class="badge bg-primary rounded-0">{{ username }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea name="message" id="message" class="form-control rounded-0"
                            v-model="newMessage.text"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary rounded-0">Enviar</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Loader from "../components/Loader.vue";
import { subscribeToChatMessages, saveChatMessage } from "../chat/chat";
import { dateToString } from "../helpers/date.js";
import useAuth from "../composition/useAuth.js";

//ref en Vue es una suerte de useState en React.
const { messages, isLoading } = useChat();
const { newMessage, save } = useChatForm();
const { user, username } = useAuth();


function formatDate(date) {
    return dateToString(date);
};

function useChat() {
    const messages = ref([]);
    const isLoading = ref(true);
    let unsubscribe;

    onMounted(() => {
        unsubscribe = subscribeToChatMessages(newMessages => {
            messages.value = newMessages;
            isLoading.value = false;
        });
    });

    onUnmounted(() => {
        unsubscribe();
    });

    return { messages, isLoading }
}

function useChatForm() {
    const newMessage = ref({ text: "" });

    function save() {
        saveChatMessage({
            ...newMessage.value,
            displayName: username.value,
            userId: user.value.id
        });
        newMessage.value.text = "";
    }

    return { newMessage, save };
}

</script>

<style>
.mh-fix{
    max-height: 600px;
    overflow-y: scroll;
}
</style>