<template>
    <section>
        <h1 class="mb-3">Proveedor</h1>
        <div class="row">
            <div class="col-8">
                <h2 class="mb-3">Sala de chat</h2>
                <div class="messages">
                    <ul>
                        <li v-for="message in messages"><span class="fw-bold">({{ formatDate(message.created_at) }}) {{
                        message.name }}:</span> {{ message.text }} </li>
                    </ul>
                </div>
            </div>
            <div class="col-4">
                <h2 class="mb-3">Escribir un mensaje</h2>
                <form action="#" id="form-chat" method="post" @submit.prevent="save">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" name="name" id="name" class="form-control rounded-0" v-model="newMessage.name">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea name="message" id="message" class="form-control rounded-0" v-model="newMessage.text"></textarea>
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

export default {
    name: "Chat",
    data: () => ({
        messages: [],
        newMessage:{
            name: "",
            text: "",
        }
    }),
    methods: {
        formatDate(date) {
            return dateToString(date);
        },
        save(){
            saveChatMessage({
                ...this.newMessage,
            });
        }
    },
    mounted() {
        subscribeToChatMessages(newMessages => {
            this.messages = newMessages;
        })
    }
}
</script>

<style scoped>

</style>