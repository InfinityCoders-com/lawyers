import { Checkbox, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FiltersCategory, FiltersWrapper } from '../styled'

export function Filters() {
    const filters = [{
        filterKey: "experience",
        filterLabel: 'Experience',
        options: [{
            label: '12 - 20 Years',
            value: '20',
            selected: true
        },{
            label: '9 - 12 Years',
            value: '12',
            selected: false
        },{
            label: '6-8 Years',
            value: '8',
            selected: true
        },{
            label: '1-5 Years',
            value: '5',
            selected: true
        }]
    },{
        filterKey: "category",
        filterLabel: 'Category',
        options: [{
            label: '12 - 20 Years',
            value: '20',
            selected: true
        },{
            label: '9 - 12 Years',
            value: '12',
            selected: false
        },{
            label: '6-8 Years',
            value: '8',
            selected: true
        },{
            label: '1-5 Years',
            value: '5',
            selected: true
        }]
    }]
    return (
        <FiltersWrapper>
            <Text fontSize="20" fontFamily="Raleway">Filters</Text>
            {filters.map((filter: any, i: number) => (
                <FiltersCategory key={i}>
                    <Text color="#222" fontSize="md">{filter.filterLabel}</Text>
                    <Flex p={2} flexDirection="column">
                        {filter.options.map((option: any, j: number) => (
                            <Flex key={j}>
                                <Checkbox defaultIsChecked={option.selected}>
                                    <Text color="#727272" fontSize="sm">{option.label}</Text>
                                </Checkbox>
                            </Flex>
                        ))}
                    </Flex>
                </FiltersCategory>
            ))}
        </FiltersWrapper>
    )
}
