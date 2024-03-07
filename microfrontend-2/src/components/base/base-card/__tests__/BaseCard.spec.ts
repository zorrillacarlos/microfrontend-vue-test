import BaseCard from '../BaseCard.vue'
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

// Mock global setTimeout
vi.useFakeTimers()

describe('BaseCard', () => {
  it('displays the loader when isLoading is true', () => {
    const wrapper = mount(BaseCard)
    expect(wrapper.find('.loader').exists()).toBe(true)
    expect(wrapper.find('article').exists()).toBe(false)
  })

  it('hides the loader and displays content after loading', async () => {
    const wrapper = mount(BaseCard)

    // Advance the timer to simulate loading time
    vi.runAllTimers()

    // Wait for the component to update after changing isLoading state
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.loader').exists()).toBe(false)
    expect(wrapper.find('article').exists()).toBe(true)
    expect(wrapper.find('article').classes()).toContain('fade-in')
  })

  it('renders slots content correctly after loading', async () => {
    const wrapper = mount(BaseCard, {
      slots: {
        title: '<div>Este es el título</div>',
        body: '<p>Este es el contenido del texto de la tarjeta.</p>'
      }
    })

    // Advance the timer and wait for the component to update
    vi.runAllTimers()
    await wrapper.vm.$nextTick()

    // Verify if the title slot content renders correctly
    expect(wrapper.find('.base-card__title').exists()).toBe(true)
    expect(wrapper.find('.base-card__title').html()).toContain('Este es el título')

    // Verify if the body slot content renders correctly
    expect(wrapper.find('.base-card__body').exists()).toBe(true)
    expect(wrapper.find('.base-card__body').html()).toContain(
      'Este es el contenido del texto de la tarjeta.'
    )
  })
})

// Restore timers to their original behavior after tests
vi.restoreAllMocks()