import { Checkbox, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FiltersCategory, FiltersWrapper } from '../styled'
import update from 'react-addons-update'

interface IFilters {
    listing: any
    filters: any
    setFilters: (filter: any) => void
}

export function Filters({ listing, filters, setFilters } : IFilters) {
    const uniqExperience: number[] = React.useMemo(() => {
        return listing.map((lawyer: any) => parseInt(lawyer.experience || 0))
    }, [listing])

    function populateFilterCount(filterKey: string, filter: any) {
        if (filterKey === 'experience') {
            const options: any = {}
            Object.entries(filter.options).map(([filterValue, filterOption]: any) => {
                const value = parseInt(filterValue)
                options[filterValue] = {
                    ...filterOption,
                    count: value === 100
                        ? uniqExperience.filter((exp: number) => exp > 25).length
                        : value === 5
                            ? uniqExperience.filter((exp: number) => exp < 6).length
                            : uniqExperience.filter((exp: number) => (value - 5 < exp) && (value + 1 > exp)).length
                }
            })
            return ({ ...filter, options })
        }
        return filter
    }
    function onExpFilterChange(filterKey: string, option: any) {
        const newFilters = update(filters, {
            [filterKey]: {
                options: {
                    [option.value]: {
                        selected: { $set: !option.selected }
                    }
                }
            }
        })
        setFilters(newFilters)
    }

    return (
        <FiltersWrapper>
            <Text fontSize="md" fontFamily="Raleway">Filters</Text>
            {Object.entries(filters).map(([filterKey, filter]: any, i: number) => {
                const filtersWithCount = populateFilterCount(filterKey, filter)
                return (
                    <FiltersCategory key={i}>
                        <Text color="#222" fontSize="sm">{filtersWithCount.filterLabel}</Text>
                        <Flex p={2} flexDirection="column">
                            {Object.entries(filtersWithCount.options).map(([filterValue, option]: any, j: number) => (
                                <Flex key={j}>
                                    <Checkbox
                                        disabled={!option.count}
                                        defaultIsChecked={option.selected}
                                        onChange={() => onExpFilterChange(filterKey, option)}
                                    >
                                        <Text color={option.count ? "#727272" : "#a1a1a1"} fontSize="xs">{option.label} ({option.count})</Text>
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
