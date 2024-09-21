<template>
    <div :class="{ 'vue-input': true, }">
        <div class="main">
            <div class="pre"></div>
            <input class="input" :value="modelValue" @input="handleUpdate" v-bind="newAttrs" />
            <div class="suf">
                <img class="icon" @click="handleSearch" :src='imgSrc'>
            </div>
        </div>
        <ul class="suggest" v-if="modelValue && suggestData.length">
            <li class="item" v-for="(item, index) in suggestData" :key="index">{{ item.label }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="VueInput">
import { useAttrs, ref, defineEmits, defineOptions, type ImgHTMLAttributes } from 'vue';

const attrs = useAttrs();
let newAttrs = attrs;
const emits = defineEmits<{ 'update:modelValue': [string], 'search': [string] }>();

const {
    modelValue,
    suggestData,
} = defineProps<{
    modelValue: '',
    suggestData?: { label?: string }[]
}>();
const inputValue = ref('');
const imgSrc = ref<ImgHTMLAttributes['src']>('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABNRJREFUaEPtmk1SGzkUx/9qHDJLshxMKuEG4QRENUuaqeEE4BNAThA4QcwJICdgamiWKTkniHMCXAVmltNZxh/S5LnbRG5LLXXTzYcrqqJYtCTr974kvSeGBW9swfnwC/Cpa7gWDV6I6zdAsKmA14B8owuJgcUKiBlYV2L8dYRRd4evx3UJsjLAc3H1liHYBfAWEzDvFgOsqzA6HmHcqRr2zoD/iOu9AOx9QSgbfaykPB4Fo3ZVoKUByQwV2FlFYFngnoQ6+pOvnXrbgaVjKcBzcXXIEJDW8lrMgI4C6yk5/saCxqWSo3UawILglY8pM+DvAQatu2izEOCZuHz9DMuktZnAoVFOJL8EdLf4Wtcl/TNxubKM57sK+AtQ5Lum1htiwHf4es81n+m7N2AKJywmeWeTSoLU0nsLaMyguI/QspBegCTpZ1j+YoJTkEfb/OVhGemaxkTi+gBJ0FrJfI+HGGwU1aQXYCT6BJc1yx6D2ikjVZcwcqylsLk6ASNx8wFQB5lFFf4hF1T2e2o15BIZwbJOyFe573y5gOnmTT+it1Km4rsgvZ/dNdS7kK+1febMBYzEjcg6PYPaqMMsbYu1mKu3BVkB0xPKif7DSsqj7T+qCyg+GqA+prX8CHinIW+2XHNYAQ3aI6lRFKvtYJy32Ej0Sdh7ep8hBuuuqGoENPmeguTb/GXHJbG6vqemeqnPL6FaruOcEdAQOeOQN1/UtXjfeS9E/yw59dy2bsibG3njLYD9//SN9qF8L7twk2W5zHQOML0l0MZ+21yT+Gqgin6RmBW+y0wNgDf7CkrfYx6FeU6FE4lrATDtYM7aIV99ZxPeHGDW/+jKssWbO1VIv4o5zj9dHbJAv6qpTsjXrCcbgwazjpwvoSoWXWSOSPy7C0j9ItwLeXNyzzQ1gwZnTeCxBJjp4k2BJuRN637uBASCvZD//rGIlOvsWzngwmvwsQFW4IOz97/HFkUvxNw2lnua8dkHc6NUnf5mmttwXMu9VcwBljkO3Sdk9iTzoxRwsMVXj723CeoYib7SB7iOQ/cFaBK+6wJu3D/KnNrvA7LMLccIaLzNP/x9kFKXdB/U0onuU1bOjb5Pk+lVogcNNqbsns8tp1BO5qF80Zzd80sfWgEtKTvvbFZVPmnLj/poj9aQmza0ZLPuFdKUbCpyuvLIbM9nswB004pPrRk2S5muUHbPCVhlncDXbJOy2vJJJsFEwwtXmZyANGsepIJsVZlOzCvTlQlyXoAEmSajqE6RLWuRK3eG+E6V2FJFSk2IVDabSe7+1DprJy82AkjIj6586HScN6BDk+l8rKMwpnqhd4I4Fdy+HQyxwrjF0NjX6yS+dclCgD8hn5/klJwnvjJ5GiLHnye1eQy/ASwNSGolQOMVjVdJaSzvycltxI7E3MEDPpCFAaeqz6nE+sYSRz/WHuL70bQWYtmynJClAVNtrjRk44AFAZmYwTdLsZ4OMSCwOX+2ve7I0+SdAKfLp7CegC5tOkzXRkwwHRuYPqgoZCWA+gKSMP/bJiAp+0w+Rpqd/lHXHqB69GaNoi8gPxctqBaBrBywlFGWGOQL+WQBSSa2o5ye6X7SgBZIeiRBld/JtvTkAZMckv54aPYFxkIATrcs+p99Q7AwgLY4tfCA/wPq4bJXeZ3QsAAAAABJRU5ErkJggg==')
const handleUpdate = (event: InputEvent) => {
    inputValue.value = event!.target!.value;
    emits('update:modelValue', inputValue.value);
};
const handleSearch = () => {
    emits('search', inputValue);
}
defineOptions({
    name: 'VueInput'
});
</script>

<style lang="scss" scoped>
@import '../../config.scss';
@import '../../common.scss';

.#{$prefix}-input {
    width: 394px;
    height: 60px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    display: inline-block;
    vertical-align: middle;

    .main {
        display: flex;
        align-items: center;
        height: 100%;

        .pre {
            width: 32px;
            height: 100%;

        }

        .input {
            width: calc(100% - 114px);
            margin: 0;
            border: none;
            outline: none;
            font-weight: 400;
            font-size: 26px;
            color: #2F79FC;
            line-height: 40px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            border-radius: 50px;

            &::placeholder {
                font-weight: 400;
                font-size: 26px;
                color: #B4BFE5;
                line-height: 40px;
                text-align: left;
                font-style: normal;
                text-transform: none;
            }
        }

        .suf {
            width: 82px;
            height: 100%;
            position: relative;

            &::before {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                content: '';
                height: 22px;
                width: 1px;
                background: #B4BFE5;
            }

            .icon {
                width: 22px;
                height: 22px;
                margin: 0 36px 0 24px;
                margin-top: 50%;
                transform: translateY(-22px);
            }
        }
    }


    .suggest {
        position: absolute;
        z-index: 1000;
        width: 100%;
        max-height: 1014px;
        background: #FFFFFF;
        box-shadow: 0px 3px 30px 0px rgba(104, 136, 176, 0.2);
        border-radius: 8px;
        padding: 0;
        margin: 0;

        .item {
            width: auto;
            height: 71px;
            font-weight: 400;
            font-size: 28px;
            color: #293957;
            line-height: 71px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            padding: 0;
            margin: 0;
            list-style: none;
            padding: 0 30px;

            &.active {
                background: rgba(47, 121, 252, 0.1);
            }
        }
    }
}
</style>
