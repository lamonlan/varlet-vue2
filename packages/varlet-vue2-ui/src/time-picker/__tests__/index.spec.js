import example from '../example'
import TimePicker from '..'
import VarTimePicker from '../TimePicker'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test timePicker example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test timePicker plugin', () => {
  Vue.use(TimePicker)
  expect(Vue.component(TimePicker.name)).toBeTruthy()
})

// test('test timePicker style and format', async () => {
//   const template = `
//     <var-time-picker
//       :format="format"
//       v-model="time"
//       shadow
//       header-color="purple"
//       color="#7bb872"
//     />
//   `
//   const wrapper = mount({
//     components: {
//       [VarTimePicker.name]: VarTimePicker,
//     },
//     data() {
//       return {
//         format: 'ampm',
//         time: '05:10',
//       }
//     },
//     template,
//   })

//   await delay(0)

//   expect(wrapper.html()).toMatchSnapshot()

//   await wrapper.setData({ format: '24hr' })

//   expect(wrapper.html()).toMatchSnapshot()
// })

// test('test max and min', async () => {
//   const template = `<var-time-picker v-model="time" :max="max" :min="min" />`
//   const wrapper = mount({
//     components: {
//       [VarTimePicker.name]: VarTimePicker,
//     },
//     data() {
//       return {
//         time: '11:11',
//         max: '11:11',
//         min: undefined,
//       }
//     },
//     template,
//   })

//   await delay(0)
//   expect(wrapper.html()).toMatchSnapshot()

//   await wrapper.setData({ max: undefined, min: '11:11' })
//   await delay(200)
//   expect(wrapper.html()).toMatchSnapshot()

//   await wrapper.setData({ max: '11:11', min: '11:11' })
//   await delay(200)
//   const text = wrapper.find('.var-time-picker-title__time').text().replace(/\s+/g, '')
//   expect(text).toBe('11:11')

//   const el = wrapper.find('.var-time-picker-clock__container')
//   await trigger(el, 'touchstart', 50, 30)
//   await trigger(el, 'touchmove', 60, 25)
//   await trigger(el, 'touchend', 60, 25)

//   await delay(200)
//   expect(wrapper.find('.var-time-picker-title__time').text().replace(/\s+/g, '')).toBe('11:11')

//   await wrapper.find('.var-time-picker-title__btn').trigger('click')
//   await wrapper.find('.var-time-picker-clock__item').trigger('click')

//   expect(wrapper.find('.var-time-picker-title__time').text().replace(/\s+/g, '')).toBe('11:11')
// })

// test('test useSeconds prop', () => {
//   const wrapper = mount(VarTimePicker, {
//     propsData: {
//       modelValue: '11:11',
//       useSeconds: true,
//     },
//   })

//   expect(wrapper.html()).toMatchSnapshot()
// })

// test('test readonly prop', async () => {
//   const template = `<var-time-picker v-model="time" readonly />`
//   const wrapper = mount({
//     components: {
//       [VarTimePicker.name]: VarTimePicker,
//     },
//     data() {
//       return {
//         time: '11:11',
//       }
//     },
//     template,
//   })

//   await delay(0)

//   const el = wrapper.find('.var-time-picker-clock__container')

//   await trigger(el, 'touchstart', 40, 30)
//   await trigger(el, 'touchmove', 20, 25)
//   await trigger(el, 'touchend', 30, 25)

//   await delay(200)
//   expect(wrapper.find('.var-time-picker-title__time').text().replace(/\s+/g, '')).toBe('11:11')

//   await wrapper.find('.var-time-picker-title__btn').trigger('click')
//   await wrapper.find('.var-time-picker-clock__item').trigger('click')

//   expect(wrapper.find('.var-time-picker-title__time').text().replace(/\s+/g, '')).toBe('11:11')
// })

// test('test v-model and onChange event', async () => {
//   const change = jest.fn()

//   const template = `<var-time-picker v-model="time" use-seconds format="24hr" @change="change" />`
//   const wrapper = mount({
//     components: {
//       [VarTimePicker.name]: VarTimePicker,
//     },
//     data() {
//       return {
//         time: '11:11:11',
//       }
//     },
//     methods: {
//       change,
//     },
//     template,
//   })

//   await delay(0)

//   const el = wrapper.find('.var-time-picker-clock__container')

//   await trigger(el, 'touchstart', 40, 30)
//   await trigger(el, 'touchmove', 20, 25)
//   await trigger(el, 'touchend', 30, 25)

//   await delay(200)
//   expect(wrapper.find('.var-time-picker-title__time').text()).not.toBe('11:11:11')
//   expect(wrapper.find('.var-time-picker-title__time').findAll('.var-time-picker-title__btn').at(1).text()).toBe('11')
//   expect(wrapper.find('.var-time-picker-title__time').findAll('.var-time-picker-title__btn').at(2).text()).toBe('11')

//   await wrapper.find('.var-time-picker-title__time').findAll('.var-time-picker-title__btn').at(1).trigger('click')
//   await delay(200)
//   await trigger(el, 'touchstart', 40, 30)
//   await trigger(el, 'touchmove', 20, 25)
//   await trigger(el, 'touchend', 30, 25)
//   expect(wrapper.find('.var-time-picker-title__time').findAll('.var-time-picker-title__btn').at(1).text()).not.toBe(
//     '11'
//   )
//   expect(wrapper.find('.var-time-picker-title__time').findAll('.var-time-picker-title__btn').at(2).text()).toBe('11')

//   await wrapper.find('.var-time-picker-title__time').findAll('.var-time-picker-title__btn').at(2).trigger('click')
//   await delay(200)
//   await trigger(el, 'touchstart', 40, 30)
//   await trigger(el, 'touchmove', 20, 25)
//   await trigger(el, 'touchend', 30, 25)
//   expect(wrapper.find('.var-time-picker-title__time').findAll('.var-time-picker-title__btn').at(2).text()).not.toBe(
//     '11'
//   )
//   expect(wrapper.vm.time).not.toBe('11:11:11')
//   expect(change).toHaveBeenCalled()
// })

// test('test switch timePicker ampm', async () => {
//   const template = `<var-time-picker v-model="time" use-seconds :min="min" max="19:40:22" />`
//   const wrapper = mount({
//     components: {
//       [VarTimePicker.name]: VarTimePicker,
//     },
//     data() {
//       return {
//         format: 'ampm',
//         time: '05:10:22',
//         min: '2:38:38',
//       }
//     },
//     template,
//   })

//   await delay(0)
//   await wrapper.find('.var-time-picker-title__ampm').findAll('.var-time-picker-title__btn').at(1).trigger('click')
//   expect(wrapper.vm.time).toBe('17:10:22')

//   await wrapper.setData({ min: '6:00:00' })
//   await wrapper.find('.var-time-picker-title__ampm').findAll('.var-time-picker-title__btn').at(0).trigger('click')

//   expect(wrapper.vm.time).toBe('06:10:22')
// })
