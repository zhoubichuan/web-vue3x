<template>
    <ul class="vue-node">
        <li class="vue-node-single">
            <!-- 根节点 -->
            <div v-if="level === 1" :class="['root-node', 'node-level-' + level]">
                <slot name="root" v-bind="{ row: currentData, handleExpand, expand: currentData.expand, loading }">
                    <div class="root-content">
                        <div class="expand-wrapper" @click="handleExpand">
                            <div class="expand-status">
                                <div class="tips">
                                    <img :class="currentData.expand ? 'open' : 'close'"
                                        :src="images[!currentData.expand ? 0 : 1]" />
                                    <img class="icon" :src="images[2]" />
                                </div>
                            </div>
                            <div class="detail-content">
                                <span class="title">{{ currentData.label }}</span>
                            </div>
                        </div>
                        <vue-input class="search" v-model="name" placeholder="请输入名称" @change="searchChange" />
                    </div>
                </slot>
                <transition name="dropdown" mode="out-in">
                    <div class="tree-node" v-if="currentData.expand">
                        <tree-node class="child-node" v-for="(item, index) in currentData.children" :key="index"
                            :data="item" :level="level + 1" :branchAlias="branchAlias"
                            :default-expanded-keys="defaultExpandedKeys" :load="load">
                            <template #root="scoped">
                                <slot name="root" v-bind="scoped"></slot>
                            </template>
                            <template #branch="scoped">
                                <slot name="branch" v-bind="scoped"></slot>
                            </template>
                            <template #leaf="scoped">
                                <slot name="leaf" v-bind="scoped"></slot>
                            </template>
                        </tree-node>
                    </div>
                </transition>
            </div>
            <!-- 分支节点 -->
            <div v-else-if="branchAlias ? currentData[branchAlias] : currentData.children && currentData.children.length"
                :class="['branch-node', 'node-level-' + level]">
                <slot name="branch" v-bind="{ row: currentData, handleExpand, expand: currentData.expand, loading }">
                    <div class="branch-content node-content" @click="handleExpand">
                        <div class="expand-status">
                            <div class="tips">
                                <img :class="currentData.expand ? 'open' : 'close'"
                                    :src="images[!currentData.expand ? 3 : 4]" />
                            </div>
                        </div>
                        <div class="detail-content">
                            <span class="title">{{ currentData.label }}(共{{ currentData?.children?.length }}份)</span>
                        </div>
                    </div>
                </slot>
                <transition name="dropdown" mode="out-in">
                    <div class="tree-node" v-if="currentData.expand">
                        <tree-node class="child-node" v-for="(item, index) in currentData.children" :key="index"
                            :data="item" :level="level + 1" :branchAlias="branchAlias"
                            :default-expanded-keys="defaultExpandedKeys" :load="load">
                            <template #root="scoped">
                                <slot name="root" v-bind="scoped"></slot>
                            </template>
                            <template #branch="scoped">
                                <slot name="branch" v-bind="scoped"></slot>
                            </template>
                            <template #leaf="scoped">
                                <slot name="leaf" v-bind="scoped"></slot>
                            </template>
                        </tree-node>
                    </div>
                </transition>
            </div>
            <!-- 叶子节点 -->
            <div v-else :class="['leaf-node', 'node-level-' + level]">
                <slot name="leaf" v-bind="{ row: currentData }">
                    <div class="leaf-content node-content">
                        <template v-if="currentData.id">
                            <div class="text">
                                <div class="title">{{ currentData.label }}</div>
                                <div class="sub-title">{{ currentData.label }}</div>
                            </div>
                            <div class="handle" v-if="!currentData.children || !currentData.children.length">
                                <button class="button">xxx</button>
                                <button class="button">xxxxx</button>
                            </div>
                        </template>
                        <template v-else>
                            <div class="no-data">{{ currentData.label }}</div>
                        </template>
                    </div>
                </slot>
            </div>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import VueInput from '../../input/index'
import type { NodeType } from './type'

defineSlots<{
    root: (props: { row: NodeType; handleExpand: () => void; expand: boolean; loading: boolean }) => void
    branch: (props: { row: NodeType; handleExpand: () => void; expand: boolean; loading: boolean }) => void
    leaf: (props: { row: NodeType }) => void
}>()
const { data, level, branchAlias, defaultExpandedKeys, load } = defineProps({
    data: {
        type: Object as () => NodeType,
        require: true,
        validator(items: NodeType) {
            return JSON.stringify(items) != '{}'
        },
    },
    level: {
        type: Number,
        default: 0,
    },
    branchAlias: {
        type: String,
        default: '',
    },
    defaultExpandedKeys: {
        type: Array as () => (number | string)[],
        default: () => [],
    },
    load: {
        type: Function,
        default: () => { },
    },
})
const images = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbtJREFUaEPtl01Sg0AQhbvzV+UtzAUET2ByA3MCzRHYBTcmK6hyww30CHoC4wkcvYAcgZ1VgtMWZGOlIAG6CVA1rOc1/b3XzAwIPX+w5/2DAWg7QZOASYDpgBkhpoFsuUmAbSGzgGgCtptca8CrtKcB6Rflj7fM/o7KxQCsu+QRCG733rhFipfKPwuPdlJzgQjAxSpeI+J9QQ8REi2aSkMEwHKTLwA4P2QiAQaf3tCpaXShTAqASjYmPlKnBkg5IwRYKm/0XBL64LI2ALKGpEaqNYCdraiQfhacXaplgIwiQtKO8idPdUaqCwC7LEgv60B0BgAAwg9vNK2aQpcAAInmVQ+8bgEk+lI9TFSVFLoEEOH3cKoCjHoJgKAd5U2CKs1nH39VQd56y03KXiXy5L3eRkOkeN7LgwyJNsofr7kT0MYIhUh6U+fQyoM9MQD/7rMPIQTw+w5A9qFxkBqZRgDsVbym4l/KEAEcqft/IwBpUctNXgFgtvcC8T+wxgDSwvYqnhHgDSFGA6C3plz/DyHyDXC3Qo7eAHDck9CaBCRc5NQwCXDck9CaBCRc5NQwCXDck9CaBCRc5NT4A7DdsTH0SUSQAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAeFJREFUaEPtV11OwkAQnimaUIkJR+AIcgMQHoxAxBvADfAEcAPrCcATaEIxPtDSG+gN5Ab6INYYZUxLangA7ewsGuL2+ftm9/vZXUDY8g+3fP9gBPx1giYBk4DQAVMhoYFiuklAbKFwgElAaKCYbhIQWygc8H8TOKzPegh4AoAHEhOJYAo4v/TdXE9ljlIClXo4AYCSyoJrOQQDb2S3uTPZAqr1sEQAkQD9H85PvWHumjOYLaBSC/uA0OIskhaLiM54mD1Li49wbAHVxus5EXU4i6TF/oqASmPWBLKu0m6Kg0OA8ti1AyaHA19gN3KIAQLPtcvc3bArFC1QOgoLVgYmiFDgLrgaT08f71gMbu0pd56SgDgFjVVSqU4iVFlANGDxmFldrmvLeEJ0fObNs8wXCYhF1MIHQZWUeq9VgPp5UO+9VgFxCsfPLbQyfVaVFF7dVfPFFUqGcs6DtPfaE/gSkeo84L3nZoustL4Ba0sgeR8yO3QHgHnd9/06DVoF/HQeaA5t/8Ye6HI/mqNdwOJqfekgQjdJIv7TAnThj/YcnZvfmIC4Ts3HPLztFsCifODus36gcURuJAHOBqRYI0DqoJRvEpA6KOWbBKQOSvkmAamDUr5JQOqglG8SkDoo5X8CQEyCMd1iOWYAAAAASUVORK5CYII=',
    'data:image/png;base64,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',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcJJREFUaEPtl01SwkAQhbvRg8gNdC0guYEjutZUGSyXOYFwA7aIVXoAAT2BKNnLDeQI2QemrZCNWPwl3SFJ1WQ9PdPfey/zg1DwDwvePxiArB00DhgHmAqYCDEFZJcbB9gSMicQdaD7+nVeOiidRT3Ru6OqI2Z/W8vFAJ6G3jMR3CytiDCaQWDfK2u6tZOEA0QAuv1xq4T4sKYHH5BUWm6IADwOvB8EONooIkLHURU3odBry0QAegOPdmoshUjtFyCi9LXW9t1l7W0n6C2DsgCIWhKKVHYAEcZkhoHi7FJZAywiRaTdZqP2kiRSeQCIjj3SdhKI3AAgwPT2olKO60JuABaNz8lyruJdP3IFQIgnTXU6ieNCngD8QwzKtrL8YgIQuE6j0onTfHScCHw7XyVWr1XcbTTceQIMrGIeZERtp1FtcQOw9wiFqmvS7SSH1irYfQOw7z7/IaQAvgHgeGMchCKTDkB/3II1T8owMnOtXan7fyoA4aS9ofcBBPWlBVJ4gaUGEEGM6wh4TeGra64/01L9L4TIP8DdCjn1BoCjnkStcUBCRc4cxgGOehK1xgEJFTlzGAc46knUGgckVOTM8QvHabYx0nl0TQAAAABJRU5ErkJggg==',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAActJREFUaEPtVs1RwlAQ3gXCjDdKoAIJHUAFagfQAd6Sk5wMN7ECsALtQDow0ICU4M0ZElnnwWQmB9Hs+x46jC/n/Xbf97MsTCf+8Ym/nzyBv3bQO+AdABXwEQIFhOHeAVhCsIF3ABQQhnsHYAnBBv/XgTDKxsK1CyIJQRHXIvKwmgRjmz5WDnTi/JmIejYDD2KY5svbxlDbU00gjLKeMBsCzj8mukqTxpOmsZpAJ8pnxDTQDKlaK8TTVVK/rlpv6tQEzuOPOyYZaYZUrf0VAmGcXwrRY9VHaepYpJ9OgoUKoykuao+yxESLZdLoa9+jjpAZEEbvbeHALHJbO/BA/RtL1k0nZ2ttPysCOxIOo2QTnYKoNYG9E+aY8Y1WtXK9zeKW8RAB06gT569AlKxy75QAsA/WuXdKYB+lzUC4NtNEyebqftUfjlDRVLMPaO6dO1C6DxX2gdNlUu9q3Pqu1pkDpfvwQkQt17/3h0g4JfDTPrBsh+mkOXelvunjnMD+yG1GQjVzHwon1kzb+zRpTl0+/mgEdiRG0qIga1OdW9o/aBqSR3FA8wC01hNAFUTx3gFUQRTvHUAVRPHeAVRBFO8dQBVE8d4BVEEU/wmZ9IYxo5UHxAAAAABJRU5ErkJggg==',
    'data:image/png;base64,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',
]
const loading = ref(false)
const currentData = ref(data as NodeType)
const emits = defineEmits(['on-toggle-expand', 'search-change'])
const handleExpand = async () => {
    currentData.value.expand = !currentData.value.expand
    loading.value = true
    await load(currentData.value)
    loading.value = false
    emits('on-toggle-expand', currentData)
}
watch(
    () => defaultExpandedKeys,
    newKey => {
        if (newKey?.length && defaultExpandedKeys[level - 1]) {
            currentData.value.expand = defaultExpandedKeys[level - 1] == currentData.value.id
            console.log(currentData.value.expand, 'currentData')
        }
    },
    {
        deep: true,
        immediate: true,
    },
)
watch(
    () => data,
    newData => {
        if (newData) {
            currentData.value = newData
        }
    },
    {
        deep: true,
        immediate: true,
    },
)

const name = ref('')
const searchChange = () => {
    emits('search-change', name.value)
}

defineOptions({
    name: 'TreeNode',
})
</script>

<style>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
}
</style>
<style lang="scss">
@use '../../config.scss';
@use '../../common.scss';

.#{config.$prefix}-node {
    width: 100%;
    padding: 0;
    margin: 0 0 20px 0;

    &.child-node {
        margin-bottom: 0;
    }

    .#{config.$prefix}-node-single {
        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%;

        .root-node {
            .root-content {
                display: inline-block;
                width: 100%;
                height: 85px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                background: #e5e6ff;
                border-radius: 12px 12px 12px 12px;
                position: relative;
                @include common.content-middle();

                &.light-blue {
                    background: #ebf4fe;

                    .expand-wrapper {
                        width: 100%;
                    }
                }

                .expand-wrapper {
                    width: calc(100% - 390px);
                    cursor: pointer;
                    display: inline-block;
                    vertical-align: middle;
                    @include common.content-middle();

                    .expand-status {
                        cursor: pointer;
                        margin-left: 24px;
                        display: inline-block;
                        vertical-align: middle;
                        @include common.content-middle();

                        .tips {
                            display: inline-block;
                            vertical-align: middle;
                            @include common.content-middle();

                            .close {
                                height: 24px;
                                width: 24px;
                                vertical-align: middle;
                            }

                            .icon {
                                margin: 0 16px;
                                height: 44px;
                                width: 44px;
                                vertical-align: middle;
                            }
                        }
                    }

                    .detail-content {
                        text-align: left;
                        font-style: normal;
                        vertical-align: middle;
                        display: inline-block;
                        width: calc(100% - 148px);

                        .title {
                            font-weight: 600;
                            font-size: 32px;
                            color: #244367;
                            display: inline-block;
                            width: 100%;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            vertical-align: middle;
                            word-break: break-all;
                            @include common.ellipsis();

                            &.ellipsis-2 {
                                @include common.ellipsis(2);
                            }

                            &.ellipsis-3 {
                                @include common.ellipsis(3);
                            }
                        }
                    }
                }

                .suggest {
                    left: 0;
                    margin-top: 10px;
                }
            }
        }

        .branch-node {
            @include common.content-middle();

            .branch-content {
                display: inline-block;
                cursor: pointer;
                width: 100%;
                background: #ffffff;
                border-radius: 0;
                border-bottom: 1px solid #eef2f6;
                box-sizing: border-box;

                @include common.content-middle();

                .expand-status {
                    cursor: pointer;
                    margin: 0 16px 0 24px;
                    display: inline-block;
                    font-size: 0;

                    .tips {
                        .close {
                            height: 24px;
                            width: 24px;
                            vertical-align: middle;
                        }

                        .open {
                            height: 24px;
                            width: 24px;
                            vertical-align: middle;
                        }

                        .icon {
                            margin: 0 16px;
                            height: 44px;
                            width: 44px;
                            vertical-align: middle;
                        }
                    }
                }

                .detail-content {
                    font-weight: 600;
                    font-size: 0;
                    color: #244367;
                    display: inline-block;
                    vertical-align: middle;
                    max-width: calc(100% - 100px);
                    padding: 16px 0;

                    .title {
                        line-height: 39px;
                        font-weight: 400;
                        font-size: 28px;
                        color: #293957;
                        word-break: break-all;
                    }
                }
            }
        }

        .leaf-node {
            &.node-level-2 {
                .leaf-content {
                    padding-left: 64px;
                }
            }

            .leaf-content {
                font-weight: 600;
                font-size: 32px;
                color: #244367;
                text-align: left;
                font-style: normal;
                text-transform: none;
                vertical-align: middle;
                display: flex;
                background: #ffffff;
                border-bottom: 1px solid #eef2f6;
                min-height: 92px;

                .text {
                    margin: 16px 0;
                    width: calc(100% - 340px);

                    .title {
                        font-weight: 400;
                        font-size: 28px;
                        color: #293957;
                        text-align: left;
                        font-style: normal;
                        text-transform: none;
                        max-width: 269px;
                        word-break: break-all;
                        line-height: 39px;
                    }

                    .tips {
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 28px;
                        color: #ff5656;
                        text-align: left;
                        font-style: normal;
                        text-transform: none;
                        margin-top: 8px;
                    }
                }

                .handle {
                    width: 300px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 16px 20px;

                    .button {
                        padding: 0 30px;
                        height: 60px;
                        background: #eaf2ff;
                        border-radius: 50px 50px 50px 50px;
                        font-weight: 400;
                        font-size: 26px;
                        color: #2f79fc;
                        text-align: left;
                        font-style: normal;
                        text-transform: none;
                        border: none;
                    }
                }
            }
        }
    }

    .node-level-1 {
        .branch-content {
            padding-left: 0;
        }

        .leaf-content {
            padding-left: 40px;
        }
    }

    .node-level-2 {
        .branch-content {
            padding-left: 40px;
        }

        .leaf-content {
            padding-left: 104px;
        }
    }

    .node-level-3 {
        .branch-content {
            padding-left: 80px;
        }

        .leaf-content {
            padding-left: 104px;
        }
    }

    .node-level-4 {
        .branch-content {
            padding-left: 120px;
        }

        .leaf-content {
            padding-left: 144px;
        }
    }

    .node-level-5 {
        .branch-content {
            padding-left: 160px;
        }

        .leaf-content {
            padding-left: 184px;
        }
    }

    .node-level-6 {
        .branch-content {
            padding-left: 200px;
        }

        .leaf-content {
            padding-left: 140px;
        }
    }
}
</style>
