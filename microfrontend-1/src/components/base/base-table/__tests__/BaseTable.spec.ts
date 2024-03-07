import BaseTable from '../BaseTable.vue'
import type { IRowValues } from '../interfaces'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('BaseTable', () => {
  it('renders correctly with props', () => {
    const headData: string[] = ['Name', 'Age', 'Location']
    const bodyData: IRowValues[] = [
      {
        id: '1',
        values: [
          { id: 'name', value: 'Alice' },
          { id: 'age', value: '30' },
          { id: 'location', value: 'Wonderland' }
        ]
      }
    ]

    const wrapper = mount(BaseTable, {
      props: {
        head: headData,
        body: bodyData
      },
      slots: {
        title: '<span>Title Slot Content</span>',
        head: 'Head Slot Content',
        cell: 'Cell Slot Content'
      }
    })

    // Verificar si el título se muestra correctamente
    expect(wrapper.find('.base-table__title').exists()).toBe(true)
    expect(wrapper.find('.base-table__title').html()).toContain('Title Slot Content')

    // Verificar si los encabezados de la tabla se renderizan correctamente
    const thElements = wrapper.findAll('.base-table__head th')
    expect(thElements.length).toBe(headData.length)

    // Verificar si el cuerpo de la tabla se renderiza correctamente
    const trElements = wrapper.findAll('.base-table__body tr')
    expect(trElements.length).toBe(bodyData.length)

    // Verificar si las celdas de la tabla se renderizan correctamente
    const tdElements = wrapper.findAll('.base-table__body td')
    expect(tdElements.length).toBe(bodyData.reduce((sum, row) => sum + row.values.length, 0))
  })

  // Caso de prueba para cuando 'head' está vacío
  it('renders no table headers when head prop is empty', () => {
    const wrapper = mount(BaseTable, {
      props: {
        head: [],
        body: [{ id: '1', values: [{ id: 'name', value: 'Alice' }] }]
      }
    })

    // Verificar que no se rendericen encabezados de la tabla
    const thElements = wrapper.findAll('.base-table__head th')
    expect(thElements.length).toBe(0)
  })

  // Caso de prueba para cuando 'body' está vacío
  it('renders no table rows when body prop is empty', () => {
    const wrapper = mount(BaseTable, {
      props: {
        head: ['Name'],
        body: []
      }
    })

    // Verificar que no se rendericen filas en el cuerpo de la tabla
    const trElements = wrapper.findAll('.base-table__body tr')
    expect(trElements.length).toBe(0)
  })

  // Caso de prueba para manejar claves duplicadas en 'body'
  it('handles duplicate keys in body correctly', () => {
    const bodyDataWithDuplicates: IRowValues[] = [
      {
        id: '1',
        values: [
          { id: 'name', value: 'Alice' },
          { id: 'name', value: 'Alice Duplicate' } // Clave duplicada intencionalmente
        ]
      }
    ]

    const wrapper = mount(BaseTable, {
      props: {
        head: ['Name'],
        body: bodyDataWithDuplicates
      }
    })

    // Verificar que se rendericen todas las celdas, incluso con claves duplicadas
    const tdElements = wrapper.findAll('.base-table__body td')
    expect(tdElements.length).toBe(bodyDataWithDuplicates[0].values.length)
  }),
    // Caso de prueba para verificar si los slots personalizados se pasan y renderizan correctamente
    it('passes and renders custom slots correctly', () => {
      const wrapper = mount(BaseTable, {
        props: {
          head: ['Name'],
          body: [{ id: '1', values: [{ id: 'name', value: 'Alice' }] }]
        },
        slots: {
          title: '<span>Title Slot Content</span>',
          head: 'Head Slot Content',
          cell: 'Cell Slot Content'
        }
      })

      // Verificar si el slot personalizado del título se renderiza correctamente
      expect(wrapper.find('.base-table__title span').text()).toContain('Title Slot Content')

      // Verificar si el slot personalizado del encabezado se renderiza correctamente
      expect(wrapper.find('.base-table__head th').html()).toContain('Head Slot Content')

      // Verificar si el slot personalizado de la celda se renderiza correctamente
      expect(wrapper.find('.base-table__body td').html()).toContain('Cell Slot Content')
    })
})
