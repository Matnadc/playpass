<template>
    <section class="container-md">
        <p class="bg-primary py-3 px-5 my-5">Los miembros de Playpass pueden ahorrar hasta un 20 % en juegos
            seleccionados de la biblioteca de Playpass, además de hasta un 10 % de descuento en los complementos
            relacionados con los juegos.</p>

        <div class="row">
            <div class="col-12 col-lg-3 bg-dark p-4 mb-4">
                <form action="#" @submit.prevent class="mb-4">
                    <label for="search" class="fw-bold form-label">Buscar título del juego</label>
                    <div class="position-relative">
                        <input type="text" id="search" name="search"
                            class="form-control rounded-0 bg-transparent text-white border-primary"
                            placeholder="Ej: Cyberpunk 2077">
                        <button class="text-primary bg-transparent border-0 position-absolute change-position">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" /><span
                                class="visually-hidden">Buscar</span>
                        </button>
                    </div>
                </form>

                <p class="fw-bold">Filtros</p>
                <div class="accordion accordion-flush">
                    <div class="mb-2">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed text-uppercase" type="button"
                                data-bs-toggle="collapse" data-bs-target="#accordionOne" aria-controls="accordionOne">
                                Géneros
                            </button>
                        </h2>
                        <div id="accordionOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                            <ul class="accordion-body list-unstyled mb-0">
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Estrategia</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Shooters</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Deportes</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Acción y
                                        aventura</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Puzzles</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Plataformas</a>
                                </li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Rol</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-2">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed text-uppercase" type="button"
                                data-bs-toggle="collapse" data-bs-target="#accordionTwo" aria-controls="accordionTwo">
                                Características
                            </button>
                        </h2>
                        <div id="accordionTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <ul class="accordion-body list-unstyled mb-0">
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Multijugador
                                        Online</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Multijugador
                                        Local</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">Multijugador
                                        Masivo</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">RTX</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-2">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed text-uppercase" type="button"
                                data-bs-toggle="collapse" data-bs-target="#accordionThree"
                                aria-controls="accordionThree">
                                Clasificación
                            </button>
                        </h2>
                        <div id="accordionThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <ul class="accordion-body list-unstyled mb-0">
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">PEGI: 3</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">PEGI: 7</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">PEGI: 12</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">PEGI: 16</a></li>
                                <li class="mb-2"><a class="text-white text-decoration-none" href="#">PEGI: 18</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-9">
                <h1>Toda nuestra biblioteca</h1>
                <div class="d-flex justify-content-between">
                    <p>Viendo 1-20 de 470 resultados</p>
                    <form action="#" @submit.prevent>
                        <label for="order">Ordenar por</label>
                        <select name="order" id="order" class="form-select rounded-0 bg-primary text-white border-0">
                            <option value="recent">Más recientes</option>
                            <option value="nameAsc">Nombre ascendente</option>
                            <option value="nameDesc">Nombre descendente</option>
                        </select>
                    </form>
                </div>
                <Loader v-if="isLoading" />
                <div v-else>
                    <div class="row my-5">
                        <div class="col-6 col-md-4 col-lg-3 text-center" v-for="game in games">
                            <img v-bind:src="'/img/banners/' + game.banner + '.jpg'" :alt="'Portada de ' + game.name"
                                class="img-fluid mb-2">
                            <p>{{ game.name }}</p>
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Loader from "../components/Loader.vue";
import Pagination from "../components/Pagination.vue";
import { getAllGames } from "../services/games-list.js";

const { games, isLoading } = useGameList();

function useGameList() {
    const games = ref({});
    const isLoading = ref(true);
    let unsubscribe;

    onMounted(async () => {
        unsubscribe = await getAllGames(newGames => {
            games.value = newGames;
            isLoading.value = false;
        });
    });

    onUnmounted(() => {
        if (typeof unsubscribe !== 'function') return;
        unsubscribe();
    });

    return { games, isLoading }
}


</script>

<style scoped>
h1,
h2 {
    font-size: 4rem;
}

.change-position {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

.accordion {
    --bs-accordion-bg: #5E21DB;
    --bs-accordion-btn-color: #ffffff;
    --bs-accordion-active-color: #5E21DB;
    --bs-accordion-btn-focus-border-color: none;
}

</style>