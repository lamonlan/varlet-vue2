import Tabs from '..'
import Tab from '../../tab'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'
import VarTabs from '../Tabs'
import VarTab from '../../tab/Tab'
import VarTabsItems from '../../tabs-items/TabsItems'
import VarTabItem from '../../tab-item/TabItem'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, mockOffset } from '../../utils/jest'

let originScrollTo

beforeEach(() => {
  originScrollTo = Element.prototype.scrollTo
  Element.prototype.scrollTo = jest.fn()
})

afterEach(() => {
  Element.prototype.scrollTo = originScrollTo
})

mockOffset()

test('test tabs & tab & tabsItems & tabItem plugin', () => {
  Vue.use(Tabs).use(Tab).use(TabsItems).use(TabItem)
  expect(Vue.component(Tabs.name)).toBeTruthy()
  expect(Vue.component(Tab.name)).toBeTruthy()
  expect(Vue.component(TabsItems.name)).toBeTruthy()
  expect(Vue.component(TabItem.name)).toBeTruthy()
})

// const Wrapper = {
//   components: {
//     [VarTabs.name]: VarTabs,
//     [VarTab.name]: VarTab,
//     [VarTabsItems.name]: VarTabsItems,
//     [VarTabItem.name]: VarTabItem,
//   },
//   props: ['onClick', 'onChange'],
//   data: () => ({
//     active: 2,
//   }),
//   template: `
//     <var-tabs :active.sync="active" v-bind="$props">
//       <var-tab style="width: 100px">选项1</var-tab>
//       <var-tab style="width: 100px">选项2</var-tab>
//       <var-tab style="width: 100px">选项3</var-tab>
//     </var-tabs>

//     <var-tabs-items :active="active">
//       <var-tab-item>视图1</var-tab-item>
//       <var-tab-item>视图2</var-tab-item>
//       <var-tab-item>视图3</var-tab-item>
//     </var-tabs-items>
//   `,
// }

// test('test tabs active', async () => {
//   const wrapper = mount(Wrapper)
//   await delay(200)
//   expect(wrapper.html()).toMatchSnapshot()
//   wrapper.destroy()
// })

// test('test tabs match index', async () => {
//   const onClick = jest.fn()
//   const onChange = jest.fn()

//   const wrapper = mount(Wrapper, {
//     listeners: {
//       click: onClick,
//       change: onChange,
//     },
//   })
//   await delay(100)

//   const tab = wrapper.find('.var-tab')
//   await tab.trigger('click')
//   expect(onClick).toHaveBeenLastCalledWith(0)
//   expect(onChange).toHaveBeenLastCalledWith(0)
//   wrapper.destroy()
// })

// test('test tabs match name', async () => {
//   const onClick = jest.fn()
//   const onChange = jest.fn()

//   const Wrapper = {
//     components: {
//       [VarTabs.name]: VarTabs,
//       [VarTab.name]: VarTab,
//     },
//     data: () => ({
//       active: '选项3',
//     }),
//     methods: {
//       onClick,
//       onChange,
//     },
//     template: `
//       <var-tabs :active.sync="active" v-bind="$props">
//         <var-tab name="选项1" style="width: 100px">选项1</var-tab>
//         <var-tab name="选项2" style="width: 100px">选项2</var-tab>
//         <var-tab name="选项3" style="width: 100px">选项3</var-tab>
//       </var-tabs>
//     `,
//   }

//   const wrapper = mount(Wrapper, {
//     listeners: {
//       click: onClick,
//       change: onChange,
//     },
//   })

//   await delay(100)
//   const tab = wrapper.find('.var-tab')
//   await tab.trigger('click')
//   expect(onClick).toHaveBeenLastCalledWith('选项1')
//   expect(onChange).toHaveBeenLastCalledWith('选项1')
//   wrapper.destroy()
// })

// test('test tabs match boundary', async () => {
//   const onChange = jest.fn()

//   const wrapper = mount(Wrapper, {
//     listeners: {
//       change: onChange,
//     },
//   })

//   await delay(100)
//   await wrapper.setData({ active: -1 })
//   expect(onChange).toHaveBeenCalledTimes(0)
//   expect(wrapper.vm.active).toBe(0)
//   wrapper.destroy()
// })

// test('test tabs disabled', async () => {
//   const onClick = jest.fn()
//   const onChange = jest.fn()

//   const wrapper = mount({
//     components: {
//       [VarTabs.name]: VarTabs,
//       [VarTab.name]: VarTab,
//     },
//     data: () => ({
//       active: 1,
//     }),
//     template: `
//       <var-tabs v-model="active">
//         <var-tab disabled>选项1</var-tab>
//         <var-tab>选项2</var-tab>
//         <var-tab>选项3</var-tab>
//       </var-tabs>
//     `,
//   })

//   await delay(100)
//   expect(wrapper.html()).toMatchSnapshot()

//   const tab = wrapper.find('.var-tab')
//   await tab.trigger('click')
//   expect(onClick).toHaveBeenCalledTimes(0)
//   expect(onChange).toHaveBeenCalledTimes(0)
//   wrapper.destroy()
// })

// test('test tabs relation tabsItems', async () => {
//   const wrapper = mount(Wrapper)

//   await delay(100)
//   expect(wrapper.html()).toMatchSnapshot()

//   await wrapper.setData({ active: 1 })
//   await delay(50)
//   expect(wrapper.html()).toMatchSnapshot()
//   wrapper.destroy()
// })
