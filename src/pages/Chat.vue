<template>
    <section>
        <h1 class="mb-3">Proveedor</h1>
        <div class="row">
            <div class="col-8">
                <h2 class="mb-3">Sala de chat</h2>
                <div class="messages">
                    <div v-if="isLoading">
                        <Loader />
                    </div>
                    <div v-else>
                        <ul class="p-0">
                            <li v-for="message in messages" class="list-unstyled mb-4"><span
                                    class="fw-bold badge bg-primary">({{ formatDate(message.created_at) }}) {{
                                    message.name }}:</span> {{ message.text }} </li>
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

<script>
import { subscribeToChatMessages, saveChatMessage } from "../chat/chat";
import { dateToString } from "../helpers/date.js";
import Loader from "../components/Loader.vue";
import { subscribeToAuthChanges } from "../services/auth";

export default {
    name: "Chat",
    data: () => ({
        messages: [],
        newMessage: {
            name: "",
            text: "",
        },
        user:{
            id: null,
            email: null,
            name: null,
        },
        isLoading: true,
        unsbscribeFn: () => { },
        unsbscribeAuthFn: () => { }
    }),
    computed: {
        username() {
            return this.user.name || this.user.email;
        }
    },
    methods: {
        formatDate(date) {
            return dateToString(date);
        },
        save() {
            saveChatMessage({
                ...this.newMessage,
                name: this.username,
            });
            this.newMessage.name = "",
                this.newMessage.text = "";
        }
    },
    mounted() {
        this.unsbscribeFn = subscribeToChatMessages(newMessages => {
            this.messages = newMessages;
            this.isLoading = false;
        });
        this.unsbscribeAuthFn = subscribeToAuthChanges(newUserData => this.user = newUserData);
    },
    unmounted() {
        this.unsbscribeFn();
        this.unsbscribeAuthFn();
    },
    components: { Loader }
}
</script>

<style scoped>

</style>