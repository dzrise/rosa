import {mount} from "@vue/test-utils"

import TextInput from '@/components/FormComponents/Inputs/TextInput/TextInput'

describe("TextInput render", () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            type: 'text',
            value: '',
            required: false,
            maxlength: null,
            minLength: null,
            placeholder: 'test placeholder',
            icon: '',
            errors: {},
        };
        wrapper = mount(TextInput, {props})

    });

    it('Component to be exist', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Check default props', () => {
        expect(wrapper.vm.type).toBe('text');
        expect(wrapper.vm.value).toBe('');
        expect(wrapper.vm.required).toBe(false);
        expect(wrapper.vm.maxlength).toBeNull();
        expect(wrapper.vm.minLength).toBeNull();
        expect(wrapper.vm.placeholder).toBe('test placeholder');
        expect(wrapper.vm.icon).toBe('');
        expect(typeof wrapper.vm.errors).toBe('object');
    });

    it('should be input has classes [input, input__label, input__field]', () => {
        expect(wrapper.find('.input').exists()).toBe(true);
        expect(wrapper.find('.input__label').exists()).toBe(true);
        expect(wrapper.find('.input__field').exists()).toBe(true);
    });

})
describe("Test input events", () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            type: 'text',
            value: '',
            required: false,
            maxlength: null,
            minLength: null,
            placeholder: 'test placeholder',
            icon: '',
            errors: {},
        };
        wrapper = mount(TextInput, {props})

    });

    it('check input event', () => {
        const input = wrapper.find('input')
        // // console.log(input)
        // input.trigger('input')
        // expect(actions.actionInput).toHaveBeenCalled()
        wrapper.vm.$emit('input')
        input.trigger('input')
        // input.element.value = 'input'
        // input.trigger('input')
        // await wrapper.trigger('input').then(res => console.log(res))
        // console.log(wrapper.emitted())
    })
})
