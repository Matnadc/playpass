<template>
    <section class="container-md">
        <h1 class="mb-2">¡Unite a Playpass!</h1>
        <p class="mb-4">Nuestros planes son: </p>

        <Loader v-if="isLoading" />
        <div v-else>
            <PriceList :pricing="pricing" />
        </div>
    </section>
</template>

<script setup>
import Loader from "../components/Loader.vue";
import PriceList from "../components/PriceList.vue";
import { usePricingList } from "../composition/usePricingList";

const { pricing, isLoading } = usePricingList();
</script>