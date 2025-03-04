import example from '../example'
import Select from '..'
import VarSelect from '../Select'
import Option from '../../option'
import VarOption from '../../option/Option'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test select example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test select plugin', () => {
  Vue.use(Select)
  expect(Vue.component(Select.name)).toBeTruthy()
})

// test('test option plugin', () => {
//   Vue.use(Option)
//   expect(Vue.component(Option.name)).toBeTruthy()
// })

// const Wrapper = {
//   components: {
//     [VarSelect.name]: VarSelect,
//     [VarOption.name]: VarOption,
//   },
// }

// test('test select by label', async () => {
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       value: '',
//     }),
//     template: `
//       <var-select v-model="value">
//         <var-option label="吃饭" />
//         <var-option label="睡觉" />
//       </var-select>
//     `,
//   })
//   await wrapper.trigger('click')
//   await trigger(document.querySelector('.var-option'), 'click')
//   expect(wrapper.vm.value).toBe('吃饭')

//   wrapper.destroy()
// })

// test('test select by value', async () => {
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       value: '',
//     }),
//     template: `
//       <var-select v-model="value">
//         <var-option label="吃饭" :value="1" />
//         <var-option label="睡觉" :value="2" />
//       </var-select>
//     `,
//   })

//   await wrapper.trigger('click')
//   await trigger(document.querySelector('.var-option'), 'click')
//   expect(wrapper.vm.value).toBe(1)

//   wrapper.destroy()
// })

// test('test select hint to be false', () => {
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       value: '吃饭',
//     }),
//     template: `
//       <var-select :hint="false" v-model="value">
//         <var-option label="吃饭" />
//         <var-option label="睡觉" />
//       </var-select>
//     `,
//   })

//   expect(wrapper.html()).toMatchSnapshot()

//   wrapper.destroy()
// })

// test('test select onFocus & onBlur', async () => {
//   const onFocus = jest.fn()
//   const onBlur = jest.fn()

//   const wrapper = mount(
//     {
//       ...Wrapper,
//       data: () => ({
//         value: '',
//       }),
//       methods: {
//         onFocus,
//         onBlur,
//       },
//       template: `
//       <div>
//         <div class="container"></div>
//         <var-select v-model="value" @focus="onFocus" @blur="onBlur">
//           <var-option label="吃饭" />
//           <var-option label="睡觉" />
//         </var-select>
//       </div>
//     `,
//     },
//     { attachTo: document.body }
//   )

//   await wrapper.find('.var-select__wrap').trigger('click')
//   expect(onFocus).toHaveBeenCalledTimes(1)
//   await wrapper.find('.container').trigger('click')
//   expect(onBlur).toHaveBeenCalledTimes(1)

//   wrapper.destroy()
// })

// test('test select disabled', async () => {
//   const onFocus = jest.fn()
//   const onBlur = jest.fn()

//   const wrapper = mount(
//     {
//       ...Wrapper,
//       data: () => ({
//         disabled: true,
//         value: '睡觉',
//       }),
//       methods: {
//         onFocus,
//         onBlur,
//       },
//       template: `
//       <div>
//         <div class="container"></div>
//         <var-select
//           clearable
//           :disabled="disabled"
//           v-model="value"
//           @focus="onFocus"
//           @blur="onBlur"
//         >
//           <var-option label="吃饭" />
//           <var-option label="睡觉" />
//         </var-select>
//       </div>
//     `,
//     },
//     { attachTo: document.body }
//   )

//   await wrapper.find('.var-select__wrap').trigger('click')
//   expect(onFocus).toHaveBeenCalledTimes(0)

//   await wrapper.setData({ disabled: false })
//   await wrapper.find('.var-select__wrap').trigger('click')
//   await wrapper.setData({ disabled: true })
//   await wrapper.find('.container').trigger('click')
//   expect(onBlur).toHaveBeenCalledTimes(0)

//   await wrapper.setData({ disabled: false })
//   await wrapper.find('.var-select__wrap').trigger('click')
//   await wrapper.setData({ disabled: true })
//   await trigger(document.querySelector('.var-option'), 'click')
//   expect(wrapper.vm.value).toBe('睡觉')

//   await wrapper.find('.var-icon-close-circle').trigger('click')
//   expect(wrapper.vm.value).toBe('睡觉')

//   wrapper.destroy()
// })

// test('test select readonly', async () => {
//   const onFocus = jest.fn()
//   const onBlur = jest.fn()

//   const wrapper = mount(
//     {
//       ...Wrapper,
//       data: () => ({
//         readonly: true,
//         value: '睡觉',
//       }),
//       methods: {
//         onFocus,
//         onBlur,
//       },
//       template: `
//       <div>
//         <div class="container"></div>
//         <var-select
//           clearable
//           :readonly="readonly"
//           v-model="value"
//           @focus="onFocus"
//           @blur="onBlur"
//         >
//           <var-option label="吃饭" />
//           <var-option label="睡觉" />
//         </var-select>
//       </div>
//     `,
//     },
//     { attachTo: document.body }
//   )

//   await wrapper.find('.var-select__wrap').trigger('click')
//   expect(onFocus).toHaveBeenCalledTimes(0)

//   await wrapper.setData({ readonly: false })
//   await wrapper.find('.var-select__wrap').trigger('click')
//   await wrapper.setData({ readonly: true })
//   await wrapper.find('.container').trigger('click')
//   expect(onBlur).toHaveBeenCalledTimes(0)

//   await wrapper.setData({ readonly: false })
//   await wrapper.find('.var-select__wrap').trigger('click')
//   await wrapper.setData({ readonly: true })
//   await trigger(document.querySelector('.var-option'), 'click')
//   expect(wrapper.vm.value).toBe('睡觉')

//   await wrapper.find('.var-icon-close-circle').trigger('click')
//   expect(wrapper.vm.value).toBe('睡觉')

//   wrapper.destroy()
// })

// test('test select clear', async () => {
//   const wrapper = mount(
//     {
//       ...Wrapper,
//       data: () => ({
//         value: '吃饭',
//       }),
//       template: `
//       <var-select clearable v-model="value">
//         <var-option label="吃饭" />
//         <var-option label="睡觉" />
//       </var-select>
//     `,
//     },
//     { attachTo: document.body }
//   )

//   await wrapper.find('.var-icon-close-circle').trigger('click')
//   expect(wrapper.vm.value).toBe(undefined)

//   wrapper.destroy()
// })

// test('test select multiple value', async () => {
//   const wrapper = mount(
//     {
//       ...Wrapper,
//       data: () => ({
//         value: [],
//       }),
//       template: `
//       <var-select multiple v-model="value">
//         <var-option label="吃饭" />
//         <var-option label="睡觉" />
//       </var-select>
//     `,
//     },
//     { attachTo: document.body }
//   )

//   await wrapper.find('.var-select__wrap').trigger('click')

//   Array.from(document.querySelectorAll('.var-option')).forEach((el) => trigger(el, 'click'))
//   expect(wrapper.vm.value).toStrictEqual(['吃饭', '睡觉'])

//   wrapper.destroy()
// })

// test('test select multiple value in chips', async () => {
//   const wrapper = mount(
//     {
//       ...Wrapper,
//       data: () => ({
//         value: [],
//       }),
//       template: `
//       <var-select multiple chip v-model="value">
//         <var-option label="吃饭" />
//         <var-option label="睡觉" />
//       </var-select>
//     `,
//     },
//     { attachTo: document.body }
//   )

//   await wrapper.find('.var-select__wrap').trigger('click')

//   Array.from(document.querySelectorAll('.var-option')).forEach((el) => trigger(el, 'click'))
//   expect(wrapper.vm.value).toStrictEqual(['吃饭', '睡觉'])
//   await delay(16)

//   await wrapper.find('.var-chip--close').trigger('click')
//   expect(wrapper.vm.value).toStrictEqual(['睡觉'])

//   wrapper.destroy()
// })

// test('test select validation', async () => {
//   const wrapper = mount(
//     {
//       ...Wrapper,
//       data: () => ({
//         value: '',
//       }),
//       template: `
//       <var-select ref="select" :rules="[v => !!v || '您必须选择一个']" v-model="value">
//         <var-option label="吃饭" />
//         <var-option label="睡觉" />
//       </var-select>
//     `,
//     },
//     { attachTo: document.body }
//   )

//   const { select } = wrapper.vm.$refs

//   select.validate()
//   await delay(16)
//   expect(wrapper.find('.var-form-details__message').text()).toBe('您必须选择一个')
//   expect(wrapper.html()).toMatchSnapshot()

//   await wrapper.find('.var-select__wrap').trigger('click')
//   await trigger(document.querySelector('.var-option'), 'click')
//   await delay(16)
//   expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()

//   select.reset()
//   expect(wrapper.vm.value).toBe(undefined)

//   wrapper.destroy()
// })

// test('test select focus & blur methods', async () => {
//   const wrapper = mount(
//     {
//       ...Wrapper,
//       data: () => ({
//         value: '',
//       }),
//       template: `
//       <var-select ref="select" :rules="[v => !!v || '您必须选择一个']" v-model="value">
//         <var-option label="吃饭" />
//         <var-option label="睡觉" />
//       </var-select>
//     `,
//     },
//     { attachTo: document.body }
//   )

//   const { select } = wrapper.vm.$refs

//   select.focus()
//   await delay(16)
//   expect(wrapper.html()).toMatchSnapshot()

//   select.blur()
//   await delay(16)
//   expect(wrapper.html()).toMatchSnapshot()

//   wrapper.destroy()
// })
