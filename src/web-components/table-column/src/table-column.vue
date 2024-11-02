<template>
    <el-table-column v-bind="$attrs" class="web-table-column">
        <template #default="scoped">
            <slot v-bind="scoped"></slot>
        </template>
    </el-table-column>
</template>

<script setup lang="ts" name="WebTableColumn"></script>

<style lang="scss">
.web-table-column {
}
</style>
