<template>
    <section class="container-md my-4">
        <h1 class="mb-4">Panel de administración</h1>

        <div>
            <h2>Opciones de contratación</h2>
            <Loader v-if="isLoading" />
            <div v-else>
                <PriceList :pricing="pricing" />
            </div>
        </div>
    </section>
</template>

<script setup>
import Loader from "../components/Loader.vue";
import PriceList from "../components/PriceList.vue";
import { usePricingList } from "../composition/usePricingList";

const { pricing, isLoading } = usePricingList();

</script>
