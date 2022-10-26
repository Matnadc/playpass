<template>
    <nav>
        <ul class="pagination justify-content-center gap-4">
            <li class="page-item disabled">
                <a class="page-link">&lt;&lt;</a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item" aria-current="page">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">>></a>
            </li>
        </ul>
    </nav>
</template>

<script>

</script>

<style scoped>
.pagination {
    --bs-pagination-color: #5E21DB;
    --bs-pagination-bg: transparent;
    --bs-pagination-hover-bg: #4909c9;
    --bs-pagination-active-bg: #5E21DB;
    --bs-pagination-active-border-color: #5E21DB;
    --bs-pagination-hover-color: #fff;
    --bs-pagination-border-width: 0;
    --bs-pagination-disabled-bg: transparent;
}
</style>