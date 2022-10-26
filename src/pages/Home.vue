<template>
    <section class="py-5 container-md mb-5">
        <div class="row">
            <div class="col-12 col-lg-7">
                <h1 class="mb-4">M&A PLAYPASS</h1>

                <p class="mb-4">Juega a títulos nuevos el mismo día de su lanzamiento. Además, disfruta con tus amigos
                    de
                    cientos de juegos de alta calidad en PC o la nube. Agregamos nuevos juegos constantemente, por lo
                    que
                    siempre habrá algo nuevo para disfrutar.</p>

                <p class="mb-4">Únite ahora para conseguir tu primer mes por solo $220.</p>

                <router-link to="/join" class="btn btn-primary rounded-0 fw-bold px-4 py-3 mb-4">Unite ahora por $220 >
                </router-link>

                <p class="mb-4 fst-italic">La suscripción continúa automáticamente con el precio mensual, a menos que la
                    canceles en tu cuenta de Playpass.
                    <router-link to="#" class="text-decoration-none">Consulta los términos.</router-link>
                </p>

            </div>

            <div class="col-12 col-lg-5 text-center">
                <picture>
                    <source srcset="../img/banner-01.png" media="(min-width: 992px)" class="img-fluid">
                    <img src="../img/banner-01-mobile.png" alt="Mascota de PlayPass" class="img-fluid">
                </picture>
            </div>
        </div>
    </section>
    <section class="bg-dark pt-5 mb-5">
        <div class="container-md">
            <div class="row flex-row-reverse flex-md-row">
                <div class="col-12 col-md-5 d-none d-lg-block">
                    <img src="../img/banner-02.png" alt="Ilustración del protagonista de Cyberpunk 2077, V" class="img-fluid">
                </div>
                <div class="col-12 col-lg-7">
                    <h2 class="mb-5">Disfrutá juegos de calidad <span class="text-primary fw-bold"
                            aria-hidden="true">///</span></h2>
                    <div class="row">
                        <div class="col-6 text-center ">
                            <font-awesome-icon icon="fa-solid fa-star" size="2x"/>
                            <p>Suscripción a EA Play incluída</p>
                        </div>
                        <div class="col-6 text-center ">
                            <font-awesome-icon icon="fa-solid fa-circle-plus" size="2x"/>
                            <p>Nuevos juegos agregados constantemente, incluidos el primer día de su lanzamiento</p>
                        </div>
                        <div class="col-6 text-center ">
                            <font-awesome-icon icon="fa-solid fa-percent" size="2x"/>
                            <p>Recompensas gratuitas y descuentos exclusivos para miembros</p>
                        </div>
                        <div class="col-6 text-center ">
                            <font-awesome-icon icon="fa-solid fa-cloud-arrow-down" size="2x" />
                            <p>Descargar juegos para PC desde la nube</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="container-md py-5">
        <h2 class="mb-4">Jugá desde el día uno</h2>
        <p class="mb-4">Disfruta de increíbles juegos nuevos el mismo día de su lanzamiento, como Cyberpunk 2077 de CD Project Red , así como franquicias icónicas de Bethesda Softworks, títulos independientes, exitazos y mucho más.</p>
        <router-link to="/games" class="btn btn-primary rounded-0 fw-bold px-4 py-3 mb-4">Explorar la biblioteca ></router-link>
        <div class="row flex-column-reverse flex-lg-row">
            <div class="col-12 col-lg-4 my-5 text-center">
                <picture>
                    <source srcset="../img/banner-03.png" media="(min-width: 992px)" class="img-fluid">
                    <img src="../img/banner-03-mobile.png" alt="Banner del juego Core Keeper" class="img-fluid">
                </picture>
            </div>
            <div class="col-12 col-lg-8 align-self-center">
                <h3>Core Keeper</h3>
                <p>Ya disponible</p>
                <div class="d-flex gap-2">
                    <p class="bg-primary px-3 py-1">Windows</p>
                    <p class="bg-primary px-3 py-1">Linux</p>
                    <p class="bg-primary px-3 py-1">Cloud</p>
                </div>
                <p>Explora una caverna infinita llena de criaturas, reliquias y recursos en una aventura minera de tipo «sandbox» para 1-8 jugadores. Extrae recursos, construye, lucha, fabrica y cultiva para desentrañar el misterio del antiguo Núcleo.</p>
                <router-link to="#" class="fw-bold mb-4 text-reset text-decoration-none">Más información ></router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>


<style scoped>
h1,
h2 {
    font-size: 4rem;
}
</style>