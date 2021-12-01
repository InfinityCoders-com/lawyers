import React from 'react'
import SelectSearch from 'react-select-search';

export function Search() {
    const options: any = [
        {name: 'Swedish', value: 'sv'},
        {name: 'English', value: 'en'},
        {
            type: 'group',
            name: 'Group name',
            items: [
                {name: 'Spanish', value: 'es'},
            ]
        },
    ];
    return (
        <SelectSearch
            options={options}
            value={""}
            search={true}
            autoComplete="on"
            placeholder="Search Lawyer, Case"
            renderValue={(valueProps: any) => <input {...valueProps} />}
        />
    )
}
