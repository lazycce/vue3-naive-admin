<template>
  <div>
    <logo />
    <n-scrollbar :x-scrollable="false">
      <n-menu
        mode="vertical"
        :inverted="true" 
        :indent="20"
        v-model:value="activeKey" 
        :options="menuOptions"
        :collapsed="false"
        :collapsed-width="64"
        :collapsed-icon-size="20"
        accordion
      />
    </n-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref } from 'vue'
import logo from './Logo.vue'
import variables from "@/assets/styles/variables.scss";
import { NIcon } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        'a',
        {
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes1'
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes2'
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes3'
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes4'
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes5'
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes6'
      }
    ]
  }
]

export default defineComponent({
  name: 'siderIndex',
  components: {
    logo
  },
  setup() {
    const activeKey = ref(null)

    return {
      activeKey,
      menuOptions
    }
  },
})
</script>
<style scoped>

</style>
