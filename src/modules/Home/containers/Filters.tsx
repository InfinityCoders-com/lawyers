import { Checkbox, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FiltersCategory, FiltersWrapper } from '../styled'

interface IFilters {
    listing: any
}

export function Filters({ listing } : IFilters) {
    const filters = [{
        filterKey: "experience",
        filterLabel: 'Experience',
        options: [{
            label: '25+ Years',
            value: 100,
            selected: true
        },{
            label: '21 - 25 Years',
            value: 25,
            selected: true
        },{
            label: '16 - 20 Years',
            value: 20,
            selected: true
        },{
            label: '11 - 15 Years',
            value: 15,
            selected: false
        },{
            label: '6 - 10 Years',
            value: 10,
            selected: true
        },{
            label: '0 - 5 Years',
            value: 5,
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
    const uniqExperience: number[] = React.useMemo(() => {
        return Array.from(new Set(listing.map((lawyer: any) => parseInt(lawyer.experience || 0))))
    }, [listing])
    return (
        <FiltersWrapper>
            <Text fontSize="20" fontFamily="Raleway">Filters</Text>
            {filters.map((filter: any, i: number) => {
                const options = filter.options.filter((option: any) => {
                    if (option.value === 100) {
                        return uniqExperience.filter((exp: number) => exp > 25).length
                    } else if (option.value === 5) {
                        return uniqExperience.filter((exp: number) => exp < 6).length
                    } else {
                        return uniqExperience.filter((exp: number) => exp > (option.value - 4) && exp < option.value).length
                    }
                })
                if(!options.length) {
                    return null
                }
                return (
                    <FiltersCategory key={i}>
                        <Text color="#222" fontSize="md">{filter.filterLabel}</Text>
                        <Flex p={2} flexDirection="column">
                            {options.map((option: any, j: number) => (
                                <Flex key={j}>
                                    <Checkbox defaultIsChecked={option.selected}>
                                        <Text color="#727272" fontSize="sm">{option.label}</Text>
                                    </Checkbox>
                                </Flex>
                            ))}
                        </Flex>
                    </FiltersCategory>
                )}
            )}
        </FiltersWrapper>
    )
}
