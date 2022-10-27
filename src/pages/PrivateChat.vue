<template>
    <section class="container-md">
        <Loader v-if="isLoading" />
        <div v-else>
            <h1 class="mb-3">Chat privado con {{ user.displayName || user.email }}</h1>

            <h2 class="visually-hidden">Mensajes enviados</h2>

            <div class="chat mb-3">
                <ul class="p-0">
                    <li v-for="message in messages" class="list-unstyled mb-4">
                        <span class="fw-bold badge bg-primary">
                            ({{ dateToString(message.created_at) }})
                            {{ message.from }}:
                        </span> {{ message.text }}
                    </li>
                </ul>
            </div>

            <h2 class="visually-hidden">Enviar mensaje</h2>
            <form action="#" method="post" @submit.prevent="handleSubmit">
                <label for="message" class="visually-hidden">Mensaje</label>
                <textarea id="message" class="form-control mb-3 rounded-0" placeholder="Escribí un mensaje aquí" v-model="message"></textarea>
                <button class="btn btn-primary rounded-0" type="submit">Enviar</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { useUserProfile } from "../composition/useUserProfile.js";
import { useRoute } from "vue-router";
import useAuth from "../composition/useAuth.js";
import { sendPrivateMessage, subscribeToPrivateChat } from "../services/private-chat.js";
import { onMounted, onUnmounted, ref } from "vue";
import { dateToString } from "../helpers/date.js"
import Loader from "../components/Loader.vue";

const { user, isLoading } = useUserProfile();
const { message, handleSubmit } = usePrivateChatForm();
const { messages } = usePrivateChat();

function usePrivateChatForm() {
    const route = useRoute();
    const { user } = useAuth();
    const message = ref('');

    function handleSubmit() {
        sendPrivateMessage({
            from: user.value.id,
            to: route.params.id,
            text: message.value,
        });
        message.value = "";
    }

    return { message, handleSubmit }
}

function usePrivateChat() {
    const messages = ref([]);
    const { user } = useAuth();
    const route = useRoute();
    let unsubscribe;

    onMounted(async () => {
        unsubscribe = await subscribeToPrivateChat(
            { from: user.value.id, to: route.params.id },
            newMessages => messages.value = newMessages,
        );
    });

    onUnmounted(() => {
        if (typeof unsubscribe !== 'function') return;
        unsubscribe();
    });

    return { messages }
}
</script>