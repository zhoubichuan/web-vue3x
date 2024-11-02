<template>
    <el-config-provider namespace="utb-ep">
        <Up3Dialog visible :custom-class="customClass">
            <template #dialog-header>
                <div class="left">
                    <p class="up3-h1">{{ title }}</p>
                    <p v-if="subTitle" class="separator" />
                    <p class="text">{{ subTitle }}</p>
                </div>

                <div class="right">
                    <Up3Icon :path="closeIconUrl" @click="handleClose" />
                </div>
            </template>

            <div class="dialog-content">
                <slot></slot>
            </div>
            <!-- eslint-disable vue/no-v-text-v-html-on-component -->
            <template #dialog-footer>
                <slot name="dialog-footer">
                    <component
                        v-for="(item, index) in footer"
                        :key="index"
                        :is="item?.is"
                        :class="item?.class"
                        v-text="item?.text"
                        @click="() => item?.click && item?.click(row)"
                    />
                </slot>
            </template>
            <!-- eslint-enabl -->
        </Up3Dialog>
    </el-config-provider>
</template>

<script lang="ts" setup name="web-dialog">
import { ElConfigProvider } from 'element-plus';
import { defineProps, defineEmits, defineOptions } from 'vue';
import Up3Dialog from '@/modules/base/components/dialog';
import Up3Icon from '@/modules/base/components/icon';
import closeIconUrl from '@/modules/base/components/dialog/close.webp?url';
// import WebLoading from './loading.vue'
const emit = defineEmits(['close']);
const handleClose = () => {
    emit('close');
};
const { title, subTitle, footer, customClass } = defineProps({
    customClass: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    subTitle: {
        type: String,
        default: ''
    },
    footer: {
        type: Array<{ is: string; class?: string; text: string; click?: () => void }>,
        default: () => []
    }
});
defineOptions({
    name: 'web-dialog'
});
</script>
<style lang="scss" scoped>
:deep(.up3-icon) {
    width: 44px;
    height: 44px;
}
.dialog-header {
    .left {
        display: flex;
        align-items: center;
        .separator {
            width: 1px;
            height: 20px;
            background: #637183;
            opacity: 0.3;
            margin: 0 30px;
        }
        .text {
            font-weight: 400;
            font-size: 28px;
            color: #244367;
            height: 42px;
        }
    }
}
.dialog-content {
    margin: 30px;
}
:deep(.operation) {
    .up3-btn {
        text-align: center;
        display: inline-block;
        &.disable {
            background: #cfd7e1;
            font-size: 24px;
            color: #ffffff;
        }
    }
}
</style>
<style lang="scss">
@import '../../config.scss';
@import '@/styles/variable';
.#{$namespace}-form {
    .#{$namespace}-form-item {
        display: flex;
        align-items: center;

        &:last-child {
            // margin-bottom: 0;
        }

        .#{$namespace}-form-item__label {
            font-size: $utb-font-size-t2;
            color: $utb-text-color-first;
            font-family: $utb-font-medium;
        }

        .#{$namespace}-form-item__content {
            .#{$namespace}-input__inner {
                min-height: 50px;
                font-size: $utb-font-size-t4;
                color: $utb-text-color-first;
            }

            .#{$namespace}-select__wrapper {
                min-height: 50px;

                input {
                    font-size: $utb-font-size-t4;
                    color: $utb-text-color-first;
                }

                span {
                    font-size: $utb-font-size-t4;
                }
            }

            .#{$namespace}-textarea__inner {
                min-height: 150px;
                font-size: $utb-font-size-t4;
                color: $utb-text-color-first;
            }

            .#{$namespace}-form-item__error {
                font-size: $utb-font-size-t5;
                padding-top: 10px;
            }

            .#{$namespace}-textarea__inner {
                font-size: $utb-font-size-t4;
                color: $utb-text-color-first;
            }
        }

        .utb-uploader {
            &.hide-upload-icon {
                .#{$namespace}-upload--picture-card {
                    display: none;
                }

                .#{$namespace}-upload-list__item-actions {
                    .#{$namespace}-upload-list__item-preview {
                        display: none;
                    }

                    .#{$namespace}-upload-list__item-delete {
                        margin-left: 0;
                    }
                }
            }
        }
    }
}
</style>
