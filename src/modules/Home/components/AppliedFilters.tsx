import React from 'react'
import isEqual from 'lodash/isEqual'
import styled from '@emotion/styled';

const FilterTag = styled.span`
    font-size: 12px;
    position: relative;
    border-radius: 20px;
    background: #ffcece;
    display: inline-block;
    border: 1px solid #ececec;
    padding: 1px 25px 1px 10px;
    &:after {
        content: 'x';
        top: 2px;
        right: 2px;
        width: 16px;
        height: 16px;
        color: #a9a9a9;
        font-size: 9px;
        border-radius: 50%;
        text-align: center;    
        position: absolute;
        border: 1px solid #a9a9a9;
    }
`

function AppliedFilters({filters, setFilters}: any) {
    console.log(filters);
    const activeFilters = React.useMemo(() => {
        const tempActiveFilters: any = []
        Object.values(filters).map((filter: any) => {
            const tempOptions = Object.values(filter?.options)
            if(tempOptions?.length) {
                const activeOptions = tempOptions.filter((option: any) => option.selected)
                if(activeOptions?.length) {
                    tempActiveFilters.push({
                        ...filter,
                        options: activeOptions
                    })
                }
            }
        })
        return tempActiveFilters
    }, [filters])
    console.log(activeFilters)
    return (
        <div>
            {activeFilters.map((filter: any, i: number) => {
                return (
                    <div key={`filter-${i}`}>
                        {/* <div>{filter.filterLabel}</div> */}
                        <div>{filter.options.map((option: any, j: number) => (
                            <FilterTag key={`filter-option-${j}`}>{option.label}</FilterTag>    
                        ))}</div>
                    </div>
                )
            })}
        </div>
    )
}

function compare(props: any, nextProps: any) {
    return isEqual(props.filters, nextProps.filters)
}

export default React.memo(AppliedFilters, compare)
